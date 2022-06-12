import React from "react";
import theme from "theme";
import { Theme, Section, Icon, Box, Image, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { BsSearch } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"traitsecosystem"} />
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
			<Components.Lead sm-text-align="center">
				Powered by HaloSoul's trusted providers
			</Components.Lead>
		</Section>
		<Section sm-padding="10px 0 10px 0">
			<Override slot="SectionContent" sm-flex-direction="row" sm-justify-content="space-around" sm-display="block" />
			<Box
				min-width="100px"
				min-height="100px"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="space-between"
				sm-height="auto"
				sm-min-height="auto"
				sm-align-content="center"
			>
				<Icon
					category="bs"
					icon={BsSearch}
					size="64px"
					sm-color="#ffffff"
					sm-justify-content="space-between"
					sm-max-height="40px"
					sm-align-content="center"
					sm-align-items="center"
					sm-width="auto"
					sm-height="auto"
					sm-max-width="40px"
				/>
				<Components.Inputbar />
			</Box>
		</Section>
		<Section sm-padding="10px 0 0px 0">
			<Components.Lead sm-font="--headline4" sm-text-align="center">
				Top Soul Traits
			</Components.Lead>
		</Section>
		<Section sm-padding="10px 0 10px 0">
			<Override slot="SectionContent" sm-margin="0px 0 0px 0" sm-width="100%" sm-height="auto" />
			<Box min-width="100px" min-height="100px" sm-min-height="auto" sm-padding="0px 0px 5px 0px">
				<Components.Lead sm-text-align="left" sm-padding="0px 0px 0px 10px">
					Finance
				</Components.Lead>
			</Box>
			<Box min-width="100px" min-height="100px" sm-display="flex" sm-justify-content="space-around">
				<LinkBox href="/unidays" sm-padding="0px 5px 0px 5px">
					<Image
						src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%2812%29.png?v=2022-06-12T05:29:40.196Z"
						display="block"
						sm-height="auto"
						sm-padding="0px px 0px px"
						sm-max-height="75px"
						sm-max-width="200px"
						sm-filter="--invert"
					/>
					<Components.Lead sm-text-align="center">
						Credit Profile
					</Components.Lead>
				</LinkBox>
				<LinkBox href="/unidays" sm-padding="0px 5px 0px 5px">
					<Image
						src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%2820%29.png?v=2022-06-12T05:31:35.063Z"
						display="block"
						sm-height="auto"
						sm-padding="0px px 0px px"
						sm-max-height="75px"
						sm-max-width="150px"
					/>
					<Components.Lead sm-text-align="center">
						KYC / AML
					</Components.Lead>
				</LinkBox>
			</Box>
		</Section>
		<Section sm-padding="10px 0 10px 0">
			<Override slot="SectionContent" sm-margin="0px 0 0px 0" sm-width="100%" sm-height="auto" />
			<Box min-width="100px" min-height="100px" sm-min-height="auto" sm-padding="0px 0px 5px 0px">
				<Components.Lead sm-text-align="left" sm-padding="0px 0px 0px 10px">
					On Chain Reputation
				</Components.Lead>
			</Box>
			<Box min-width="100px" min-height="100px" sm-display="flex" sm-justify-content="space-around">
				<LinkBox href="/unidays" sm-padding="0px 5px 0px 5px">
					<Image
						src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%2817%29.png?v=2022-06-12T05:33:38.506Z"
						display="block"
						sm-height="auto"
						sm-padding="0px px 0px px"
						sm-max-height="75px"
						sm-max-width="150px"
					/>
					<Components.Lead sm-text-align="center">
						Ethereum
					</Components.Lead>
				</LinkBox>
				<LinkBox href="/unidays" sm-padding="0px 5px 0px 5px">
					<Image
						src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%2818%29.png?v=2022-06-12T01:53:05.762Z"
						display="block"
						sm-height="auto"
						sm-padding="0px px 0px px"
						sm-max-height="75px"
						sm-max-width="150px"
					/>
					<Components.Lead sm-text-align="center">
						Solana
					</Components.Lead>
				</LinkBox>
				<LinkBox href="/unidays" sm-padding="0px 5px 0px 5px">
					<Image
						src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%2821%29.png?v=2022-06-12T05:34:14.770Z"
						display="block"
						sm-height="auto"
						sm-padding="0px px 0px px"
						sm-max-height="75px"
						sm-max-width="150px"
					/>
					<Components.Lead sm-text-align="center">
						BAYC
					</Components.Lead>
				</LinkBox>
			</Box>
		</Section>
		<Section sm-padding="10px 0 10px 0">
			<Override slot="SectionContent" sm-margin="0px 0 0px 0" sm-width="100%" sm-height="auto" />
			<Box min-width="100px" min-height="100px" sm-min-height="auto" sm-padding="0px 0px 5px 0px">
				<Components.Lead sm-text-align="left" sm-padding="0px 0px 0px 10px">
					Social
				</Components.Lead>
			</Box>
			<Box min-width="100px" min-height="100px" sm-display="flex" sm-justify-content="space-around">
				<LinkBox href="/unidays" sm-padding="0px 5px 0px 5px">
					<Image
						src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%2814%29.png?v=2022-06-12T05:35:04.534Z"
						display="block"
						sm-height="auto"
						sm-padding="0px px 0px px"
						sm-max-height="75px"
						sm-max-width="150px"
					/>
					<Components.Lead sm-text-align="center">
						Twitter
					</Components.Lead>
				</LinkBox>
				<LinkBox href="/unidays" sm-padding="0px 5px 0px 5px">
					<Image
						src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%2815%29.png?v=2022-06-12T05:35:04.549Z"
						display="block"
						sm-height="auto"
						sm-padding="0px px 0px px"
						sm-max-height="75px"
						sm-max-width="150px"
					/>
					<Components.Lead sm-text-align="center">
						Discord
					</Components.Lead>
				</LinkBox>
				<LinkBox href="/unidays" sm-padding="0px 5px 0px 5px">
					<Image
						src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%2816%29.png?v=2022-06-12T05:35:04.565Z"
						display="block"
						sm-height="auto"
						sm-padding="0px px 0px px"
						sm-max-height="75px"
						sm-max-width="150px"
					/>
					<Components.Lead sm-text-align="center">
						We Chat
					</Components.Lead>
				</LinkBox>
			</Box>
		</Section>
		<Section sm-padding="10px 0 10px 0">
			<Override slot="SectionContent" sm-margin="0px 0 0px 0" sm-width="100%" sm-height="auto" />
			<Box min-width="100px" min-height="100px" sm-min-height="auto" sm-padding="0px 0px 5px 0px">
				<Components.Lead sm-text-align="left" sm-padding="0px 0px 0px 10px">
					Status
				</Components.Lead>
			</Box>
			<Box min-width="100px" min-height="100px" sm-display="flex" sm-justify-content="space-around">
				<LinkBox href="/unidays" sm-padding="0px 5px 0px 5px" target="_self">
					<Image
						src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%283%29.png?v=2022-06-12T05:35:52.826Z"
						display="block"
						sm-height="auto"
						sm-padding="0px px 0px px"
						sm-max-height="75px"
						sm-max-width="150px"
						sm-filter="--invert"
					/>
					<Components.Lead sm-text-align="center">
						Student
					</Components.Lead>
				</LinkBox>
				<LinkBox href="/unidays" sm-padding="0px 5px 0px 5px">
					<Image
						src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%286%29.png?v=2022-06-12T05:36:10.373Z"
						display="block"
						sm-height="auto"
						sm-padding="0px px 0px px"
						sm-max-height="75px"
						sm-max-width="150px"
						sm-filter="--invert"
					/>
					<Components.Lead sm-text-align="center">
						Veteran
					</Components.Lead>
				</LinkBox>
			</Box>
		</Section>
		<Section sm-padding="10px 0 10px 0">
			<Override slot="SectionContent" sm-margin="0px 0 0px 0" sm-width="100%" sm-height="auto" />
			<Box min-width="100px" min-height="100px" sm-min-height="auto" sm-padding="0px 0px 5px 0px">
				<Components.Lead sm-text-align="left" sm-padding="0px 0px 0px 10px">
					Brand
				</Components.Lead>
			</Box>
			<Box min-width="100px" min-height="100px" sm-display="flex" sm-justify-content="space-around">
				<LinkBox href="/unidays" sm-padding="0px 5px 0px 5px">
					<Image
						src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/gucci.webp?v=2022-06-12T05:38:01.386Z"
						display="block"
						sm-height="auto"
						sm-padding="0px px 0px px"
						sm-max-height="75px"
						sm-max-width="150px"
						sm-filter="--invert"
					/>
					<Components.Lead sm-text-align="center">
						Gucci
					</Components.Lead>
				</LinkBox>
				<LinkBox href="/unidays" sm-padding="0px 5px 0px 5px">
					<Image
						src="https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/Nike-Logo.png?v=2022-06-12T05:38:17.240Z"
						display="block"
						sm-height="auto"
						sm-padding="0px px 0px px"
						sm-max-height="75px"
						sm-max-width="150px"
						sm-filter="--invert"
					/>
					<Components.Lead sm-text-align="center">
						Nike
					</Components.Lead>
				</LinkBox>
			</Box>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});