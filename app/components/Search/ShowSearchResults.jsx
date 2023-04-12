import Link from "next/link";

const ShowSearchResults = ({ showData }) => {
  if (showData.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <div className="c-card-deck">
      {showData.map((show) => (
        <div key={show.id} className="c-card__search">
          <Link href={`/shows/${show.id}`}>
            {show.image ? (
              <img src={show.image.medium} alt={show.name} />
            ) : (
              <img
                src="https://via.placeholder.com/210x295/828282/969696.png?text=No+image+available"
                alt="No image available"
              />
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};
export default ShowSearchResults;
