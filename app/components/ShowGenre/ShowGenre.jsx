import { useState, useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";
import LoadingComponent from "../Loader/loading";
import { BASE_API_URL } from "@/app/api/route";

function GenreShows({ genre }) {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchShows() {
      const response = await fetch(`${BASE_API_URL}`);
      const data = await response.json();
      setShows(data.filter((show) => show.genres.includes(genre)));
      setLoading(false);
    }
    fetchShows();
  }, [genre]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 4,
    arrows: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 700,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 2 },
      },
      {
        breakpoint: 769,
        settings: { slidesToShow: 5, slidesToScroll: 3 },
      },
    ],
  };

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <Slider {...settings}>
      {shows.slice(0, 11).map((show) => (
        <div className="c-card-slider" key={show.id}>
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
    </Slider>
  );
}

export default GenreShows;
