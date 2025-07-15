"use client";

import { useBlogCategories, useBlogs } from "@/hooks/useBlogs";
import { useServices } from "@/hooks/useServices";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { blogItemType, categoriesType, serviceType } from "@/utils/types";
import { useMemo } from "react";
import HomePageFeaturedShows from "../HomePageFeaturedShows/HomePageFeaturedShows";
import HomePageHero from "../HomePageHero/HomePageHero";
import HomePageLatestNews from "../HomePageLatestNews/HomePageLatestNews";
import HomePageMailingList from "../HomePageMailingList/HomePageMailingList";
import HomePageOurServices from "../HomePageOurServices/HomePageOurServices";
import HomePagePartners from "../HomePagePartners/HomePagePartners";
import HomePageStats from "../HomePageStats/HomePageStats";
import classes from "./HomePage.module.css";

const HomePage = () => {
  // Hooks
  const { isLoading, data } = useServices();
  const { isLoading: blogIsLoading, data: blogData } = useBlogs();
  const { isLoading: blogCategoriesIsLoading, data: blogCategoriesData } =
    useBlogCategories();

  const services: serviceType[] = useMemo(() => {
    return data?.data;
  }, [data]);

  const blogs: blogItemType[] = useMemo(() => {
    return blogData?.data?.blogs;
  }, [blogData]);

  const blogCategories: categoriesType[] = useMemo(() => {
    return blogCategoriesData?.data?.categories;
  }, [blogCategoriesData]);

  return (
    <MainLayout className={classes.container}>
      <HomePageHero />
      <HomePagePartners />
      <HomePageStats />
      <HomePageOurServices data={services} loading={isLoading} />
      <HomePageFeaturedShows />
      <HomePageLatestNews
        data={blogs}
        loading={blogIsLoading || blogCategoriesIsLoading}
        categories={blogCategories}
      />
      <HomePageMailingList />
    </MainLayout>
  );
};

export default HomePage;
