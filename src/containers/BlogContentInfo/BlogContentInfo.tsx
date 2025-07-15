import { blogItemType, categoriesType } from "@/utils/types";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import classes from "./BlogContentInfo.module.css";
import moment from "moment";
import { capitalize } from "@mui/material";
import { capitalizeEachWord } from "@/helpers/capitalize";

interface Props {
  data: blogItemType;
  categories: categoriesType[];
}

const BlogContentInfo: React.FC<Props> = ({ data, categories }) => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <p>
          {data?.category?.map((categoryId, i) => {
            const categoryTitle = categories?.find(
              (category) => category?._id === categoryId
            )?.title;

            if (i === data?.category?.length - 1) {
              return (
                <span key={i}>{capitalize(categoryTitle as string)} </span>
              );
            }

            return (
              <span key={i}>
                {capitalize((categoryTitle as string) || "")} |{" "}
              </span>
            );
          })}
        </p>
        <h2>{data?.title}</h2>
        <p>{data?.description}</p>
      </div>

      <div>
        <h4>Text by</h4>
        <p>
          {capitalizeEachWord(
            `${data?.user?.lastName || ""} ${data?.user?.firstName || ""}`
          )}
        </p>
      </div>

      <div>
        <h4>Posted</h4>
        <p>{moment(data?.createdAt).format("Do MMM, YYYY")}</p>
      </div>

      <div>
        {data?.facebookUrl && (
          <a href={data?.facebookUrl} target="_blank" rel="noreferer">
            <Facebook />
          </a>
        )}

        {data?.instagramUrl && (
          <a href={data?.instagramUrl} target="_blank" rel="noreferer">
            <Instagram />
          </a>
        )}

        {data?.xUrl && (
          <a href={data?.xUrl} target="_blank" rel="noreferer">
            <Twitter />
          </a>
        )}
      </div>
    </section>
  );
};

export default BlogContentInfo;
