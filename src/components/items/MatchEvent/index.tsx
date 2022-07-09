import Cards from "~/assets/images/cards.png";
import Goal from "~/assets/images/goal.png";
import MatchEvent from "~/models/MatchEvent.model";
import Subst from "~/assets/images/subst.png";

type Props = { matchEvent: MatchEvent; homeTeamId: number; index: number };

const MatchEventItem = (props: Props) => {
  return (
    <div
      className="md:text-sm
      flex flex-col text-xs"
      // animate__animated animate__fadeInUp
      // style={{ animationDelay: `${props.index / 3}s` }}
    >
      <div className="flex items-center">
        <div className=" flex justify-end flex-1"></div>
        <div className="w-[1px] h-8 bg-gray-400"></div>

        <div className=" flex-1"></div>
      </div>
      <div className="flex items-center">
        <div className="flex justify-end flex-1">
          {props.homeTeamId === props.matchEvent.team.id && (
            <div className="flex items-center">
              <div className="flex flex-col items-end">
                <p className="font-bold">
                  {props.matchEvent.type === "subst"
                    ? props.matchEvent.assist.name
                    : props.matchEvent.player.name}
                </p>
                <p>
                  {props.matchEvent.type === "subst"
                    ? props.matchEvent.player.name
                    : props.matchEvent.assist.name}
                </p>
                {props.matchEvent.type === "Card" && (
                  <p>{props.matchEvent.detail}</p>
                )}
              </div>
              <img
                src={
                  props.matchEvent.type === "Goal"
                    ? Goal
                    : props.matchEvent.type === "subst"
                    ? Subst
                    : Cards
                }
                className="w-8 h-8 mx-2"
                alt=""
              />
            </div>
          )}
        </div>
        <p>{props.matchEvent.time.elapsed}</p>

        <div className="flex-1">
          {props.homeTeamId !== props.matchEvent.team.id && (
            <div className="flex items-center">
              <img
                src={
                  props.matchEvent.type === "Goal"
                    ? Goal
                    : props.matchEvent.type === "subst"
                    ? Subst
                    : Cards
                }
                className="w-8 h-8 mx-2"
                alt=""
              />
              <div className="flex flex-col">
                <p className="font-bold">
                  {props.matchEvent.type === "subst"
                    ? props.matchEvent.assist.name
                    : props.matchEvent.player.name}
                </p>
                <p>
                  {props.matchEvent.type === "subst"
                    ? props.matchEvent.player.name
                    : props.matchEvent.assist.name}
                </p>
                {props.matchEvent.type === "Card" && (
                  <p>{props.matchEvent.detail}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchEventItem;
