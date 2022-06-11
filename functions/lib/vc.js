// const vc = require('@digitalbazaar/vc');
// const {Ed25519VerificationKey2020} = require('@digitalbazaar/ed25519-verification-key-2020');
// const {Ed25519Signature2020} = require('@digitalbazaar/ed25519-signature-2020');

import vc from '@digitalbazaar/vc';
import {Ed25519VerificationKey2020} from '@digitalbazaar/ed25519-verification-key-2020';
import {Ed25519Signature2020} from '@digitalbazaar/ed25519-signature-2020';

const {defaultDocumentLoader} = vc;

/* Adopted from:
https://github.com/digitalbazaar/vc-js
 */
let setupSuite = async () => {
    const keyPair = await Ed25519VerificationKey2020.generate();

    return new Ed25519Signature2020({key: keyPair});
}

const issueCredential = async () => {
    let suite = await setupSuite();
    let documentLoader = defaultDocumentLoader;

    const credential = {
        "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://www.w3.org/2018/credentials/examples/v1"
        ],
        "id": "https://verisoul.com/credentials/1872",
        "type": ["VerifiableCredential", "SoulCredential"],
        "issuer": "https://verisoul.xyz/issuers/565049",
        "issuanceDate": "2010-01-01T19:23:24Z",
        "credentialSubject": {
            "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
            "alumniOf": "Example University"
        }
    };


    const signedVC = await vc.issue({credential, suite, documentLoader});
    console.log(JSON.stringify(signedVC, null, 2));
    return signedVC;
}

// module.exports.issueCredential = issueCredential;
export {issueCredential};
