interface MatchEvent {
  time: Time;
  team: Team;
  player: Player;
  assist: Assist;
  type: "Goal" | "subst" | "Card";
  detail: string;
  comments?: any;
}

interface Time {
  elapsed: number;
  extra?: any;
}

interface Team {
  id: number;
  name: string;
  logo: string;
}

interface Player {
  id: number;
  name: string;
}

interface Assist {
  id?: number;
  name: string;
}

export default MatchEvent;
