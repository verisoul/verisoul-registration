import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Box, Image, Section } from "@quarkly/widgets";
const defaultProps = {
	"padding": "40px 0 40px 0",
	"quarkly-title": "Header",
	"sm-height": "auto",
	"sm-max-height": "200px",
	"sm-padding": "10px 0 10px 0"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"empty-border-color": "LightGray",
			"width": "30%",
			"align-items": "center",
			"lg-width": "50%",
			"empty-min-height": "64px",
			"empty-border-style": "solid",
			"display": "flex",
			"sm-width": "70%",
			"empty-min-width": "64px",
			"empty-border-width": "1px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"color": "--light",
			"margin": "0px 0px 0px 0px",
			"font": "--headline3",
			"children": "Halo Soul"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"empty-border-color": "LightGray",
			"width": "30%",
			"align-items": "center",
			"lg-width": "50%",
			"empty-min-height": "64px",
			"empty-border-style": "solid",
			"display": "flex",
			"sm-width": "70%",
			"empty-min-width": "64px",
			"empty-border-width": "1px",
			"sm-justify-content": "flex-end"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/62a49aca855d39001fc9020d/images/Picture17.png?v=2022-06-11T19:51:29.632Z",
			"display": "block",
			"sm-height": "auto",
			"sm-max-height": "100px",
			"sm-display": "flex"
		}
	}
};

const Heading = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			flex-direction="row"
			align-items="center"
			display="flex"
			justify-content="space-between"
		/>
		<Box {...override("box")}>
			<Text {...override("text")} />
		</Box>
		<Box {...override("box1")}>
			<Image {...override("image")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Heading, { ...Section,
	defaultProps,
	overrides
});
export default Heading;