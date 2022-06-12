import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Image, Text, Box, Section } from "@quarkly/widgets";
const defaultProps = {
	"sm-padding": "0 0 0px 0",
	"sm-height": "auto"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"sm-display": "flex",
			"sm-padding": "0px 5px 0px 5px",
			"sm-min-height": "none",
			"sm-height": "auto",
			"sm-border-radius": "4px",
			"sm-border-width": "2px",
			"sm-border-style": "solid",
			"sm-flex": "0 1 auto"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/avax_wallet.png?v=2022-06-12T03:38:28.250Z",
			"display": "block",
			"sm-width": "100px",
			"sm-height": "75px",
			"sm-align-self": "center"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"sm-display": "flex",
			"sm-flex-direction": "column",
			"sm-align-items": "flex-start",
			"sm-justify-content": "center",
			"sm-padding": "0px 0px 0px 10px",
			"sm-height": "auto",
			"sm-min-height": "none",
			"sm-min-width": "none",
			"sm-width": "auto",
			"sm-flex": "1 1 0%"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"sm-font": "400 18px --fontFamily-googleInter",
			"sm-text-align": "left",
			"sm-margin": "0px 0px 0px 0px",
			"children": "Logged in with Avax"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"sm-font": "400 18px --fontFamily-googleInter",
			"sm-text-align": "left",
			"sm-margin": "5px 0px 0px 0px",
			"children": "0xAdU19...hXiyCWsT"
		}
	}
};

const AvaxWallet = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" />
		<Box {...override("box")}>
			<Image {...override("image")} />
			<Box {...override("box1")}>
				<Text {...override("text")} />
				<Text {...override("text1")} />
			</Box>
		</Box>
		{children}
	</Section>;
};

Object.assign(AvaxWallet, { ...Section,
	defaultProps,
	overrides
});
export default AvaxWallet;