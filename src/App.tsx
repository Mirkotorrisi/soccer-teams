import React, { useState } from "react";
import "./App.css";
import { RankType, initRanking, initMatches } from "./assets";
import { Match } from "./components/Match/Match";

const App = () => {
  const [ranking, setRanking] = useState<RankType[]>(initRanking);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  const sorted = ranking.sort((a, b) => (a.score < b.score ? 1 : -1));
  return (
    <>
      {initMatches.map((match, index) => (
        <Match match={match} setRanking={setRanking} key={index} />
      ))}
      {sorted.map((t) => (
        <div className="d-flex flex-col align-center">
          {t.name} - {t.score}
        </div>
      ))}
    </>
  );
};

export default App;
