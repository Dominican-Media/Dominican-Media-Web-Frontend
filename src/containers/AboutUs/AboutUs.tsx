import MainLayout from "@/layouts/MainLayout/MainLayout";
import AboutUsHero from "../AboutUsHero/AboutUsHero";
import AboutUsMission from "../AboutUsMission/AboutUsMission";
import AboutUsOurTeam from "../AboutUsOurTeam/AboutUsOurTeam";
import HomePageMailingList from "../HomePageMailingList/HomePageMailingList";

const AboutUs = () => {
  return (
    <MainLayout>
      <AboutUsHero />
      <AboutUsMission />
      <AboutUsOurTeam />
      <HomePageMailingList />
    </MainLayout>
  );
};

export default AboutUs;
