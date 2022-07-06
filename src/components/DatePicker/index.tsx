import React, { useEffect, useRef } from "react";
import moment, { Moment } from "moment";
import { parse, stringifyUrl } from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import DateItem from "./DateItem";

const dateFormat = "YYYY-MM-DD";

const DatePicker = () => {
  const { pathname, search } = useLocation();
  const { currentDate } = parse(search);

  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  const getDays = (): Moment[] => {
    const fromDate = moment().add(-6, "M");
    const toDate = moment().add(7, "d");
    var days: Moment[] = [];
    var day = fromDate;

    while (day <= toDate) {
      days.push(day);
      day = day.clone().add(1, "d");
    }
    return days;
  };

  useEffect(() => {
    ref.current?.scroll({ left: 2200, behavior: "smooth" });
  }, []);

  const handleChangeDate = (m: Moment) => {
    const query: any = parse(search) || {};
    query.currentDate = m.format(dateFormat);
    navigate(stringifyUrl({ url: pathname, query }));
  };

  return (
    <div className=" flex py-4 overflow-x-scroll bg-white" ref={ref}>
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
