import { BiMenu } from "react-icons/bi";
import { IconBaseProps } from "react-icons";
import React from "react";

interface Props extends IconBaseProps {}

const MenuIcon = (props: Props) => <BiMenu {...props} />;

export default MenuIcon;
