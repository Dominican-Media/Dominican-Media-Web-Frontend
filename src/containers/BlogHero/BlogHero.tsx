"use client";

import ArrowRight from "@/assets/SvgIcons/ArrowRight";
import Button from "@/components/Button/Button";
import { capitalize } from "@/helpers/capitalize";
import { IMAGES } from "@/utils/constants";
import { routes } from "@/utils/routes";
import { blogItemType, categoriesType } from "@/utils/types";
import { useRouter } from "next/navigation";
import classes from "./BlogHero.module.css";

interface Props {
  data: blogItemType;
  categories: categoriesType[];
}

const BlogHero: React.FC<Props> = ({ data, categories }) => {
  // Router
  const router = useRouter();

  return (
    <section
      className={classes.container}
      style={{ backgroundImage: `url(${data?.image || IMAGES.LOGO})` }}
    >
      <div className={classes.gradient}></div>
      <div className={classes.textSection}>
        <p>
          {data?.category?.map((data) => {
            const categoryTitle = categories?.find(
              (category) => category?._id === data
            )?.title;

            return <span>{capitalize(categoryTitle as string)} | </span>;
          })}
          <span>Featured</span>
        </p>
        <h1>{data?.title}</h1>
        <p>{data?.description}</p>

        <Button
          type="secondary"
          onClick={() => {
            router.push(`${routes.BLOG}/${data?.slug}`);
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
