export const DropdownSeasons = ({
  seasons,
  currentSeason,
  setCurrentSeason,
}) => {
  return (
    <div className="w-50 p-5 roundex mx-auto">
      <div className="dropdown">
        <select
          className="form-select form-select-lg"
          value={currentSeason}
          onChange={(e) => setCurrentSeason(e.target.value)}
        >
          {seasons &&
            seasons.map((season, i) => {
              return (
                <option key={i} value={season.id}>
                  {season.name}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};
