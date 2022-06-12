import React from "react";
import theme from "theme";
import { Theme, Text, Section, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"algorand/walletcallback"} />
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
		<Components.AlgorandHeader />
		<Section>
			<Text margin="0px 0px 0px 0px" sm-font="700 24px --fontFamily-googleInter" sm-text-align="center" sm-margin="5px 0px 0px 0px">
				Students pay no transaction
				<br />
				fees through 2023!
			</Text>
		</Section>
		<Section>
			<Box
				min-width="100px"
				min-height="100px"
				sm-display="flex"
				sm-height="auto"
				sm-min-height="auto"
				sm-justify-content="center"
				sm-align-items="center"
			>
				<Text margin="0px 0px 0px 0px" sm-font="--headline4">
					$36.9 = 100{" "}
				</Text>
				<Image src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/algorand.png?v=2022-06-12T02:11:54.382Z" display="block" sm-width="40px" sm-height="40px" />
			</Box>
			<Text margin="0px 0px 0px 0px" sm-align-self="center">
				$0.00 in fees (Student Price)
			</Text>
			<Components.DarkButton type="link" href="/algorand/walletnotverified" />
		</Section>
		<Components.AlgorandWallet />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});