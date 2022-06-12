import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "background": "--color-dark",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "index": {
        "background": "--color-dark",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "biometrics": {
        "background": "--color-dark",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "faceid": {
        "background": "--color-dark",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "voiceid": {
        "background": "--color-dark",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "soulcredential": {
        "background": "--color-dark",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "traitsecosystemteaser": {
        "background": "--color-dark",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "traitsecosystem": {
        "background": "--color-dark",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "unidays": {
        "background": "--color-dark",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "studentcredential": {
        "background": "--color-dark",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "solana/walletcallback": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "walletnotverified": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "solana/walletverify": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "solana/FaceAuth": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "solana/ConfirmTransaction": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "Solana/purchaseComplete": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "algorand/walletcallback": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "algorand/walletnotverified": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "algorand/walletverify": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "algorand/FaceAuth": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "algorand/ConfirmTransaction": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "algorand/purchaseComplete1": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "near/walletcallback": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "near/walletnotverified": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "near/walletverify": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "near/FaceAuth": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "near/ConfirmTransaction": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "near/purchaseComplete": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "avax/walletcallback": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "avax/walletnotverified": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "avax/walletverify": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "avax/FaceAuth": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "avax/ConfirmTransaction": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "avax/purchaseComplete": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "octopus/walletcallback": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "octopus/walletnotverified": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "octopus/walletverify": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "octopus/FaceAuth": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "octopus/ConfirmTransaction": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "octopus/purchaseComplete": {
        "background": "#ffffff",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    },
    "path_picker": {
        "background": "--color-dark",
        "mix-blend-mode": "",
        "transition": ",--transformOut"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
