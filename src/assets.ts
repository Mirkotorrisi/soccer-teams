export interface MatchType {
  home: string;
  homeScore: number;
  away: string;
  awayScore: number;
  matchId: number;
}

export interface RankType {
  name: string;
  score: number;
}

export const initRanking = [
  {
    name: "Juve",
    score: 3,
  },
  {
    name: "Napoli",
    score: 2,
  },
  {
    name: "Inter",
    score: 0,
  },
  {
    name: "Milan",
    score: 0,
  },
];

export const initMatches = [
  {
    matchId: 1,
    home: "Juve",
    homeScore: 0,
    away: "Napoli",
    awayScore: 0,
  },
  {
    matchId: 2,
    home: "Inter",
    homeScore: 0,
    away: "Milan",
    awayScore: 0,
  },
];
