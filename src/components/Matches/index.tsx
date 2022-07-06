import MatchItem from "./MatchItem";
import React from "react";
import { parse } from "query-string";
import { useGetMatchesQuery } from "~/store/service/matches";
import { useLocation } from "react-router-dom";

const Fixtures = () => {
  const { search } = useLocation();
  const { currentDate } = parse(search);
  const { isFetching, isError, data } = useGetMatchesQuery({
    currentDate: typeof currentDate === "string" ? currentDate : "",
  });
  if (isFetching || !data) return <p>loading</p>;
  if (isError) return <p>erro occured</p>;
  return (
    <div>
      {data.map((item) => (
        <MatchItem key={item.match_id} match={item} />
      ))}
    </div>
  );
};

export default Fixtures;
