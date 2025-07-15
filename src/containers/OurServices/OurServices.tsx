"use client";

import Loader from "@/components/Loader/Loader";
import { useServices } from "@/hooks/useServices";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { serviceType } from "@/utils/types";
import React, { useMemo } from "react";
import HomePageMailingList from "../HomePageMailingList/HomePageMailingList";
import HomePageOurServices from "../HomePageOurServices/HomePageOurServices";
import OurServicesHero from "../OurServicesHero/OurServicesHero";

const OurServices = () => {
  // Hooks
  const { isLoading, data } = useServices();

  const services: serviceType[] = useMemo(() => {
    return data?.data;
  }, [data]);

  console.log(services, "Services");

  return (
    <MainLayout>
      <OurServicesHero />
      {isLoading ? (
        <Loader />
      ) : (
        <HomePageOurServices title="Services we offer" data={services} />
      )}

      <HomePageMailingList />
    </MainLayout>
  );
};

export default OurServices;
