import Loader from "@/components/Loader/Loader";
import NewsCard from "@/components/NewsCard/NewsCard";
import { NEWS } from "@/utils/constants";
import { blogItemType, categoriesType } from "@/utils/types";
import classes from "./HomePageLatestNews.module.css";

type HomePageLatestNewsTypes = {
  title?: string;
  data: blogItemType[];
  categories: categoriesType[];
  loading?: boolean;
};

const HomePageLatestNews = ({
  title,
  data,
  categories,
  loading,
}: HomePageLatestNewsTypes) => {
  return (
    <section className={classes.container}>
      <h2>{title || "Blogs"}</h2>

      <div className={classes.news}>
        {loading ? (
          <Loader />
        ) : (
          data?.map((data, i) => {
            return <NewsCard key={i} data={data} categories={categories} />;
          })
        )}
      </div>
    </section>
  );
};

export default HomePageLatestNews;
