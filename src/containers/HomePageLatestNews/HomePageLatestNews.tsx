import NewsCard from "@/components/NewsCard/NewsCard";
import { NEWS } from "@/utils/constants";
import classes from "./HomePageLatestNews.module.css";

type HomePageLatestNewsTypes = {
  title?: string;
};

const HomePageLatestNews = ({ title }: HomePageLatestNewsTypes) => {
  return (
    <section className={classes.container}>
      <h2>{title || "Latest news"}</h2>

      <div className={classes.news}>
        {NEWS.map((data, i) => {
          return <NewsCard key={i} {...data} />;
        })}
      </div>
    </section>
  );
};

export default HomePageLatestNews;
