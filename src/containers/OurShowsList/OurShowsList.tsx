import Button from "@/components/Button/Button";
import ShowCard from "@/components/ShowCard/ShowCard";
import { SHOWS } from "@/utils/constants";
import classes from "./OurShowsList.module.css";

const OurShowsList = () => {
  return (
    <section className={classes.container}>
      <h2>Our Shows</h2>

      <div className={classes.shows}>
        {SHOWS.map((data) => {
          return (
            <ShowCard {...data} key={data?.title} buttonText="Watch Now" />
          );
        })}
      </div>
    </section>
  );
};

export default OurShowsList;
