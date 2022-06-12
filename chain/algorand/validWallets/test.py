from time import time, sleep

from algosdk import account, encoding
from algosdk.logic import get_application_address
from contracts.operations import createWalletApp
# from contracts.util import (
#     getAppGlobalState,
#     getLastBlockTimestamp,
# )

from contracts.testing.setup import getAlgodClient
from auction.testing.resources import (
    getTemporaryAccount,
    optInToAsset,
    createDummyAsset,
)


def simple_test():
    client = getAlgodClient()

    print("Generating temporary accounts...")
    person1 = getTemporaryAccount(client)
    person2 = getTemporaryAccount(client)

    print("Person 1 account ", person1.getAddress())
    print("Person 2 account ", person2.getAddress(), "\n")

    appID = createWalletApp(
        client=client,
        sender=creator,
        startTime=startTime,
        endTime=endTime,
        reserve=reserve,
        minBidIncrement=increment,
    )
    print(
        "Done. The auction app ID is",
        appID,
        "and the escrow account is",
        get_application_address(appID),
        "\n",
    )

    setupAuctionApp(
        client=client,
        appID=appID,
        funder=creator,
        nftHolder=seller,
        nftID=nftID,
        nftAmount=nftAmount,
    )
    print("Done\n")


simple_test()
