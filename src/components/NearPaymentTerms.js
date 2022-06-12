import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Image, Box } from "@quarkly/widgets";
const defaultProps = {
	"min-width": "100px",
	"min-height": "100px",
	"sm-display": "flex",
	"sm-height": "auto",
	"sm-min-height": "auto",
	"sm-justify-content": "center",
	"sm-align-items": "center"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"sm-font": "--headline4",
			"children": <>
				$36.9 = 100{" "}
			</>
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/near_icon.png?v=2022-06-12T03:05:51.318Z",
			"display": "block",
			"sm-width": "40px",
			"sm-height": "40px"
		}
	}
};

const NearPaymentTerms = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<Image {...override("image")} />
		{children}
	</Box>;
};

Object.assign(NearPaymentTerms, { ...Box,
	defaultProps,
	overrides
});
export default NearPaymentTerms;