from pyteal import *

def approval_program():
    admin_key = Bytes("admin")
    valid_wallet_count_key = Bytes("valid_wallet_count")

    on_create = Seq(
        App.globalPut(admin_key, Txn.application_args[0]),
        App.globalPut(valid_wallet_count_key, Int(0)),
        Approve(),
    )

    on_get_wallets_count = App.globalGet(valid_wallet_count_key)
    i = ScratchVar(TealType.uint64)
    totalFees = ScratchVar(TealType.uint64)



    on_update_count = App.globalGet(valid_wallet_count_key)
    on_update_wallets = Seq(
        App.globalPut(Bytes(on_update_count + 1), Bytes(Txn.application_args[0])),
        App.globalPut(valid_wallet_count_key, Int(on_update_count + 1)),
        Approve(),
    )

    noop_method = Txn.application_args[0]
    handle_noop = Cond(
        [noop_method == Bytes("get_wallets"), on_get_wallets],
        [noop_method == Bytes("update_wallets"), on_update_wallets],
    )

    handle_optin = Seq(
        [Reject()],
    )

    handle_closeout = Seq(
        [Reject()],
    )

    handle_updateapp = Err()

    handle_deleteapp = Err()

    program = Cond(
        [Txn.application_id() == Int(0), on_create],
        [Txn.on_completion() == OnComplete.NoOp, handle_noop],
        [Txn.on_completion() == OnComplete.OptIn, handle_optin],
        [Txn.on_completion() == OnComplete.CloseOut, handle_closeout],
        [Txn.on_completion() == OnComplete.UpdateApplication, handle_updateapp],
        [Txn.on_completion() == OnComplete.DeleteApplication, handle_deleteapp]
    )
    return program

def clear_state_program():
    return Approve()

with open('boilerplate_approval_pyteal.teal', 'w') as f:
    compiled = compileTeal(approval_program(), Mode.Application, version=5)
    f.write(compiled)
