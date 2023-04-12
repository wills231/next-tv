"use client";
import { useState, useEffect } from "react";
import ShowSearchResults from "../components/Search/ShowSearchResults";
import ShowSearch from "../components/Search/ShowSearch";
import LoadingComponent from "../components/Loader/loading";

export const SearchPage = () => {
  const [showData, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      const res = await fetch("https://api.tvmaze.com/shows");
      // uncomment below line to showcase the loader:
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      const data = await res.json();
      setShows(data);
      setLoading(false);
    };

    fetchShows();
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <h1>Search your favourite shows</h1>
      <ShowSearch getSearchResults={(results) => setShows(results)} />
      <ShowSearchResults showData={showData} />
    </>
  );
};
export default SearchPage;
