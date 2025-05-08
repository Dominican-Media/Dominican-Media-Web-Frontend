import MainLayout from "@/layouts/MainLayout/MainLayout";
import BlogContentInfo from "../BlogContentInfo/BlogContentInfo";
import BlogContentText from "../BlogContentText/BlogContentText";
import classes from "./BlogContent.module.css";

const BlogContent = () => {
  return (
    <MainLayout className={classes.container}>
      <BlogContentInfo />
      <BlogContentText />
    </MainLayout>
  );
};

export default BlogContent;
