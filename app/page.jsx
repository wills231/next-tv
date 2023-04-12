"use client";
import TopRatedShows from "./components/ShowTopRated/TopRatedShows";
import GenreShows from "./components/ShowGenre/ShowGenre";

export const HomePage = () => {
  async function getTopRatedShows() {
    const response = await fetch("https://api.tvmaze.com/shows");
    const shows = await response.json();
    const topRating = 8.9;
    const topRatedShows = shows.filter(
      (show) => show.rating.average >= topRating
    );
    topRatedShows.sort((a, b) => b.rating.average - a.rating.average);
    return topRatedShows;
  }

  return (
    <>
      <h1 className="u-visually-hidden">Homepage</h1>
      <section id="Top Rated">
        <h2>Highest Rated shows of all Time</h2>
        <TopRatedShows />
      </section>
      <section id="Action">
        <h2>Most Action Packed Shows</h2>
        <GenreShows genre="Action" />
      </section>
      <section id="Science-Fiction">
        <h2>Science-Fiction Classics</h2>
        <GenreShows genre="Science-Fiction" />
      </section>
      <section id="Comedy">
        <h2>Funniest Comedy Shows</h2>
        <GenreShows genre="Comedy" />
      </section>
    </>
  );
};
export default HomePage;
