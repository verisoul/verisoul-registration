import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Image, Box, Section } from "@quarkly/widgets";
const defaultProps = {};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"sm-display": "flex",
			"sm-justify-content": "center",
			"sm-align-items": "center"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"sm-font": "--headline4",
			"children": "Built on"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/avax.png?v=2022-06-12T03:36:00.323Z",
			"display": "block",
			"sm-height": "100px"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"sm-font": "--headline4",
			"children": "Subnet"
		}
	}
};

const AvaxSubnet = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Text {...override("text")} />
			<Image {...override("image")} />
			<Text {...override("text1")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(AvaxSubnet, { ...Section,
	defaultProps,
	overrides
});
export default AvaxSubnet;