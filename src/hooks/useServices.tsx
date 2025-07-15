import useGetHook from "./useGetHook";

export const useServices = () => {
  return useGetHook("/services");
};
