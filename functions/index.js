const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors')({origin: '*'});

const {
    getDID,
    issueVerifiableCredential,
    createDIDMessage,
    encryptDIDMessage,
    sendDIDMessage,
    verifyCredential} = require('./lib/mattr');

const app = express();
app.use(cors);

app.post('/issue-credential', async (req, res) => {
    let keyType = 'ed25519';
    let subjectDID = await getDID(keyType);

    let type = 'StudentCredential';
    let claims = {
        active: true,
        studentOf: 'Example University'
    };
    let credential = await issueVerifiableCredential(subjectDID, type, claims);

    res.status(200).send(credential);
})

app.post('/offer-credential', async (req, res) => {
    // Note: SubjectDid must be registered with a Mattr mobile wallet
    // to successfully offer credential
    let credential = req.body?.credential;
    let subjectDID = credential?.credentialSubject?.id;

    let DIDMessage = createDIDMessage(credential);

    let encryptedMessage = await encryptDIDMessage(DIDMessage);

    await sendDIDMessage(subjectDID, encryptedMessage);

    res.status(200).send({
        status: "message sent"
    })
})

app.post('/verify-credential', async (req, res) => {
    // Note: Must pass a credential presentation from SubjectDIDs wallet
    // to be pass verification
    let presentation = req.body?.presentation;
    let isVerified = await verifyCredential(presentation);

    res.status(200).send(isVerified)
})

exports.app = functions.https.onRequest(app);