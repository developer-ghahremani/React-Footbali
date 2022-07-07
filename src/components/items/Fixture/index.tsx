import React, { useState } from "react";

import { DownArrow } from "~/components/icons";
import MatchItem from "../Match";
import MatchModel from "~/models/Match.model";
import UpArrow from "~/components/icons/UpArrow";

type Props = {
  title: string;
  matches: MatchModel[];
};

const FixtureItem = (props: Props) => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => {
    setExpand((s) => !s);
  };

  return (
    <div className="rounded-2xl md:text-base text-xss p-2 mb-3 text-xs border">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleExpand}>
        <div className="flex items-center">
          <img
            src={props.matches[0].league.logo}
            className="w-12 h-12"
            alt=""
          />
          <p className="mx-2 font-bold">{props.title}</p>
        </div>
        <div className=" flex items-center">
          {/* <p className="bg-rose-400 w-6 h-6 text-sm font-bold text-center text-white rounded-full">
            {props.matches.length}
          </p> */}

          {!expand ? <DownArrow /> : <UpArrow />}
        </div>
      </div>
      {expand && (
        <div>
          {props.matches
            .sort((a, b) => (b.fixture.status.short === "FT" ? 1 : 0))
            .map((match) => (
              <MatchItem match={match} key={match.fixture.id} />
            ))}
        </div>
      )}
    </div>
  );
};

export default FixtureItem;
