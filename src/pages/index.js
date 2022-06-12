import React from "react";
import theme from "theme";
import { Theme, Image, Text, Button, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
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
		<Section padding="50px 0 100px 0" quarkly-title="HeroBlock">
			<Image
				width="100%"
				src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
				align-self="auto"
				order="0"
				display="block"
				flex="0 1 auto"
				object-fit="cover"
				height="600px"
				margin="0px 0px 80px 0px"
				sm-height="auto"
			/>
			<Text
				sm-margin="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				margin="0px 0px 0px 0"
				color="--lightD1"
				md-font="normal 700 52px/1.1 &quot;Inter&quot;, sans-serif"
				sm-font="normal 700 32px/1.3 &quot;Inter&quot;, sans-serif"
				sm-text-align="center"
				font="--headline1"
				md-text-align="center"
			>
				Everyone has a soul. Bring it on chain.{" "}
			</Text>
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
				href="/biometrics"
				type="link"
				target="_self"
			>
				Get Your Soul Credential
			</Button>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});