import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Icon, Box, Section } from "@quarkly/widgets";
import { MdMenu } from "react-icons/md";
const defaultProps = {
	"sm-padding": "0 0 0px 0",
	"sm-border-style": "solid",
	"sm-border-width": "0 0 1px 0",
	"sm-background": "#dd1a77",
	"sm-color": "#9c1ea1"
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
			"sm-height": "auto",
			"sm-min-height": "50px",
			"sm-margin": "10px 0px 10px 0px"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/Logo.png?v=2022-06-12T03:30:07.253Z",
			"display": "block",
			"sm-height": "50px"
		}
	},
	"image1": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/chem.png?v=2022-06-12T03:23:51.696Z",
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
			"sm-width": "40px",
			"sm-color": "#ffffff"
		}
	}
};

const ChemistryHeading = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Image {...override("image")} />
			<Image {...override("image1")} />
			<Icon {...override("icon")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(ChemistryHeading, { ...Section,
	defaultProps,
	overrides
});
export default ChemistryHeading;