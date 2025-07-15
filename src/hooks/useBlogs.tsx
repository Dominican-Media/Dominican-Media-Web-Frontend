import useGetHook from "./useGetHook";

export const useBlogs = () => {
  return useGetHook("/blogs/user");
};

export const useBlogCategories = () => {
  return useGetHook("/blogs/category/get-categories");
};

export const useBlogsById = (slug: string) => {
  const url = slug ? `/blogs/${slug}` : null;
  return useGetHook(url);
};

export const useBlogsComments = (slug: string) => {
  const url = slug ? `/blogs/comments/${slug}` : null;
  return useGetHook(url);
};
