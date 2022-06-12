import React from "react";
import theme from "theme";
import { Theme, Text, Section, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"walletnotverified"} />
		<Helmet>
			<title>
				Halo Soul
			</title>
			<meta name={"description"} content={"Everyone has a soul. Bring it on-chain. "} />
			<meta property={"og:title"} content={"Halo Soul - Everyone has a soul. Bring it on-chain. "} />
			<meta property={"og:description"} content={"Everyone has a soul. Bring it on-chain. "} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/Picture17.png?v=2022-06-11T22:46:19.986Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/Picture17.png?v=2022-06-11T22:46:19.986Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/Picture17.png?v=2022-06-11T22:46:19.986Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/Picture17.png?v=2022-06-11T22:46:19.986Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/Picture17.png?v=2022-06-11T22:46:19.986Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/Picture17.png?v=2022-06-11T22:46:19.986Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/Picture17.png?v=2022-06-11T22:46:19.986Z"} />
			<meta name={"msapplication-TileColor"} content={"#04080C"} />
		</Helmet>
		<Components.Patagonia />
		<Section>
			<Text margin="0px 0px 0px 0px" sm-font="700 32px --fontFamily-googleInter" sm-text-align="center" sm-margin="5px 0px 0px 0px">
				You wallet is not a verified student
			</Text>
		</Section>
		<Section sm-padding="0 0 24px 0">
			<Button
				sm-background="--color-dark"
				sm-color="#ffffff"
				sm-border-color="#000000"
				sm-border-width="2px"
				sm-display="block"
				sm-width="100% border-box"
				sm-text-align="center"
				sm-align-items="flex-start"
				sm-margin="20px 0px 0px 0px"
				href="wallet://"
				type="link"
			>
				Verify as Student
			</Button>
			<Button
				sm-background="--color-dark"
				sm-color="#ffffff"
				sm-border-color="#000000"
				sm-border-width="2px"
				sm-display="block"
				sm-width="100% border-box"
				sm-text-align="center"
				sm-align-items="flex-start"
				sm-margin="20px 0px 0px 0px"
				href="/faceid"
				type="link"
			>
				Back to Patagonia
			</Button>
		</Section>
		<Components.Wallet sm-flex-direction="row" />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});