interface Props {
  team: {
    name: string;
    score: number;
  };
  isHome?: boolean;
  handleGoal: (value: number, isHome?: boolean) => void;
}

export const Team = ({ team, isHome, handleGoal }: Props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{team.name}</h5>
        <hr></hr>
        <button
          className="btn btn-primary"
          onClick={() => handleGoal(1, isHome)}
        >
          +
        </button>
        <span className="display-3 mx-5">{team.score}</span>
        <button
          className="btn btn-primary"
          onClick={() => handleGoal(-1, isHome)}
        >
          -
        </button>
      </div>
    </div>
  );
};
