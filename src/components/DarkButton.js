import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"sm-background": "--color-dark",
	"sm-color": "#ffffff",
	"sm-border-color": "#000000",
	"sm-border-width": "2px",
	"sm-display": "block",
	"sm-width": "100% border-box",
	"sm-text-align": "center",
	"sm-align-items": "flex-start",
	"sm-margin": "20px 0px 0px 0px",
	"href": "/faceid"
};
const overrides = {};

const DarkButton = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		Complete Transaction
		{children}
	</Button>;
};

Object.assign(DarkButton, { ...Button,
	defaultProps,
	overrides
});
export default DarkButton;