import { MatchEventItem } from "../items";
import MatchModel from "~/models/Match.model";
import React from "react";
import { useGetMatchEventQuery } from "~/store/service/matchEvent";

type Props = { match: MatchModel };

const MatchEvent = (props: Props) => {
  const { isError, isFetching, data } = useGetMatchEventQuery({
    fixtureId: props.match.fixture.id,
  });
  if (isError) return <p>error</p>;
  if (isFetching || !data) return <p>loading</p>;
  return (
    <div className="flex flex-col">
      {[...data.response].reverse().map((matchEvent, index) => (
        <MatchEventItem
          index={index}
          homeTeamId={props.match.teams.home.id}
          matchEvent={matchEvent}
          key={index}
        />
      ))}
    </div>
  );
};

export default MatchEvent;
