import Loader from "@/components/Loader/Loader";
import BlogContent from "@/containers/BlogContent/BlogContent";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BlogContent />
    </Suspense>
  );
};

export default page;
