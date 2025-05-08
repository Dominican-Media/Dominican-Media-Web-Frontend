import MainLayout from "@/layouts/MainLayout/MainLayout";
import HomePageFeaturedShows from "../HomePageFeaturedShows/HomePageFeaturedShows";
import HomePageHero from "../HomePageHero/HomePageHero";
import HomePageLatestNews from "../HomePageLatestNews/HomePageLatestNews";
import HomePageMailingList from "../HomePageMailingList/HomePageMailingList";
import HomePageOurServices from "../HomePageOurServices/HomePageOurServices";
import HomePagePartners from "../HomePagePartners/HomePagePartners";
import HomePageStats from "../HomePageStats/HomePageStats";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <MainLayout className={classes.container}>
      <HomePageHero />
      <HomePagePartners />
      <HomePageStats />
      <HomePageOurServices />
      <HomePageFeaturedShows />
      <HomePageLatestNews />
      <HomePageMailingList />
    </MainLayout>
  );
};

export default HomePage;
