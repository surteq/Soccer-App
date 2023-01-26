import { useNavigate } from "react-router-dom";
import { MatchesThead } from "./MatchesThead";
import { MatchRow } from "./MatchRow";

export const MatchesList = ({ matches }) => {
  const navigate = useNavigate();

  const handleSportEventSelect = (id) => {
    navigate(`detail/${id}`);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-auto">
        <table className="table table-hover mt-5 table-responsive ">
          <MatchesThead />
          <tbody>
            {matches &&
              matches.map((match, i) => {
                return (
                  <MatchRow
                    key={i}
                    match={match}
                    handleSportEventSelect={handleSportEventSelect}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
