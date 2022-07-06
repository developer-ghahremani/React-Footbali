import MatchModel from "~/models/Match.model";
import React from "react";

type Props = { match: MatchModel };

const MatchItem = (props: Props) => {
  return (
    <div>
      <p>{props.match.country_name}</p>
      <p>{props.match.league_name}</p>
      <div className="flex items-center justify-between">
        <div className="flex justify-end flex-1">
          <p>{props.match.match_hometeam_name}</p>
          <img src={props.match.team_home_badge} className="w-8 h-8" alt="" />
        </div>

        <div className="flex items-center">
          <p>{props.match.match_hometeam_score}</p>
          <p>-</p>
          <p>{props.match.match_awayteam_score}</p>
        </div>

        <div className="flex justify-start flex-1">
          <img src={props.match.team_away_badge} className="w-8 h-8" alt="" />
          <p>{props.match.match_awayteam_name}</p>
        </div>
      </div>
    </div>
  );
};

export default MatchItem;
