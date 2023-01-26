export const MatchRow = ({ match, handleSportEventSelect }) => {
  const {
    sport_event: {
      competitors: [{ name: home_name }, { name: away_name }],
      id: id,
      start_time: start_time,
      venue: { name: venue_name },
    },
    sport_event_status: {
      away_score: away_score,
      home_score: home_score,
      match_status: match_status,
      status: status,
    },
  } = match;

  const changeColor = (team1, team2) => {
    return `table-${
      team1 > team2 ? "success" : team1 < team2 ? "danger" : "warning"
    }`;
  };
  return (
    <tr
      onClick={() => handleSportEventSelect(id)}
      style={{ cursor: "pointer" }}
      className="table-row"
    >
      <td className={changeColor(home_score, away_score)}>{home_name}</td>
      <td className={changeColor(away_score, home_score)}>{away_name}</td>
      <td>
        {match_status === "ended" ? (
          <p>
            {home_score} : {away_score}
          </p>
        ) : (
          <p>N/A</p>
        )}
      </td>
      <td>{start_time.slice(0, 10)}</td>
      <td>
        {match_status === "ended" ? (
          <p>
            {match.sport_event_status.period_scores[0].home_score} :{" "}
            {match.sport_event_status.period_scores[0].away_score}
          </p>
        ) : (
          <p>N/A</p>
        )}
      </td>
      <td>{venue_name}</td>
    </tr>
  );
};
