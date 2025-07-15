import Loader from "@/components/Loader/Loader";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import { SERVICES } from "@/utils/constants";
import { serviceType } from "@/utils/types";
import classes from "./HomePageOurServices.module.css";

type HomePageOurServicesTypes = {
  title?: string;
  data: serviceType[];
  loading?: boolean;
};

const HomePageOurServices = ({
  title,
  data,
  loading,
}: HomePageOurServicesTypes) => {
  return (
    <section className={classes.container}>
      <h2>{title || "Our Services"}</h2>

      <div className={classes.servicesSection}>
        {loading ? (
          <Loader />
        ) : (
          data?.map((services: serviceType) => {
            return <ServicesCard data={services} key={services?._id} />;
          })
        )}
      </div>
    </section>
  );
};

export default HomePageOurServices;
