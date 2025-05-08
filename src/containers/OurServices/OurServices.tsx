import MainLayout from "@/layouts/MainLayout/MainLayout";
import React from "react";
import HomePageMailingList from "../HomePageMailingList/HomePageMailingList";
import HomePageOurServices from "../HomePageOurServices/HomePageOurServices";
import OurServicesHero from "../OurServicesHero/OurServicesHero";

const OurServices = () => {
  return (
    <MainLayout>
      <OurServicesHero />
      <HomePageOurServices title="Services we offer" />
      <HomePageMailingList />
    </MainLayout>
  );
};

export default OurServices;
