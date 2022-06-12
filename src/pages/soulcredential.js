import React, {useState} from "react";
import theme from "theme";
import {Theme, Icon, Box, Text, Section, Image, LinkBox, Button} from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
import { MdCheckCircle } from "react-icons/md";
import { saveAs } from 'file-saver'

export default (() => {

	const [isDownloaded, setIsDownloaded] = useState(false)

	const download = () => {
		saveAs(require('../soulcred.pkpass'), "soul.pkpass")
		setIsDownloaded(true)
	}

	return <Theme theme={theme} >
		<GlobalQuarklyPageStyles pageUrl={"soulcredential"} />
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
		<Section  sm-justify-content="center" sm-align-items="center" sm-align-content="center" >
			<Box
				min-width="100px"
				min-height="100px"
				sm-display="flex"
				sm-flex-direction="column"
				sm-align-items="center"
			>
				<Icon
					category="md"
					icon={MdCheckCircle}
					size="64px"
					sm-background="rgba(64, 141, 255, 0)"
					sm-color="#ffffff"
					sm-flex-direction="row"
					sm-display="flex"
					sm-align-items="center"
					sm-width="100px"
				/>
			</Box>
			{!isDownloaded ?
			<div>
			<Text margin="0px 0px 0px 0px" sm-color="#ffffff" sm-font="--headline4" sm-text-align="center">
				Success!
			</Text>
			<Text margin="px 10px 0px 0px" sm-color="#ffffff" sm-font="--headline4" sm-text-align="center">
				You have a soul!
			</Text>
			</div> : null }


				<img src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/picture14.jpg?v=2022-06-11T20:05:54.490Z" alt="Italian Trulli"
				 height="200"/>
			{!isDownloaded ?
				(<div>
			<LinkBox onClick={download} margin="10px 0px 0px 00px">
				<Image src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/add_to_apple_wallet.png?v=2022-06-11T20:25:31.813Z" display="block" sm-max-height="75px" />
			</LinkBox>
			<Text
				margin="0px 0px 0px 0px"
				sm-color="#ffffff"
				sm-font="--lead"
				sm-text-align="center"
				sm-margin="10px 0px 0px 0px"
			>
				You're unique! Prove it everywhere
			</Text>
				</div>) : <Button
					sm-background="--color-light"
					sm-color="#000000"
					sm-border-color="#000000"
					sm-border-width="2px"
					sm-display="block"
					sm-width="100% border-box"
					sm-text-align="center"
					sm-align-items="flex-start"
					sm-margin="20px 0px 0px 0px"
					href="/traitsecosystemteaser"
					type="link"
					target="_self"
				>
					See the Soul possibilities
				</Button>}
		</Section>

	</Theme>
});