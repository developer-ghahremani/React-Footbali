import { MatchTime, Player } from "~/models/MatchEvent.model";

import MatchModel from "~/models/Match.model";
import React from "react";

type Props = { player: Player; time: MatchTime };

const GoalItem = (props: Props) => {
  return (
    <div className="flex m-[2px] bg-gray-50 rounded-xl px-2 py-1 text-xs">
      <p className="mx-1">{props.player.name}</p>
      <p className="font-bold">{`${props.time.elapsed}\'`}</p>
    </div>
  );
};

export default GoalItem;
