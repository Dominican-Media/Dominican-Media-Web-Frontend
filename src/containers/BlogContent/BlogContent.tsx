"use client";

import Loader from "@/components/Loader/Loader";
import { useBlogCategories, useBlogsById } from "@/hooks/useBlogs";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { blogItemType, categoriesType } from "@/utils/types";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import BlogContentInfo from "../BlogContentInfo/BlogContentInfo";
import BlogContentText from "../BlogContentText/BlogContentText";
import classes from "./BlogContent.module.css";

const BlogContent = () => {
  // Router
  const { blogId } = useParams();

  // Requests
  const { isLoading, data } = useBlogsById(blogId as string);
  const { isLoading: categoriesisLoading, data: categoriesData } =
    useBlogCategories();

  // Memo
  const blogItem: blogItemType = useMemo(() => {
    return data?.data?.blogItem;
  }, [data]);

  const blogCategories: categoriesType[] = useMemo(() => {
    return categoriesData?.data?.categories;
  }, [categoriesData]);

  return (
    <MainLayout>
      {isLoading || categoriesisLoading ? (
        <Loader />
      ) : (
        <section className={classes.container}>
          <BlogContentInfo data={blogItem} categories={blogCategories} />
          <BlogContentText data={blogItem} />
        </section>
      )}
    </MainLayout>
  );
};

export default BlogContent;
