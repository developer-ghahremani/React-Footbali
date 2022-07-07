import MatchItem from "../Match";
import React from "react";
import StageModel from "~/models/Stage.model";

type Props = { stage: StageModel };

const StageItem = (props: Props) => {
  return (
    <div className="rounded-xl p-3 mx-4 mt-2 border">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={`https://static.livescore.com/i2/fh/${props.stage.Ccd}.jpg`}
            className="max-w-[30px]"
            alt=""
          />
          <p className="md:text-base mx-4 text-sm font-bold">
            {props.stage.Cnm + " - " + props.stage.Snm}
          </p>
        </div>
      </div>
      {props.stage.Events.map((match) => (
        <MatchItem match={match} key={match.Eid} />
      ))}
    </div>
  );
};

export default StageItem;
