import React from "react";

type Props = { active: boolean; onChange: (status: boolean) => void };

const ISwitch = (props: Props) => {
  const getClassNames = () => {
    let baseClass = "switch";
    let stateClass = props.active ? " on" : " off";
    return baseClass + stateClass;
  };

  const handleClick = () => {
    props.onChange(!props.active);
  };

  return (
    <>
      <label
        className={getClassNames()}
        // for="x"
        onClick={handleClick}></label>
      <input type="checkbox" id="x" className="hide" />
    </>
  );
};

export default ISwitch;
