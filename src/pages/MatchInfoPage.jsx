import { useParams } from "react-router-dom";
import { MatchTimeline } from "../components/MatchTimeline/MatchTimeline";
import { useEffect, useState } from "react";
import rateLimitedAPI from "../apis/SportradarSoccerAPI";

export const MatchInfoPage = () => {
  const { id } = useParams();

  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await rateLimitedAPI.get(
          `sport_events/${id}/timeline.json?api_key=${api_key}`
        );
        setTimeline(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>A moment please...</div>;
  }
  if (timeline.sport_event_status.status == "closed") {
    return (
      <div>
        <MatchTimeline
          timeline={timeline.timeline}
          teams={timeline.statistics.totals.competitors}
          score={timeline.sport_event_status}
        />
      </div>
    );
  } else {
    return <h1>match {timeline.sport_event_status.status}</h1>;
  }
};
