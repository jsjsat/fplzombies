export interface Zombie {
  userid: number;
  username: string;
  teamname: string;
  overallrank: number;
  overallpoints: number;
  gameweekrank: number;
  gameweekpoints: number;
  captain: string;
  vicecaptain: string;
}

export interface GameweekRanking {
  ranking: Zombie[];
  gameweek: number;
  updatetimestamp: number;
}

export interface OverallData {
  gameweeks: GameweekRanking[];
  currentgw: number;
  updatetimestamp: number;
}
