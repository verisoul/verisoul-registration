import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Button, Box, Section } from "@quarkly/widgets";
const defaultProps = {};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"sm-font": "500 24px --fontFamily-googleInter",
			"children": <>
				Do you accept?{" "}
			</>
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"sm-display": "flex",
			"sm-height": "50px",
			"sm-min-height": "50px"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"sm-background": "--color-dark",
			"sm-color": "#ffffff",
			"sm-border-color": "#000000",
			"sm-border-width": "2px",
			"sm-display": "block",
			"sm-width": "100% border-box",
			"sm-text-align": "center",
			"sm-align-items": "flex-start",
			"sm-margin": "20px 5px 0px 0px",
			"href": "wallet://",
			"sm-height": "50px",
			"sm-padding": "8px 8px 8px 8px",
			"sm-flex": "1 1 0%"
		}
	},
	"button1": {
		"kind": "Button",
		"props": {
			"sm-background": "--color-dark",
			"sm-color": "#ffffff",
			"sm-border-color": "#000000",
			"sm-border-width": "2px",
			"sm-display": "block",
			"sm-width": "100% border-box",
			"sm-text-align": "center",
			"sm-align-items": "flex-start",
			"sm-margin": "20px 5px 0px 0px",
			"href": "wallet://",
			"sm-height": "50px",
			"sm-padding": "8px 8px 8px 8px",
			"sm-flex": "1 1 0%"
		}
	}
};

const Accept = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Text {...override("text")} />
			<Box {...override("box1")}>
				<Button {...override("button")}>
					Yes
				</Button>
				<Button {...override("button1")}>
					No
				</Button>
			</Box>
		</Box>
		{children}
	</Section>;
};

Object.assign(Accept, { ...Section,
	defaultProps,
	overrides
});
export default Accept;