import React from "react";
import theme from "theme";
import { Theme, Section, Image, Icon, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
import { AiFillCodeSandboxSquare, AiFillCalendar, AiFillUnlock } from "react-icons/ai";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"traitsecosystemteaser"} />
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
		<Components.Heading sm-max-height="100px" />
		<Section>
			<Components.Lead sm-font="--headline3" sm-text-align="center">
				Traits Ecosystem
			</Components.Lead>
		</Section>
		<Section>
			<Image src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/Screen%20Shot%202022-06-12%20at%2012.24.55%20AM.png?v=2022-06-12T05:25:44.147Z" display="block" sm-max-height="200px" />
		</Section>
		<Section>
			<Box
				min-width="100px"
				min-height="100px"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="flex-start"
				sm-height="auto"
				sm-min-height="auto"
			>
				<Icon
					category="ai"
					icon={AiFillCodeSandboxSquare}
					size="64px"
					sm-color="#ffffff"
					sm-padding="0px 0 0px 0px"
					sm-margin="0px 20px 0px 0px"
				/>
				<Components.Lead sm-font="--headline4">
					On Any Blockchain
				</Components.Lead>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="flex-start"
				sm-height="auto"
				sm-min-height="auto"
			>
				<Icon
					category="ai"
					icon={AiFillCalendar}
					size="64px"
					sm-color="#ffffff"
					sm-margin="0px 20px 0px 0px"
				/>
				<Components.Lead sm-font="--headline4">
					In Real Life Events
				</Components.Lead>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="flex-start"
				sm-height="auto"
				sm-min-height="auto"
			>
				<Icon
					category="ai"
					icon={AiFillUnlock}
					size="64px"
					sm-color="#ffffff"
					sm-margin="0px 20px 0px 0px"
				/>
				<Components.Lead sm-font="--headline4">
					Across All Logins
				</Components.Lead>
			</Box>
		</Section>
		<Section>
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
				href="/traitsecosystem"
				type="link"
				target="_self"
			>
				Add traits to your soul
			</Button>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});