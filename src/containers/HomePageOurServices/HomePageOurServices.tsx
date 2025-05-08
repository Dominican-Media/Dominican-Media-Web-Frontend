import ServicesCard from "@/components/ServicesCard/ServicesCard";
import { SERVICES } from "@/utils/constants";
import classes from "./HomePageOurServices.module.css";

type HomePageOurServicesTypes = {
  title?: string;
};

const HomePageOurServices = ({ title }: HomePageOurServicesTypes) => {
  return (
    <section className={classes.container}>
      <h2>{title || "Our Services"}</h2>

      <div className={classes.servicesSection}>
        {SERVICES.map((data) => {
          return <ServicesCard {...data} key={data?.title} />;
        })}
      </div>
    </section>
  );
};

export default HomePageOurServices;
