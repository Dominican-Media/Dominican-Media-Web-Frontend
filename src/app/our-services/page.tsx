import Loader from "@/components/Loader/Loader";
import OurServices from "@/containers/OurServices/OurServices";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <OurServices />
    </Suspense>
  );
};

export default page;
