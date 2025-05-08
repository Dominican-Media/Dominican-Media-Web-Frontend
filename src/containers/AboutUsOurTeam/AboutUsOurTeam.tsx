import ServicesCard from "@/components/ServicesCard/ServicesCard";
import { TEAM } from "@/utils/constants";
import classes from "./AboutUsOurTeam.module.css";

const AboutUsOurTeam = () => {
  return (
    <section className={classes.container}>
      <h2>Our team</h2>
      <p>The amazing team behind the greatness that we provide to you</p>

      <div className={classes.teamMembers}>
        {TEAM.map((data) => {
          return (
            <ServicesCard
              caption={data?.role}
              image={data?.images}
              title={data?.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AboutUsOurTeam;
