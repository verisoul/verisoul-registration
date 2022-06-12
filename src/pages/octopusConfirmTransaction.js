import React from "react";
import theme from "theme";
import { Theme, Image, Text, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"octopus/ConfirmTransaction"} />
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
		<Components.ChemistryHeading />
		<Section>
			<Image src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%2810%29.png?v=2022-06-11T20:00:06.999Z" display="block" sm-max-height="100px" />
			<Text margin="0px 0px 0px 0px" sm-font="700 24px --fontFamily-googleInter" sm-text-align="center" sm-margin="5px 0px 0px 0px">
				Success
			</Text>
		</Section>
		<Section>
			<Box
				min-width="100px"
				min-height="100px"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="flex-start"
				sm-margin="0px 0px 0px 20px"
				sm-height="auto"
				sm-min-height="auto"
			>
				<Image src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%2811%29.png?v=2022-06-12T01:47:35.283Z" display="block" sm-height="50px" sm-width="40px" />
				<Text margin="0px 0px 0px 0px" sm-font="500 24px --fontFamily-googleInter" sm-text-align="center" sm-margin="5px 0px 0px 20px">
					Soul Credential
				</Text>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="flex-start"
				sm-margin="0px 0px 0px 20px"
				sm-height="auto"
				sm-min-height="auto"
			>
				<Image src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%2811%29.png?v=2022-06-12T01:47:35.283Z" display="block" sm-height="50px" sm-width="40px" />
				<Text margin="0px 0px 0px 0px" sm-font="500 24px --fontFamily-googleInter" sm-text-align="center" sm-margin="5px 0px 0px 20px">
					Student ID Trait
				</Text>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="flex-start"
				sm-margin="0px 0px 0px 20px"
				sm-height="auto"
				sm-min-height="auto"
			>
				<Image src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%2811%29.png?v=2022-06-12T01:47:35.283Z" display="block" sm-height="50px" sm-width="40px" />
				<Text margin="0px 0px 0px 0px" sm-font="500 24px --fontFamily-googleInter" sm-text-align="center" sm-margin="5px 0px 0px 20px">
					Real-Time Bio
				</Text>
			</Box>
		</Section>
		<Section sm-padding="0 0 24px 0">
			<Text margin="0px 0px 0px 0px" sm-font="500 24px --fontFamily-googleInter" sm-text-align="center" sm-margin="5px 0px 0px 0px">
				Your wallet is now verified{" "}
				<br />
				as a student!
			</Text>
			<Components.DarkButton />
		</Section>
		<Components.NearWallet />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});