import React from "react";
import { useOverrides } from "@quarkly/components";
import { Input } from "@quarkly/widgets";
const defaultProps = {
	"display": "block",
	"placeholder-color": "LightGray",
	"background": "white",
	"sm-border-color": "#e4e8ec",
	"sm-background": "rgba(255, 255, 255, 0.21)",
	"placeholder": "Search",
	"type": "search",
	"sm-flex": "1 1 0%"
};
const overrides = {};

const Inputbar = props => {
	const {
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Input {...rest} />;
};

Object.assign(Inputbar, { ...Input,
	defaultProps,
	overrides
});
export default Inputbar;