import React, { useState } from "react";

import { DownArrow } from "~/components/icons";
import MatchEvent from "~/components/MatchEvent";
import MatchModel from "~/models/Match.model";
import UpArrow from "~/components/icons/UpArrow";
import moment from "moment";
import { pageNames } from "~/constant";
import { stringifyUrl } from "query-string";
import { useNavigate } from "react-router-dom";

type Props = { match: MatchModel };

const MatchItem = (props: Props) => {
  const navigate = useNavigate();
  const [selectedFixture, setSelectedFixture] = useState<MatchModel | null>(
    null
  );

  const toggleFixtureEvent = () => {
    if (selectedFixture) return setSelectedFixture(null);
    setSelectedFixture(props.match);
  };

  const handleMatchDetail = () => {
    navigate(
      stringifyUrl({
        url: pageNames.match,
        query: { matchId: props.match.fixture.id },
      }),
      { state: props.match }
    );
  };

  return (
    <div className="mt-2">
      <div className=" flex items-center">
        <div className=" flex items-center justify-end flex-1">
          <p className="mx-2">{props.match.teams.home.name}</p>
          <img
            src={props.match.teams.home.logo}
            className="max-w-8 max-h-8"
            alt=""
          />
        </div>

        <p
          onClick={handleMatchDetail}
          className="bg-lightMode-primary text-darkMode-primary rounded-xl px-4 py-1 mx-2 cursor-pointer">
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
        <div className="flex items-center">
          {selectedFixture ? (
            <UpArrow className="cursor-pointer" onClick={toggleFixtureEvent} />
          ) : (
            <DownArrow
              className="cursor-pointer"
              onClick={toggleFixtureEvent}
            />
          )}

          <p>{moment(props.match.fixture.date).format("HH:mm")}</p>
        </div>
      </div>

      {selectedFixture && (
        // <MatchEvent match={selectedFixture} />
        <div className="md:mr-14 mt-4 mr-10">
          <MatchEvent match={selectedFixture} />
        </div>
      )}
    </div>
  );
};

export default MatchItem;
