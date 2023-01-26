export const TimelineTitle = ({
  team_away,
  team_home,
  team_home_score,
  team_away_score,
}) => {
  return (
    <div>
      <h1 className="time-line-title">
        {team_home} vs {team_away}
      </h1>
      <h2 className="time-line-subtitle mt-2">
        {team_home_score} : {team_away_score}
      </h2>
    </div>
  );
};
