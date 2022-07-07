import MatchModel from "~/models/Match.model";
import React from "react";
import { dateFormat } from "~/constant";
import moment from "moment";

type Props = { match: MatchModel };

const MatchItem = (props: Props) => {
  return (
    <div className="mt-2">
      <div className=" flex items-center justify-center">
        <div className=" flex items-center justify-end flex-1">
          <p className="mx-2">{props.match.teams.home.name}</p>
          <img
            src={props.match.teams.home.logo}
            className="max-w-8 max-h-8"
            alt=""
          />
        </div>

        <p className="mx-2">
          {props.match.fixture.status.short === "FT"
            ? props.match.goals.home + " - " + props.match.goals.away
            : "-"}
        </p>

        <div className=" flex items-center justify-start flex-1">
          <img
            src={props.match.teams.away.logo}
            className="max-w-8 max-h-8"
            alt=""
          />
          <p className="mx-2">{props.match.teams.away.name}</p>
        </div>
        <p>{moment(props.match.fixture.date).format("HH:mm")}</p>
      </div>
    </div>
  );
};

export default MatchItem;
