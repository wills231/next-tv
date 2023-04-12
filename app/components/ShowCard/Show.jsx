import CastList from "../ShowDetails/Cast";
import EpisodeList from "../ShowDetails/Episodes";
import SeasonList from "../ShowDetails/Seasons";
import Link from "next/link";

async function fetchShowDetails(id) {
  const response = await fetch(
    `https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=episodes&embed[]=cast&embed[]=crew`
  );
  const showDetails = await response.json();
  return showDetails;
}

const removeTags = (text) => {
  if (text === null || text === "") {
    return false;
  } else {
    text = text.toString();
  }
  return text.replace(/(<([^>]+)>)/gi, "");
};

const Show = async ({ id }) => {
  const show = await fetchShowDetails(id);

  return (
    <>
      <h1>{show.name}</h1>
      <div className="c-infobox--top">
        <div>
          <p>{removeTags(show.summary)}</p>
          <p>
            Score: {show.rating.average} / 10 | Runtime: {show.runtime} min |
            Official Site:{" "}
            <Link
              className="c-infobox__link"
              href={`${show.officialSite}`}
              target="_blank"
            >
              {show.officialSite}{" "}
            </Link>
          </p>
        </div>
        <div>
          {show.image ? (
            <img src={show.image.medium} alt={show.name} />
          ) : (
            <img
              src="https://via.placeholder.com/210x295/828282/969696.png?text=No+image+available"
              alt="No image available"
            />
          )}
        </div>
      </div>
      <div className="c-infobox--bottom">
        <div>
          <CastList cast={show._embedded.cast} />
        </div>
        <div>
          <div>
            <EpisodeList episodes={show._embedded.episodes} />
          </div>
          <div>
            <SeasonList seasons={show._embedded.seasons} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
