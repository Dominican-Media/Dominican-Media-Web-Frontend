"use client";

import ArrowRight from "@/assets/SvgIcons/ArrowRight";
import Button from "@/components/Button/Button";
import { IMAGES } from "@/utils/constants";
import { routes } from "@/utils/routes";
import { useRouter } from "next/navigation";
import classes from "./BlogHero.module.css";

const BlogHero = () => {
  // Router
  const router = useRouter();

  return (
    <section
      className={classes.container}
      style={{ backgroundImage: `url(${IMAGES.FEATURED_BLOG})` }}
    >
      <div className={classes.gradient}></div>
      <div className={classes.textSection}>
        <p>
          Stories | <span>Featured</span>
        </p>
        <h1>Breitling unveils Endurance Pro sports watch</h1>
        <p>
          When you want to make a sports performance watch, ask a German
          triathlete.
        </p>

        <Button
          type="secondary"
          onClick={() => {
            router.push(`${routes.BLOG}/1`);
          }}
        >
          <span>Read more</span>
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
};

export default BlogHero;
