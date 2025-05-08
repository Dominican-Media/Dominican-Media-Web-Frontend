"use client";

import ArrowRight from "@/assets/SvgIcons/ArrowRight";
import Button from "../Button/Button";
import classes from "./SectionsHero.module.css";

type SectionsHeroTypes = {
  title: string;
  buttontext?: string;
  buttonAction?: () => void;
};

const SectionsHero = ({
  title,
  buttontext,
  buttonAction,
}: SectionsHeroTypes) => {
  return (
    <section className={classes.container}>
      <div className={classes.textSection}>
        <h1>{title}</h1>

        {buttontext && (
          <Button
            onClick={() => {
              if (buttonAction) {
                buttonAction();
              }
            }}
          >
            <span>{buttontext}</span>
            <ArrowRight />
          </Button>
        )}
      </div>
    </section>
  );
};

export default SectionsHero;
