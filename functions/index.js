// const functions = require('firebase-functions');
// const express = require('express');
// const cors = require('cors')({origin: true});
// const cors = require('cors')({origin: '*'});

import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';

import {issueCredential} from './lib/vc.js';

const app = express();
app.use(cors);

app.post('/issue-credential', async (req, res) => {
    // read in the bio data

    // write bio data to firestore

    // create credential
    let credential = await issueCredential();

    res.status(200).send(credential);
})


exports.app = functions.https.onRequest(app);
