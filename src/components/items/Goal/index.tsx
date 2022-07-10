import { MatchTime, Player } from "~/models/MatchEvent.model";

import MatchModel from "~/models/Match.model";
import React from "react";

type Props = { player: Player; time: MatchTime };

const GoalItem = (props: Props) => {
  return (
    <div className="flex m-[2px] bg-lightMode-primary rounded-xl px-2 py-1 text-xs text-darkMode-primary">
      <p className=" mx-1">{props.player.name}</p>
      <p className="font-bold">{`${props.time.elapsed}\'`}</p>
    </div>
  );
};

export default GoalItem;
