import React from "react";
import theme from "theme";
import { Theme, Image, Text, Section, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"solana/walletcallback"} />
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
			<Image src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/patagonia_jacket.jpg?v=2022-06-11T23:40:04.241Z" display="block" />
			<Text margin="0px 0px 0px 0px" sm-font="700 18px --fontFamily-googleInter" sm-text-align="center" sm-margin="5px 0px 0px 0px">
				Women's Down Sweater Jacket
			</Text>
		</Section>
		<Section>
			<Image src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%289%29.png?v=2022-06-12T05:46:16.971Z" display="block" sm-height="50px" sm-margin="5px 0px 05px 0px" />
			<LinkBox href="/walletnotverified">
				<Image src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%288%29.png?v=2022-06-12T05:47:31.948Z" display="block" sm-height="46px" sm-margin="5px 0px 05px 0px" />
			</LinkBox>
		</Section>
		<Components.Wallet />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});