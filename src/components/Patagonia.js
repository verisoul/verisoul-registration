import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Icon, Box, Section } from "@quarkly/widgets";
import { MdMenu } from "react-icons/md";
const defaultProps = {
	"sm-padding": "0 0 0px 0",
	"sm-border-style": "solid",
	"sm-border-width": "0 0 1px 0"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"sm-display": "flex",
			"sm-align-items": "center",
			"sm-justify-content": "space-between",
			"sm-height": "75px",
			"sm-min-height": "75px"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/Patagonia-Logo.png?v=2022-06-11T23:26:05.221Z",
			"display": "block",
			"sm-max-width": "200px"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdMenu,
			"size": "64px",
			"sm-height": "40px",
			"sm-width": "40px"
		}
	}
};

const Patagonia = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Image {...override("image")} />
			<Icon {...override("icon")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Patagonia, { ...Section,
	defaultProps,
	overrides
});
export default Patagonia;