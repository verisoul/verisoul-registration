const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({origin: '*'});
const fetch = require('node-fetch');

// let credential = require('./resources/credential.json');
// let verifyResponse = require('./resources/verifyResponse.json');

// spruce config
const SPRUCE_HOST = 'http://35.222.92.253:8080';

const app = express();
app.use(cors);

app.post('/issue-credential', (req, res) => {
    // make a call to Spruce Server
    let credential = {
        "credential": {
            "@context": [
                "https://www.w3.org/2018/credentials/v1",
                "https://www.w3.org/2018/credentials/examples/v1"
            ],
                "id": "http://example.gov/credentials/3732",
                "type": [
                "VerifiableCredential",
                "UniversityDegreeCredential"
            ],
            "issuanceDate": "2020-03-16T22:37:26.544Z",
            "credentialSubject": {
            "id": "did:key:z6MkvFsRb9siYkoU1Ly3vkSw5X6dB33zuADRbiBD4rdY4YEX",
                "degree": {
                "type": "BachelorDegree",
                    "name": "Bachelor of Science and Arts"
                }
            }
        },
        "options": {
        "created": "2020-04-02T18:48:36Z"
        }
    }

    fetch(`${SPRUCE_HOST}/credentials/issue`, {
        method: 'POST',
        body: credential,
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
        .then(json => {
            res.status(200).send(json);
        }).catch((err) => {
            res.status(500).send(err);
    })
})

exports.app = functions.https.onRequest(app);

app.post('/verify-credential', (req, res) => {
    // make verify call to Spruce server

    let body = {
        verification: credential
    };

    res.status(200).send(verifyResponse);
})