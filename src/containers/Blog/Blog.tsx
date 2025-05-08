import SectionsHero from "@/components/SectionsHero/SectionsHero";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import React from "react";
import BlogHero from "../BlogHero/BlogHero";
import HomePageLatestNews from "../HomePageLatestNews/HomePageLatestNews";
import HomePageMailingList from "../HomePageMailingList/HomePageMailingList";

const Blog = () => {
  return (
    <MainLayout>
      <BlogHero />
      <HomePageLatestNews title="News" />
      <HomePageMailingList />
    </MainLayout>
  );
};

export default Blog;
