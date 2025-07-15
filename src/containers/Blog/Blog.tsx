"use client";

import Loader from "@/components/Loader/Loader";
import SectionsHero from "@/components/SectionsHero/SectionsHero";
import { useBlogCategories, useBlogs } from "@/hooks/useBlogs";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { blogItemType, categoriesType } from "@/utils/types";
import React, { useMemo } from "react";
import BlogHero from "../BlogHero/BlogHero";
import HomePageLatestNews from "../HomePageLatestNews/HomePageLatestNews";
import HomePageMailingList from "../HomePageMailingList/HomePageMailingList";

const Blog = () => {
  // Requests
  const { isLoading, data } = useBlogs();
  const { isLoading: blogCategoriesIsLoading, data: blogCategoriesData } =
    useBlogCategories();

  const blogs = useMemo(() => {
    return data?.data?.blogs;
  }, [data]);

  const featuredBlogs: blogItemType | null = useMemo(() => {
    return data?.data?.blogs?.find((data: blogItemType) => {
      return data?.isFeatured;
    });
  }, [data]);

  const blogCategories: categoriesType[] = useMemo(() => {
    return blogCategoriesData?.data?.categories;
  }, [blogCategoriesData]);

  return (
    <MainLayout>
      {isLoading || blogCategoriesIsLoading ? (
        <Loader />
      ) : (
        <>
          {featuredBlogs && (
            <BlogHero
              data={featuredBlogs as blogItemType}
              categories={blogCategories}
            />
          )}
          <HomePageLatestNews
            title="Blogs"
            data={blogs}
            categories={blogCategories}
          />
          <HomePageMailingList />
        </>
      )}
    </MainLayout>
  );
};

export default Blog;
