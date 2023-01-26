import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TimelineType } from "./TimelineType";
import { TimelineElements } from "./TimelineElements";

export const Timeline = ({ filteredTimeline, team_away, team_home }) => {
  return (
    <div>
      <VerticalTimeline layout={"1-column-left"}>
        {filteredTimeline &&
          filteredTimeline.map((timeline, i) => {
            const typeData = TimelineType({
              type: timeline.type,
              home_score: timeline.home_score,
              away_score: timeline.away_score,
            });
            if (typeData) {
              const { text, icon } = typeData;
              return (
                <VerticalTimelineElement
                  key={i}
                  date={timeline.match_clock}
                  dateClassName="date date-size"
                  iconStyle={{ background: "white" }}
                  icon={icon}
                >
                  <TimelineElements
                    text={text}
                    timeline={timeline}
                    team_home={team_home}
                    team_away={team_away}
                  />
                </VerticalTimelineElement>
              );
            }
          })}
      </VerticalTimeline>
    </div>
  );
};
