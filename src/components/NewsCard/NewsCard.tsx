"use client";

import ArrowRight from "@/assets/SvgIcons/ArrowRight";
import { routes } from "@/utils/routes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import classes from "./NewsCard.module.css";

type NewsCardTypes = {
  image: string;
  title: string;
  caption: string;
  category: string;
};

const NewsCard = ({ image, title, caption, category }: NewsCardTypes) => {
  // Router
  const router = useRouter();

  return (
    <div
      className={classes.container}
      onClick={() => {
        router.push(`${routes.BLOG}/1`);
      }}
    >
      <Image height={280} width={418} src={image} alt={title} />
      <div className={classes.textSection}>
        <h4>{title}</h4>
        <p>{caption}</p>
      </div>

      <div className={classes.categoryAndAction}>
        <p>{category}</p>
        <Button
          type="null"
          onClick={() => {
            router.push(`${routes.BLOG}/1`);
          }}
        >
          <ArrowRight fill="#000" />
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
