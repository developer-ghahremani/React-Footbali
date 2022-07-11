import Cards from "~/assets/images/cards.png";
import Goal from "~/assets/images/football_selected.png";
import { GoalItem } from "../items";
import HeadToHead from "../HeadToHead";
import MatchEvent from "../MatchEvent";
import MatchModel from "~/models/Match.model";
import Stadium from "~/assets/images/field_selected.png";
import moment from "moment";
import { useAppSelector } from "~/store";
import { useGetMatchEventQuery } from "~/store/footballService/matchEvent";

type Props = {
  match: MatchModel;
};

const MatchDetail = (props: Props) => {
  const { isError, isFetching, data } = useGetMatchEventQuery({
    fixtureId: props.match.fixture.id,
  });
  const { darkMode } = useAppSelector((s) => s.settings.ui);

  if (isError) return <p>error</p>;
  if (isFetching || !data) return <p>loading</p>;

  return (
    <div>
      <div
        className={`rounded-xl ${
          darkMode ? "bg-darkMode-secondary" : "bg-lightMode-secondary"
        } shadow-lg`}>
        <div className="py-4bg-red-500 flex items-center justify-between">
          <div></div>
          <div className="flex items-center">
            <img src={props.match.league.flag} className="w-7 h-7" alt="" />
            <p className="mx-4">{props.match.league.name}</p>
          </div>
          <div></div>
        </div>
        <div className="md:text-xl flex items-center mt-16 text-sm">
          <div className="md:flex-row flex flex-col-reverse items-center justify-end flex-1">
            <p className=" font-bold">{props.match.teams.home.name}</p>
            <img
              src={props.match.teams.home.logo}
              className="w-12 h-12"
              alt=""
            />
          </div>
          <div className="md:mx-4 flex flex-col items-center">
            <p className="font-bold">
              {props.match.goals.home + " - " + props.match.goals.away}
            </p>
            <p className="md:text-sm text-xs font-bold text-gray-400">
              {props.match.fixture.status.long}
            </p>
          </div>
          <div className="md:flex-row flex flex-col items-center justify-start flex-1">
            <img
              src={props.match.teams.away.logo}
              className="w-12 h-12"
              alt=""
            />
            <p className="font-bold">{props.match.teams.away.name}</p>
          </div>
        </div>
        <div className="flex items-center mt-8">
          <div className="md:flex-row flex flex-col flex-wrap items-end justify-end flex-1">
            {data.response
              .filter(
                (item) =>
                  item.type === "Goal" &&
                  item.team.id === props.match.teams.home.id
              )
              .map((item, index) => (
                <GoalItem
                  player={item.player}
                  time={item.time}
                  key={item.player.id + "_" + index}
                />
              ))}
          </div>

          <img src={Goal} alt="" className="md:mx-16 w-6 h-6 mx-8" />

          <div className="md:flex-row flex flex-col flex-wrap items-start justify-start flex-1">
            {data.response
              .filter(
                (item) =>
                  item.type === "Goal" &&
                  item.team.id === props.match.teams.away.id
              )
              .map((item, index) => (
                <GoalItem
                  player={item.player}
                  time={item.time}
                  key={item.player.id + "_" + index}
                />
              ))}
          </div>
        </div>
        <div className="h-[1px] mt-4 bg-gray-200"></div>
        <div className="md:flex-row flex flex-col items-center justify-center py-4 text-xs">
          <p>
            {moment(props.match.fixture.date).format("dd, MMM D YYYY, HH:mm")}
          </p>

          {!!props.match.fixture.venue?.name && (
            <div className="md:mx-4 flex items-center mx-1">
              <img src={Stadium} className="w-6 h-6 rotate-90" alt="" />
              <p>
                {props.match.fixture.venue.city +
                  ", " +
                  props.match.fixture.venue.name}
              </p>
            </div>
          )}
          {!!props.match.fixture.referee && (
            <div className="flex items-center">
              <img src={Cards} className="w-6 h-6" alt="" />
              <p>{props.match.fixture.referee}</p>
            </div>
          )}
        </div>
      </div>
      <div
        className={`rounded-xl ${
          darkMode ? "bg-darkMode-secondary" : "bg-lightMode-secondary"
        } p-4 my-4`}>
        <p className="text-xl">Match events</p>
        <MatchEvent match={props.match} />
      </div>
      <div
        className={`rounded-xl ${
          darkMode ? "bg-darkMode-secondary" : "bg-lightMode-secondary"
        } p-4 my-4`}>
        <p className="text-xl">Head To Head</p>
        <HeadToHead
          h2h={props.match.teams.home.id + "-" + props.match.teams.away.id}
        />
      </div>
    </div>
  );
};

export default MatchDetail;
