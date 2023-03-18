import React, { useEffect, useState } from "react";
import { MatchType, RankType, initRanking } from "../../assets";
import { Container } from "../Container/Container";
import { Team } from "../Team/Team";

interface Props {
  match: MatchType;
  setRanking: React.Dispatch<React.SetStateAction<RankType[]>>;
}

const getScore = (team: RankType, match: MatchType) => {
  // ranking team is not present in match
  if (![match.home, match.away].includes(team.name)) return team.score;
  // draw case
  if (match.homeScore === match.awayScore) return team.score + 1;
  // no draw possible so if home is not > than away then home lose
  const winner = match.homeScore > match.awayScore ? "home" : "away";
  if (team.name === match[winner]) return team.score + 3;
  // lose case returns the same score
  return team.score;
};

export const Match = ({ match: matchProp, setRanking }: Props) => {
  // instead of setting a state with array of matches, I created a state on each Match component
  const [match, setMatch] = useState<MatchType>(matchProp);

  useEffect(() => {
    // when match changes, useEffect is triggered and initRanking array is mapped to get the new ranking,
    // by using the updated team goals
    setRanking(
      initRanking.map((team) => ({
        ...team,
        score: getScore(team, match),
      }))
    );
    // match is the true dependency needed, setRanking is here only to avoid React warnings
  }, [match, setRanking]);

  const handleGoal = (value: number, isHome?: boolean) => {
    // this setMatch will update only score according if isHome or not
    const key = isHome ? "homeScore" : "awayScore";
    setMatch({
      ...match,
      [key]: Math.max(match[key] + value, 0),
    });
  };
  return (
    <Container>
      <Team
        handleGoal={handleGoal}
        team={{ name: match.home, score: match.homeScore }}
        // notice isHome prop that will tell to handleGoal function if update homeScore or awayScore
        isHome
      />
      vs
      <Team
        handleGoal={handleGoal}
        team={{ name: match.away, score: match.awayScore }}
      />
    </Container>
  );
};
