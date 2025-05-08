import SectionsHero from "@/components/SectionsHero/SectionsHero";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import HomePageFeaturedShows from "../HomePageFeaturedShows/HomePageFeaturedShows";
import OurShowsList from "../OurShowsList/OurShowsList";

const OurShows = () => {
  return (
    <MainLayout>
      <SectionsHero title="NOW SHOWING" buttontext="View on YouTube" />
      <OurShowsList />
    </MainLayout>
  );
};

export default OurShows;
