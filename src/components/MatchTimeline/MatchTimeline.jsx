import { Timeline } from "./Timeline/Timeline";
import { TimelineTitle } from "./Timeline/TimelineTitle";

export const MatchTimeline = ({ timeline, teams, score }) => {
  let filteredTimeline = [];
  if (timeline.length > 0)
    filteredTimeline = timeline.filter(
      (item) =>
        item.type === "match_started" ||
        item.type === "match_ended" ||
        item.type === "corner_kick" ||
        item.type === "score_change" ||
        item.type === "period_score" ||
        item.type === "yellow_card" ||
        item.type === "red_card" ||
        item.type === "substitution"
    );

  const team_away = teams[0].name;
  const team_home = teams[1].name;
  let team_home_score = score.home_score;
  let team_away_score = score.away_score;

  return (
    <div className="time-line-div">
      <TimelineTitle
        team_away={team_away}
        team_home={team_home}
        team_home_score={team_home_score}
        team_away_score={team_away_score}
      />
      <Timeline
        filteredTimeline={filteredTimeline}
        team_away={team_away}
        team_home={team_home}
      />
    </div>
  );
};
