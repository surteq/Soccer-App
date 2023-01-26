import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
export const TimelineElements = ({ text, timeline, team_away, team_home }) => {
  return (
    <div>
      <h3 className="vertical-timeline-element-title">{text}</h3>
      <h2 className="vertical-timeline-element-subtitle mt-2">
        {timeline.competitor === "away"
          ? team_away
          : timeline.competitor === "home"
          ? team_home
          : null}
      </h2>
      <h5>
        {timeline?.players ? (
          timeline.players.length > 1 ? (
            <>
              <p>
                {timeline.players[0].name} <AiOutlineArrowDown />
              </p>
              <p>
                {timeline.players[1].name} <AiOutlineArrowUp />
              </p>
            </>
          ) : (
            <p>{timeline.players[0].name}</p>
          )
        ) : null}
      </h5>
    </div>
  );
};
