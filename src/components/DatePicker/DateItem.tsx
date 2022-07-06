import moment, { Moment } from "moment";

import React from "react";
import { dateFormat } from "~/constant";

type Props = {
  date: Moment;
  currentDate: string;
  onClick: (date: Moment) => void;
};

const DateItem = (props: Props) => {
  const handleClick = () => {
    props.onClick(props.date);
  };

  return (
    <div
      className="mr-10 cursor-pointer"
      key={props.date.format(dateFormat)}
      onClick={handleClick}>
      <p
        className={`${
          (!props.currentDate &&
            props.date.format(dateFormat) === moment().format(dateFormat)) ||
          props.currentDate === props.date.format(dateFormat)
            ? "font-bold border-b-2 border-b-primary text-primary"
            : ""
        }`}>
        {props.date.format(dateFormat) ===
        moment().add(1, "d").format(dateFormat)
          ? "tomorrow"
          : props.date.format(dateFormat) ===
            moment().add(-1, "d").format(dateFormat)
          ? "yesterday"
          : props.date.format(dateFormat) === moment().format(dateFormat)
          ? "today"
          : props.date.format("MM/DD")}
      </p>
    </div>
  );
};

export default DateItem;
