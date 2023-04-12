const SeasonList = ({ seasons }) => (
  <>
    <h2>Seasons:</h2>
    {seasons.map((season) => (
      <div key={season.id}>
        {season.premiereDate} - {season.endDate} ({season.episodeOrder}{" "}
        episodes)
      </div>
    ))}
  </>
);
export default SeasonList;
