import React from "react";
import theme from "theme";
import { Theme, Text, Section, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"near/walletverify"} />
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
		<Components.NearHeader />
		<Section>
			<Text margin="0px 0px 0px 0px" sm-font="700 32px --fontFamily-googleInter" sm-text-align="center" sm-margin="5px 0px 0px 0px">
				Ref Finance would like to verify your:{" "}
			</Text>
		</Section>
		<Section sm-padding="0 0 10px 0">
			<List
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 20px"
				list-style-type="disc"
				user-select="none"
				pointer-events="auto"
				as="ol"
			>
				<Text margin="0px 0px 0px 0px" sm-font="500 24px --fontFamily-googleInter">
					Soul Credential
				</Text>
				<Text margin="0px 0px 0px 0px" sm-font="500 24px --fontFamily-googleInter">
					Student ID trait
				</Text>
				<Text margin="0px 0px 0px 0px" sm-font="500 24px --fontFamily-googleInter">
					Real-Real Time Biometrics
				</Text>
			</List>
		</Section>
		<Components.Accept>
			<Override slot="button" type="link" href="/near/FaceAuth" />
			<Override slot="button1" type="link" />
		</Components.Accept>
		<Components.NearWallet />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});