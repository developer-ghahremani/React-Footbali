import { FixtureItem } from "../items";
import { dateFormat } from "~/constant";
import { groupBy } from "lodash";
import moment from "moment";
import { parse } from "query-string";
import { useGetMatchesQuery } from "~/store/service/matches";
import { useLocation } from "react-router-dom";

const Matches = () => {
  const { search } = useLocation();
  const { currentDate = moment().format(dateFormat) } = parse(search);
  if (typeof currentDate !== "string") return null;
  const { isFetching, isError, data } = useGetMatchesQuery({
    date: currentDate,
  });

  if (isError) return <p>isError</p>;
  if (isFetching || !data) return <p>loading</p>;
  const groupedMatch = groupBy(data.response, "league.name");
  return (
    <div>
      {Object.keys(groupedMatch).map((item, index) => (
        <FixtureItem title={item} matches={groupedMatch[item]} key={item} />
      ))}
    </div>
  );
};

export default Matches;
