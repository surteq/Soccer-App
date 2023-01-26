import { MatchesList } from "../components/MatchesList/MatchesList";
import { DropdownSeasons } from "../components/DropdownSeasons";
import rateLimitedAPI from "../apis/SportradarSoccerAPI";
import { useState, useEffect } from "react";

export const MatchesOverviewPage = () => {
  const [loading, setLoading] = useState(true);
  const [matches, setMatches] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [currentSeason, setCurrentSeason] = useState("sr:season:77453");
  const api_key = process.env.REACT_APP_API_KEY;

  const fetchMatches = async () => {
    try {
      const response = await rateLimitedAPI.get(
        `seasons/${currentSeason}/schedules.json?api_key=${api_key}`
      );
      setMatches(response.data.schedules);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        const response = await rateLimitedAPI.get(
          `competitions/sr:competition:202/seasons.json?api_key=${api_key}`
        );
        setSeasons(response.data.seasons);
      } catch (error) {
        console.log(error);
      }
      fetchMatches();
    };
    fetchSeasons();
  }, [currentSeason]);
  if (loading) {
    return <div>A moment please...</div>;
  }
  return (
    <div className="body">
      <DropdownSeasons
        seasons={seasons}
        currentSeason={currentSeason}
        setCurrentSeason={setCurrentSeason}
      />
      <MatchesList matches={matches} />
    </div>
  );
};
