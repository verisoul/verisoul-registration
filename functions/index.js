const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors')({origin: '*'})

const {getDID, issueVerifiableCredential} = require('./lib/mattr');

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

exports.app = functions.https.onRequest(app);