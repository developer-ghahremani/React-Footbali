import { CgClose } from "react-icons/cg";
import { IconBaseProps } from "react-icons";
import React from "react";

interface Props extends IconBaseProps {}

const CloseIcon = (props: Props) => <CgClose {...props} />;

export default CloseIcon;
