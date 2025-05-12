"use client";

import ChevronDown from "@/assets/SvgIcons/ChevronDown";
import External from "@/assets/SvgIcons/External";
import { useState } from "react";
import Button from "../Button/Button";
import classes from "./EpisodesCard.module.css";

type EpisodesCardTypes = {
  title: string;
  description: string;
};

const EpisodesCard = ({ title, description }: EpisodesCardTypes) => {
  // States
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.container}>
      <div
        className={classes.header}
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
      >
        <h4>{title}</h4>
        <ChevronDown />
      </div>

      <div
        style={isOpen ? { maxHeight: "400px" } : { maxHeight: "0px" }}
        className={classes.description}
      >
        <div>
          <p>{description}</p>
          <Button>
            <span>Watch on Youtube</span>
            <External />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EpisodesCard;
