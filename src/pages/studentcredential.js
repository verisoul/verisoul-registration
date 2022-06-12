import React, {useState} from "react";
import theme from "theme";
import {Theme, Icon, Box, Text, Section, Image, LinkBox, Button} from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
import { MdCheckCircle } from "react-icons/md";

import { saveAs } from 'file-saver'


export default (() => {

	const [isDownloaded, setIsDownloaded] = useState(false)

	const download = () => {
		saveAs(require('../studentcred.pkpass'), "soul.pkpass")
		setIsDownloaded(true)
	}
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"studentcredential"} />
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
			<Box
				min-width="100px"
				min-height="100px"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="center"
			>
				<Icon category="md" icon={MdCheckCircle} size="64px" sm-color="#ffffff" />
			</Box>
			<Text margin="0px 0px 0px 0px" sm-color="#ffffff" sm-font="--headline4" sm-text-align="center">
				Success!
			</Text>
			<Text margin="0px 0px 0px 0px" sm-color="#ffffff" sm-font="--headline4" sm-text-align="center">
				You have a Student Id trait!
			</Text>
		</Section>
		<Section>

			<img src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/Picture18.png?v=2022-06-11T22:32:39.243Z" alt="Student Soul"
				 height="200"/>
		</Section>
		{!isDownloaded ?
		<Section>
			<LinkBox>
				<Image  onClick={download} src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/add_to_apple_wallet.png?v=2022-06-11T20:25:31.813Z" display="block" sm-max-height="75px" />
			</LinkBox>
			<Text
				margin="0px 0px 0px 0px"
				sm-color="#ffffff"
				sm-font="--lead"
				sm-text-align="center"
				sm-margin="10px 0px 0px 0px"
			>
				You're a student! Prove it everywhere
			</Text>
		</Section>

		: <Button
		sm-background="--color-light"
		sm-color="#000000"
		sm-border-color="#000000"
		sm-border-width="2px"
		sm-display="block"
		sm-width="100% border-box"
		sm-text-align="center"
		sm-align-items="flex-start"
		sm-margin="20px 0px 0px 0px"
		href="wallet://"
		type="link"
		target="_self"
	>
		Open Wallet
	</Button>}
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});