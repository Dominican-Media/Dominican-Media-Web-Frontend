"use client";

import Modal from "@/components/Modal/Modal";
import Footer from "@/containers/Footer/Footer";
import Header from "@/containers/Header/Header";
import ShowDetailModalBody from "@/containers/ShowDetailModalBody/ShowDetailModalBody";
import UserInfoModalBody from "@/containers/UserInfoModalBody/UserInfoModalBody";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { routeComponents } from "@/utils/routes";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import classes from "./MainLayout.module.css";

type MainLayoutTypes = {
  children: React.ReactNode;
  className?: string;
};

const MainLayout = ({ children, className }: MainLayoutTypes) => {
  // Hooks
  const { updateSearchParams, updateConcurrentSearchParams } =
    useUpdateSearchParams();

  // Router
  const pathname = usePathname();
  const showId = updateSearchParams("show", undefined, "get");
  const userId = updateSearchParams("user", undefined, "get");

  // Utils
  const activeRoute = routeComponents.find((data) => data?.route === pathname);

  // Effects
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = `${activeRoute?.title} | Dominican Media`;
    }
  }, [activeRoute]);

  return (
    <>
      {showId && (
        <Modal
          body={
            <ShowDetailModalBody
              onClose={() => {
                updateSearchParams("show", undefined, "delete");
              }}
              onOpenUser={() => {
                updateConcurrentSearchParams({
                  user: { method: "set", value: "tobe" },
                  show: { method: "delete" },
                });
              }}
            />
          }
          onClick={() => {
            updateSearchParams("show", undefined, "delete");
          }}
        />
      )}

      {userId && (
        <Modal
          body={
            <UserInfoModalBody
              onClose={() => {
                updateSearchParams("user", undefined, "delete");
              }}
              onReturn={() => {
                updateConcurrentSearchParams({
                  show: { method: "set", value: "1" },
                  user: { method: "delete" },
                });
              }}
            />
          }
          onClick={() => {
            updateSearchParams("user", undefined, "delete");
          }}
        />
      )}
      <main className={`${classes.container}`}>
        <Header />
        <section className={className}>{children}</section>
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
