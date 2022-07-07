import { BiChevronDown } from "react-icons/bi";
import { IconBaseProps } from "react-icons";
import React from "react";

interface Props extends IconBaseProps {}

const DownArrow = (props: Props) => <BiChevronDown {...props} />;

export default DownArrow;
