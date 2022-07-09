import React from "react";
import moment from "moment";
import { useGetHeadToHeadQuery } from "~/store/footballService/headToHead";

type Props = { h2h: string };

const HeadToHead = (props: Props) => {
  const { isFetching, data, isError } = useGetHeadToHeadQuery({
    h2h: props.h2h,
  });
  if (isError) return <p>error</p>;
  if (isFetching || !data) return <p>loading</p>;
  return (
    <div>
      {[...data.response]
        .reverse()

        .map((item) => (
          <div className=" mt-4 flex justify-between items-center px-4 text-xs md:text-base">
            <div className="md:flex hidden">
              <img src={item.league.flag} className="max-w-[24px]" alt="" />
              <p className="mx-2">{item.league.name}</p>
            </div>

            <div className="flex flex-1 justify-center">
              <div className="flex-1 justify-end flex items-center">
                <p>{item.teams.home.name}</p>
                <img src={item.teams.home.logo} className="w-8 h-8" alt="" />
              </div>
              <p>{item.goals.home + " - " + item.goals.away}</p>
              <div className="flex-1 flex  items-center">
                <img src={item.teams.away.logo} className="w-8 h-8" alt="" />
                <p>{item.teams.away.name}</p>
              </div>
            </div>

            <p>{moment(item.fixture.date).format("MMM DD, YYYY")}</p>
          </div>
        ))}
    </div>
  );
};

export default HeadToHead;
