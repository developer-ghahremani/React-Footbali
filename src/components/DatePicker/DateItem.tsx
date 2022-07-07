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
      className={`flex flex-col items-center cursor-pointer text-xs md:text-sm ${
        props.currentDate === props.date.format(dateFormat)
          ? "font-bold text-primary"
          : ""
      }`}
      key={props.date.format(dateFormat)}
      onClick={handleClick}>
      <p>
        {props.date.format(dateFormat) === moment().format(dateFormat)
          ? "today"
          : props.date.format("ddd")}
      </p>
      <p>{props.date.format("MMMM DD")}</p>
    </div>
  );
};

export default DateItem;
