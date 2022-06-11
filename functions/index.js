const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({origin: true});
// const cors = require('cors')({origin: '*'});

const app = express();
app.use(cors);

app.post('/issue-credential', (req, res) => {
    // do something here
    res.status(200).send('OK');
})


exports.app = functions.https.onRequest(app);
