import { ABOUT_US_MISSION } from "@/utils/constants";
import Image from "next/image";
import classes from "./AboutUsMission.module.css";

const AboutUsMission = () => {
  return (
    <section className={classes.container}>
      {ABOUT_US_MISSION.map((data) => {
        return (
          <div key={data?.title} className={classes.detail}>
            <div className={classes.textSection}>
              <h4>{data?.title}</h4>
              <p>{data?.caption}</p>
            </div>
            <Image
              src={data?.image}
              alt={data.title}
              width={500}
              height={505}
            />
          </div>
        );
      })}
    </section>
  );
};

export default AboutUsMission;
