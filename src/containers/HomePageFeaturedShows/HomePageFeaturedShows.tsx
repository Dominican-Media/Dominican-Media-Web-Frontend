"use client";

import Button from "@/components/Button/Button";
import ShowCard from "@/components/ShowCard/ShowCard";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { SHOWS } from "@/utils/constants";
import classes from "./HomePageFeaturedShows.module.css";

const HomePageFeaturedShows = () => {
  return (
    <>
      <section className={classes.container}>
        <h2>Featured Shows</h2>
        <p>
          Discover our standout productions—original shows that reflect our
          mission, entertain with purpose, and spark meaningful conversations.
          Each show is crafted to inform, inspire, and uplift audiences across
          generations.
        </p>

        <Button>Contact Us</Button>

        <div className={classes.shows}>
          {SHOWS.slice(0, 3).map((data) => {
            return <ShowCard {...data} key={data?.title} />;
          })}
        </div>
      </section>
    </>
  );
};

export default HomePageFeaturedShows;
