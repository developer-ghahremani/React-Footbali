import Match from "~/models/Match.model";
import React from "react";
import moment from "moment";

type Props = { match: Match };

const MatchItem = (props: Props) => {
  return (
    <div className="md:text-base mt-2 text-xs">
      <div className="flex items-center">
        <div className="flex items-center justify-end flex-1">
          <p>{props.match.T1[0].Nm}</p>
          <img
            src={
              "https://lsm-static-prod.livescore.com/medium/" +
              props.match.T1[0].Img
            }
            className="w-8 h-8"
            alt=""
          />
        </div>

        <p className="md:mx-4 mx-2">
          {props.match.Eps === "FT"
            ? props.match.Tr1 + " - " + props.match.Tr2
            : "NS"}
        </p>

        <div className="flex items-center justify-start flex-1">
          <img
            src={
              "https://lsm-static-prod.livescore.com/medium/" +
              props.match.T2[0].Img
            }
            className="w-8 h-8"
            alt=""
          />
          <p>{props.match.T2[0].Nm}</p>
        </div>
        <p>
          {/* {props.match.Esd.toString()
            .slice(-6)
            .slice(0, 4)
            .match(/.{1,2}/g)
            ?.join(":")} */}
          {moment(props.match.Esd, "YYYYMMDDHHmmss")
            .add(-2, "h")
            .add(-30, "m")
            .format("HH:mm")}
        </p>
      </div>
    </div>
  );
};

export default MatchItem;
