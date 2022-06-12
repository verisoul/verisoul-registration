import React, {useState} from "react";
import theme from "theme";
import { Theme, Button, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	const [i, is] = useState(null)
	const setPath = (path) => {
		localStorage.setItem('path', path)
		is(true)
	}

	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"path_picker"} />
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
			<Components.Lead sm-font="--headline4" sm-color="--grey">
				Current Picker Value:
			</Components.Lead>
			<Components.Lead sm-font="--headline4" sm-text-align="center" sm-color="#ffffff">
				{localStorage.getItem('path')}
			</Components.Lead>
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
				onClick={()=>setPath("/solana/walletcallback")}

				type="link"
			>
				Solana
			</Button>
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
				onClick={()=>setPath("/algorand/walletcallback")}
				type="link"
			>
				Algorand
			</Button>
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
				onClick={()=>setPath("/near/walletcallback")}
				type="link"
			>
				Near
			</Button>
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
				onClick={()=>setPath("/avax/walletcallback")}
				type="link"
			>
				Avalanche
			</Button>
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
				onClick={()=>setPath("/octopus/walletcallback")}
				type="link"
			>
				Octopus
			</Button>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60da14fa3f4eb1001ea27687"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});