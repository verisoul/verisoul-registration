// const functions = require('firebase-functions');
// const express = require('express');
// const cors = require('cors')({origin: true});
// const cors = require('cors')({origin: '*'});

import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors);

app.post('/issue-credential', async (req, res) => {
    // read in the bio data

    // write bio data to firestore

    // create credential

    res.status(200).send('OK');
})


exports.app = functions.https.onRequest(app);
