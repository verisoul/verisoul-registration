const fetch = require('node-fetch');
const uuid = require('uuid');

const MTTR_OAUTH_BASE_URL = `https://auth.mattr.global/oauth/token`;
const MTTR_BASE_URL = `https://niel-ketkar-lnnmbj.vii.mattr.global/core/v1`;

const getOauthToken = async (clientId, clientSecret) => {
    const resp = await fetch(
        MTTR_OAUTH_BASE_URL,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client_id: clientId,
                client_secret: clientSecret,
                audience: 'https://vii.mattr.global',
                grant_type: 'client_credentials'
            })
        }
    );

    const data = await resp.json();
    return data?.access_token;
}

const getDID = async (keyType) => {
    let jwtToken = await getOauthToken(process.env.MATTR_CLIENT_ID, process.env.MATTR_CLIENT_SECRET);

    const resp = await fetch(
        `${MTTR_BASE_URL}/dids`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify({
                method: 'key',
                options: {keyType: keyType}
            })
        }
    );

    const data = await resp.json();
    return data?.did;
}

const issueVerifiableCredential = async (subjectDid, type, claims) => {
    let jwtToken = await getOauthToken(process.env.MATTR_CLIENT_ID, process.env.MATTR_CLIENT_SECRET);

    const resp = await fetch(
        `${MTTR_BASE_URL}/credentials`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify({
                '@context': [
                    'https://www.w3.org/2018/credentials/v1',
                    'https://schema.org'
                ],
                subjectId: subjectDid,
                type: [
                    'VerifiableCredential',
                    type
                ],
                claims: claims,
                issuer: {
                    id: process.env.ISSUING_DID,
                    name: 'Example University'
                },
                persist: true,
                tag: 'identifier123',
                revocable: true
            })
        }
    );

    const data = await resp.json();
    return data;
}

const createDIDMessage = (credential) => {
    let uuid = uuid.v4();
    let subjectDID = credential?.credentialSubject?.id;

    let DIDMessage = {
        id: uuid,
        type: 'https://mattr.global/schemas/verifiable-credential/offer/Direct',
        to: [subjectDID],
        from: process.env.ISSUING_DID,
        created_time: Date.now(),
        body: {
            credentials: [credential],
            domain: "niel-ketkar-lnnmbj.vii.mattr.global"
        }
    };
    return DIDMessage;

}

const encryptDIDMessage = async (DIDMessage) => {
    let jwtToken = await getOauthToken(process.env.MATTR_CLIENT_ID, process.env.MATTR_CLIENT_SECRET);

    const resp = await fetch(
        `${MTTR_BASE_URL}/messaging/encrypt`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify({
                senderDidUrl: process.env.ISSUING_DID_URL,
                recipientDidUrls: DIDMessage.to,
                payload: {
                    DIDMessage
                }
            })
        }
    );

    const encryptedMsg = await resp.json();
    return encryptedMsg;
}

const sendDIDMessage = async (subjectDID, encryptedMsg) => {
    let jwtToken = await getOauthToken(process.env.MATTR_CLIENT_ID, process.env.MATTR_CLIENT_SECRET);

    const resp = await fetch(
        `${MTTR_BASE_URL}/messaging/send`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify({
                to: subjectDID,
                message: encryptedMsg
            })
        }
    );

    await resp.json();
    return

}

const verifyCredential = async (presentation) => {
    let jwtToken = await getOauthToken(process.env.MATTR_CLIENT_ID, process.env.MATTR_CLIENT_SECRET);

    const resp = await fetch(
        `${MTTR_BASE_URL}/presentations/verify`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify({
                presentation: presentation
            })
        }
    );

    const isVerified = await resp.json();
    return isVerified;
}

exports.getDID = getDID;
exports.issueVerifiableCredential = issueVerifiableCredential;
exports.createDIDMessage = createDIDMessage;
exports.encryptDIDMessage = encryptDIDMessage;
exports.sendDIDMessage = sendDIDMessage;
exports.verifyCredential = verifyCredential;