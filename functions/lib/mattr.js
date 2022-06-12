const fetch = require('node-fetch');

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

exports.getDID = getDID;
exports.issueVerifiableCredential = issueVerifiableCredential;