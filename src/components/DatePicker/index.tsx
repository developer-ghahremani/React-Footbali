import React, { useEffect, useRef } from "react";
import moment, { Moment } from "moment";
import { parse, stringifyUrl } from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import DateItem from "./DateItem";
import { dateFormat } from "~/constant";

const DatePicker = () => {
  const { pathname, search } = useLocation();
  const { currentDate = moment().format(dateFormat) } = parse(search);
  const navigate = useNavigate();
  if (typeof currentDate !== "string") return null;

  const getDays = (): Moment[] => {
    const fromDate = moment(currentDate, dateFormat).add(-3, "d");
    const toDate = moment(currentDate, dateFormat).add(3, "d");
    var days: Moment[] = [];
    var day = fromDate;

    while (day <= toDate) {
      days.push(day);
      day = day.clone().add(1, "d");
    }
    return days;
  };

  const handeToday = () => {
    const query: any = parse(search) || {};
    query.currentDate = moment().format(dateFormat);
    navigate(stringifyUrl({ url: pathname, query }));
  };

  const handleChangeDate = (m: Moment) => {
    const query: any = parse(search) || {};
    query.currentDate = m.format(dateFormat);
    navigate(stringifyUrl({ url: pathname, query }));
  };

  return (
    <div className="flex items-center justify-between pb-4">
      {currentDate !== moment().format(dateFormat) && (
        <div
          className="bg-primary md:text-base p-2 text-xs text-white rounded-lg cursor-pointer"
          onClick={handeToday}>
          <p>Today</p>
        </div>
      )}
      {getDays().map((item) => (
        <DateItem
          onClick={handleChangeDate}
          currentDate={typeof currentDate === "string" ? currentDate : ""}
          date={item}
        />
      ))}
    </div>
  );
};

export default DatePicker;
