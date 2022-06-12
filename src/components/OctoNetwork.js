import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Image, Box } from "@quarkly/widgets";
const defaultProps = {
	"min-width": "100px",
	"min-height": "100px",
	"sm-display": "flex",
	"sm-justify-content": "center",
	"sm-align-items": "center"
};
const overrides = {
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
			"src": "https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/image%20%2825%29.png?v=2022-06-12T03:49:19.528Z",
			"display": "block",
			"sm-height": "100px",
			"sm-max-width": "150px"
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

const OctoNetwork = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<Image {...override("image")} />
		<Text {...override("text1")} />
		{children}
	</Box>;
};

Object.assign(OctoNetwork, { ...Box,
	defaultProps,
	overrides
});
export default OctoNetwork;