import { BiChevronUp } from "react-icons/bi";
import { IconBaseProps } from "react-icons";
import React from "react";

interface Props extends IconBaseProps {}

const UpArrow = (props: Props) => <BiChevronUp {...props} />;

export default UpArrow;
