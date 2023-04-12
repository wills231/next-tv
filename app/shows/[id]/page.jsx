import LoadingComponent from "@/app/components/Loader/loading";
import Show from "@/app/components/ShowCard/Show";
import { Suspense } from "react";

const ShowPage = ({ params: { id } }) => {
  return (
    <div className="c-infobox">
      <h1 className="u-visually-hidden">Show info</h1>
      <Suspense fallback={<LoadingComponent />}>
        <Show id={id} />
      </Suspense>
    </div>
  );
};

export default ShowPage;
