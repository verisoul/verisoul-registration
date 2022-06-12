import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"margin": "0px 0px 0px 0px",
	"sm-color": "--light",
	"sm-font": "--lead",
	"children": "Some text"
};
const overrides = {};

const Lead = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(Lead, { ...Text,
	defaultProps,
	overrides
});
export default Lead;