import Loader from "@/components/Loader/Loader";
import Blog from "@/containers/Blog/Blog";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Blog />
    </Suspense>
  );
};

export default page;
