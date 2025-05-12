import Loader from "@/components/Loader/Loader";
import OurShows from "@/containers/OurShows/OurShows";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <OurShows />
    </Suspense>
  );
};

export default page;
