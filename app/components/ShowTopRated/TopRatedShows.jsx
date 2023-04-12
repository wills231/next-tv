import Link from "next/link";

const TopRatedShows = async () => {
  const response = await fetch("https://api.tvmaze.com/shows");
  const shows = await response.json();
  const topRating = 8.9;
  const topRatedShows = shows.filter(
    (show) => show.rating.average >= topRating
  );
  return (
    <div className="c-card-deck">
      {topRatedShows.map((show) => (
        <div key={show.id} className="c-card">
          <Link href={`/shows/${show.id}`}>
            <img
              className="c-card__image"
              src={show.image?.medium}
              alt={show.name}
            />
          </Link>
          <div className="c-card__content">
            <h2>{show.name}</h2>
            <p>Score: {show.rating.average}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TopRatedShows;
