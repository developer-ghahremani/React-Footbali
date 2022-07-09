import Cards from "~/assets/images/cards.png";
import Goal from "~/assets/images/football_selected.png";
import { GoalItem } from "../items";
import HeadToHead from "../HeadToHead";
import MatchEvent from "../MatchEvent";
import MatchModel from "~/models/Match.model";
import Stadium from "~/assets/images/field_selected.png";
import moment from "moment";
import { useGetMatchEventQuery } from "~/store/footballService/matchEvent";

type Props = {
  match: MatchModel;
};

const MatchDetail = (props: Props) => {
  const { isError, isFetching, data } = useGetMatchEventQuery({
    fixtureId: props.match.fixture.id,
  });

  if (isError) return <p>error</p>;
  if (isFetching || !data) return <p>loading</p>;

  return (
    <div>
      <div className="rounded-xl bg-white mt-4 ">
        <div className="flex py-4 justify-between items-center">
          <div></div>
          <div className="flex items-center">
            <img src={props.match.league.flag} className="w-7 h-7" alt="" />
            <p className="mx-4">{props.match.league.name}</p>
          </div>
          <div></div>
        </div>
        <div className="flex mt-16 items-center md:text-xl text-sm">
          <div className="flex-1 flex justify-end items-center">
            <p className=" font-bold">{props.match.teams.home.name}</p>
            <img
              src={props.match.teams.home.logo}
              className="w-12 h-12"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center md:mx-4">
            <p className="font-bold">
              {props.match.goals.home + " - " + props.match.goals.away}
            </p>
            <p className="text-xs md:text-sm text-gray-400 font-bold">
              {props.match.fixture.status.long}
            </p>
          </div>
          <div className="flex-1 flex justify-start items-center">
            <img
              src={props.match.teams.away.logo}
              className="w-12 h-12"
              alt=""
            />
            <p className="font-bold">{props.match.teams.away.name}</p>
          </div>
        </div>
        <div className="flex mt-8 items-center">
          <div className="flex-1 flex justify-end items-end flex-wrap md:flex-row flex-col">
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

          <img src={Goal} alt="" className="w-6 h-6 md:mx-16 mx-8" />

          <div className="flex-1 flex justify-start items-start flex-wrap md:flex-row flex-col">
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
        <div className="flex justify-center py-4 text-xs items-center">
          <p className="mx-1">
            {moment(props.match.fixture.date).format("dd, MMM D YYYY, HH:mm")}
          </p>

          {!!props.match.fixture.venue?.name && (
            <div className="flex mx-1 items-center">
              <img src={Stadium} className="w-6 h-6 rotate-90" alt="" />

              <p>
                {props.match.fixture.venue.city +
                  ", " +
                  props.match.fixture.venue.name}
              </p>
            </div>
          )}
          {!!props.match.fixture.referee && (
            <div className="flex mx-1 items-center">
              <img src={Cards} className="w-6 h-6 rotate-90" alt="" />
              <p>{props.match.fixture.referee}</p>
            </div>
          )}
        </div>
      </div>
      <div className="rounded-xl bg-white my-4 py-4 ">
        <MatchEvent match={props.match} />
      </div>
      <div className="rounded-xl bg-white my-4 py-4">
        <HeadToHead
          h2h={props.match.teams.home.id + "-" + props.match.teams.away.id}
        />
      </div>
    </div>
  );
};

export default MatchDetail;
