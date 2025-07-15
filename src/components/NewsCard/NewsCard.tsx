"use client";

import ArrowRight from "@/assets/SvgIcons/ArrowRight";
import { IMAGES } from "@/utils/constants";
import { routes } from "@/utils/routes";
import { blogItemType, categoriesType } from "@/utils/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import classes from "./NewsCard.module.css";

type NewsCardTypes = {
  data: blogItemType;
  categories: categoriesType[];
};

const NewsCard = ({ data, categories }: NewsCardTypes) => {
  // Router
  const router = useRouter();

  return (
    <div
      className={classes.container}
      onClick={() => {
        router.push(`${routes.BLOG}/${data?.slug}`);
      }}
    >
      <Image
        height={280}
        width={418}
        src={(data?.image as string) || IMAGES.LOGO}
        alt={data?.title}
      />
      <div className={classes.textSection}>
        <h4>{data?.title}</h4>
        <p>{data?.description}</p>
      </div>

      <div className={classes.categoryAndAction}>
        <div className={classes.categories}>
          {data?.category?.slice(0, 2)?.map((data) => {
            const categoryTitle = categories?.find(
              (category) => category?._id === data
            )?.title;
            return <p>{categoryTitle}</p>;
          })}
          {data?.category?.length > 2 && (
            <p>+ {data?.category?.length - 2} more</p>
          )}
        </div>
        <Button
          type="null"
          onClick={() => {
            router.push(`${routes.BLOG}/${data?.slug}`);
          }}
        >
          <ArrowRight fill="#000" />
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
