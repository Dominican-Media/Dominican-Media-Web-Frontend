"use client";

import ArrowRight from "@/assets/SvgIcons/ArrowRight";
import Button from "@/components/Button/Button";
import { IMAGES } from "@/utils/constants";
import Image from "next/image";
import classes from "./HomePageHero.module.css";

const HomePageHero = () => {
  return (
    <section className={classes.container}>
      <div className={classes.textSection}>
        <h1>Where Artistry and Moral Wisdom Entwine</h1>
        <p>
          Blending cinematic excellence with profound spiritual insights from
          the heart of Dominican teachings. Immersive storytelling that kindles
          the desire for truth, virtue, and deeper self-awareness.
        </p>

        <Button>
          <span>Explore Sevrices</span>
          <ArrowRight />
        </Button>
      </div>

      {/* TODO: Tell Padre to share Images that fit */}

      <div className={classes.imageSection}>
        <div>
          <div>
            <Image
              src={IMAGES.LANDING1}
              alt="Landing page image 1"
              width={236}
              height={236}
            />
            <Image
              src={IMAGES.LANDING2}
              alt="Landing page image 2"
              width={236}
              height={236}
            />
          </div>

          <div>
            <Image
              src={IMAGES.LANDING3}
              alt="Landing page image 3"
              width={491}
              height={236}
            />
          </div>
        </div>

        <div>
          <div>
            <Image
              src={IMAGES.LANDING4}
              alt="Landing page image 4"
              width={491}
              height={488}
            />
          </div>
          <div>
            <Image
              src={IMAGES.LANDING5}
              alt="Landing page image 5"
              width={236}
              height={236}
            />

            <Image
              src={IMAGES.LANDING5}
              alt="Landing page image 5"
              width={236}
              height={236}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
