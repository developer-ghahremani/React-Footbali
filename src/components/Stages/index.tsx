import React from "react";
import { StageItem } from "../items";
import { dateFormat } from "~/constant";
import moment from "moment";
import { parse } from "query-string";
import { useGetStagesQuery } from "~/store/service/stages";
import { useLocation } from "react-router-dom";

const Stages = () => {
  const { search } = useLocation();

  const { currentDate = moment().format(dateFormat) } = parse(search);

  console.log(currentDate, search);

  const { isError, isFetching, data } = useGetStagesQuery({
    Category: "soccer",
    Date: typeof currentDate === "string" ? currentDate : "",
  });

  if (isError) return <p>error</p>;
  if (isFetching || !data) return <p>loading</p>;
  return (
    <div>
      {data.Stages.map((stage) => (
        <StageItem stage={stage} key={stage.Sid} />
      ))}
    </div>
  );
};

export default Stages;
