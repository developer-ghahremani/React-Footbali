interface MatchEvent {
  time: MatchTime;
  team: Team;
  player: Player;
  assist: Assist;
  type: "Goal" | "subst" | "Card";
  detail: string;
  comments?: any;
}

export interface MatchTime {
  elapsed: number;
  extra?: any;
}

interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface Player {
  id: number;
  name: string;
}

interface Assist {
  id?: number;
  name: string;
}

export default MatchEvent;
