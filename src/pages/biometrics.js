import React from "react";
import theme from "theme";
import { Theme, Text, Section, Image, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"biometrics"} />
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
		<Components.Heading />
		<Section>
			<Text margin="0px 0px 0px 0px" sm-color="#ffffff" sm-font="--lead" sm-align-self="center">
				You’re unique! Prove it everywhere.{" "}
			</Text>
			<Text margin="0px 0px 0px 0px" sm-color="#ffffff" sm-font="--headline4" sm-align-self="center">
				With a Soul Credential
			</Text>
		</Section>
		<Section>
			<Box
				min-width="100px"
				min-height="100px"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="space-between"
			>
				<Image
					src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%281%29.png?v=2022-06-11T19:43:55.004Z"
					display="block"
					sm-border-color="#000000"
					sm-filter="--invert"
					sm-max-width="100px"
				/>
				<Text margin="0px 0px 0px 0px" sm-color="#ffffff" sm-font="--headline2">
					Face ID
				</Text>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="space-between"
			>
				<Image src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image.png?v=2022-06-11T19:49:00.510Z" display="block" sm-max-width="100px" />
				<Text margin="0px 0px 0px 0px" sm-color="#ffffff" sm-font="--headline2">
					Voice ID
				</Text>
			</Box>
			<Box min-width="100px" min-height="100px" sm-display="block" sm-align-self="center">
				<Button
					sm-background="--color-light"
					sm-color="#000000"
					sm-border-color="#000000"
					sm-border-width="2px"
					sm-display="block"
					sm-width="100% border-box"
					sm-text-align="center"
					sm-align-items="flex-start"
					sm-margin="20px 0px 0px 0px"
					href="/faceid"
					type="link"
					target="_self"
				>
					Get Your Soul Credential
				</Button>
			</Box>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});