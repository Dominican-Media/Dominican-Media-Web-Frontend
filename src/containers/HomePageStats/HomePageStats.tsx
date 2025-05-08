import Button from "@/components/Button/Button";
import StatCard from "@/components/StatCard/StatCard";
import { IMAGES, IMPACT } from "@/utils/constants";
import Image from "next/image";
import classes from "./HomePageStats.module.css";

// Utils
const colors = ["#F1C2B0", "#F9EB98", "#C0D9DD"];

const HomePageStats = () => {
  return (
    <section className={classes.container}>
      <div className={classes.topSection}>
        <div>
          <h2>Our impact</h2>
          <p>
            At Dominican Media, we believe the message matters and so does the
            reach. These numbers reflect our growing community, meaningful
            content, and the dedication to spreading the Gospel in modern,
            creative ways.
          </p>
          <Button>Contact Us</Button>
        </div>
        <Image
          src={IMAGES.STATS_IMAGE}
          alt="Our Impact"
          height={470}
          width={651}
        />
      </div>

      <div className={classes.stats}>
        {IMPACT.map((data, i) => {
          return (
            <StatCard
              index={String(i + 1).padStart(2, "0")}
              title={data?.title}
              paragraph={data?.caption}
              key={data?.title}
              backgroundColor={colors[i]}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HomePageStats;
