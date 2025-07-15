import { IMAGES } from "@/utils/constants";
import { blogItemType, categoriesType } from "@/utils/types";
import Image from "next/image";
import BlogInfoInteractions from "../BlogInfoInteractions/BlogInfoInteractions";
import classes from "./BlogContentText.module.css";

interface Props {
  data: blogItemType;
}

const BlogContentText: React.FC<Props> = ({ data }) => {
  return (
    <section className={classes.container}>
      <Image
        src={(data?.image as string) || IMAGES.LOGO}
        alt={data?.title}
        height={500}
        width={500}
      />

      <div
        className={classes.textSection}
        dangerouslySetInnerHTML={{ __html: data?.content }}
      ></div>

      <BlogInfoInteractions data={data} />
    </section>
  );
};

export default BlogContentText;
