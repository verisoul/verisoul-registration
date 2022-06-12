import React from "react";
import Index from "pages/index";
import Biometrics from "pages/biometrics";
import Faceid from "pages/faceid";
import Voiceid from "pages/voiceid";
import Soulcredential from "pages/soulcredential";
import Traitsecosystemteaser from "pages/traitsecosystemteaser";
import Traitsecosystem from "pages/traitsecosystem";
import Unidays from "pages/unidays";
import Studentcredential from "pages/studentcredential";
import SolanaWalletcallback from "pages/solanaWalletcallback";
import Walletnotverified from "pages/walletnotverified";
import SolanaWalletverify from "pages/solanaWalletverify";
import SolanaFaceAuth from "pages/solanaFaceAuth";
import SolanaConfirmTransaction from "pages/solanaConfirmTransaction";
import SolanaPurchaseComplete from "pages/solanaPurchaseComplete";
import AlgorandWalletcallback from "pages/algorandWalletcallback";
import AlgorandWalletnotverified from "pages/algorandWalletnotverified";
import AlgorandWalletverify from "pages/algorandWalletverify";
import AlgorandFaceAuth from "pages/algorandFaceAuth";
import AlgorandConfirmTransaction from "pages/algorandConfirmTransaction";
import AlgorandPurchaseComplete1 from "pages/algorandPurchaseComplete1";
import NearWalletcallback from "pages/nearWalletcallback";
import NearWalletnotverified from "pages/nearWalletnotverified";
import NearWalletverify from "pages/nearWalletverify";
import NearFaceAuth from "pages/nearFaceAuth";
import NearConfirmTransaction from "pages/nearConfirmTransaction";
import NearPurchaseComplete from "pages/nearPurchaseComplete";
import AvaxWalletcallback from "pages/avaxWalletcallback";
import AvaxWalletnotverified from "pages/avaxWalletnotverified";
import AvaxWalletverify from "pages/avaxWalletverify";
import AvaxFaceAuth from "pages/avaxFaceAuth";
import AvaxConfirmTransaction from "pages/avaxConfirmTransaction";
import AvaxPurchaseComplete from "pages/avaxPurchaseComplete";
import OctopusWalletcallback from "pages/octopusWalletcallback";
import OctopusWalletnotverified from "pages/octopusWalletnotverified";
import OctopusWalletverify from "pages/octopusWalletverify";
import OctopusFaceAuth from "pages/octopusFaceAuth";
import OctopusConfirmTransaction from "pages/octopusConfirmTransaction";
import OctopusPurchaseComplete from "pages/octopusPurchaseComplete";
import PathPicker from "pages/pathPicker";
import Page404 from "pages/page404";
import WalletCallback from "./pages/walletCallback";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/biometrics' component={Biometrics}/>
			<Route exact path='/faceid' component={Faceid}/>
			<Route exact path='/voiceid' component={Voiceid}/>
			<Route exact path='/soulcredential' component={Soulcredential}/>
			<Route exact path='/traitsecosystemteaser' component={Traitsecosystemteaser}/>
			<Route exact path='/traitsecosystem' component={Traitsecosystem}/>
			<Route exact path='/unidays' component={Unidays}/>
			<Route exact path='/studentcredential' component={Studentcredential}/>
			<Route exact path='/solana/walletcallback' component={SolanaWalletcallback}/>
			<Route exact path='/walletnotverified' component={Walletnotverified}/>
			<Route exact path='/solana/walletverify' component={SolanaWalletverify}/>
			<Route exact path='/solana/FaceAuth' component={SolanaFaceAuth}/>
			<Route exact path='/solana/ConfirmTransaction' component={SolanaConfirmTransaction}/>
			<Route exact path='/Solana/purchaseComplete' component={SolanaPurchaseComplete}/>
			<Route exact path='/algorand/walletcallback' component={AlgorandWalletcallback}/>
			<Route exact path='/algorand/walletnotverified' component={AlgorandWalletnotverified}/>
			<Route exact path='/algorand/walletverify' component={AlgorandWalletverify}/>
			<Route exact path='/algorand/FaceAuth' component={AlgorandFaceAuth}/>
			<Route exact path='/algorand/ConfirmTransaction' component={AlgorandConfirmTransaction}/>
			<Route exact path='/algorand/purchaseComplete1' component={AlgorandPurchaseComplete1}/>
			<Route exact path='/near/walletcallback' component={NearWalletcallback}/>
			<Route exact path='/near/walletnotverified' component={NearWalletnotverified}/>
			<Route exact path='/near/walletverify' component={NearWalletverify}/>
			<Route exact path='/near/FaceAuth' component={NearFaceAuth}/>
			<Route exact path='/near/ConfirmTransaction' component={NearConfirmTransaction}/>
			<Route exact path='/near/purchaseComplete' component={NearPurchaseComplete}/>
			<Route exact path='/avax/walletcallback' component={AvaxWalletcallback}/>
			<Route exact path='/avax/walletnotverified' component={AvaxWalletnotverified}/>
			<Route exact path='/avax/walletverify' component={AvaxWalletverify}/>
			<Route exact path='/avax/FaceAuth' component={AvaxFaceAuth}/>
			<Route exact path='/avax/ConfirmTransaction' component={AvaxConfirmTransaction}/>
			<Route exact path='/avax/purchaseComplete' component={AvaxPurchaseComplete}/>
			<Route exact path='/octopus/walletcallback' component={OctopusWalletcallback}/>
			<Route exact path='/octopus/walletnotverified' component={OctopusWalletnotverified}/>
			<Route exact path='/octopus/walletverify' component={OctopusWalletverify}/>
			<Route exact path='/octopus/FaceAuth' component={OctopusFaceAuth}/>
			<Route exact path='/octopus/ConfirmTransaction' component={OctopusConfirmTransaction}/>
			<Route exact path='/octopus/purchaseComplete' component={OctopusPurchaseComplete}/>
			<Route exact path='/path_picker' component={PathPicker}/>
			<Route exact path='/wallet_callback' component={WalletCallback}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
