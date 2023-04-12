const EpisodeList = ({ episodes }) => (
  <>
    <h2>Episodes:</h2>
    {episodes.map((episode) => (
      <div key={episode.id}>
        {episode.season}x{episode.number} - {episode.name}
      </div>
    ))}
  </>
);

export default EpisodeList;
