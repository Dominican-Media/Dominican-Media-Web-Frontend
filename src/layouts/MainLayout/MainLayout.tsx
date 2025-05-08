"use client";

import Footer from "@/containers/Footer/Footer";
import Header from "@/containers/Header/Header";
import { routeComponents } from "@/utils/routes";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import classes from "./MainLayout.module.css";

type MainLayoutTypes = {
  children: React.ReactNode;
  className?: string;
};

const MainLayout = ({ children, className }: MainLayoutTypes) => {
  // Utils
  const pathname = usePathname();

  // Utils
  const activeRoute = routeComponents.find((data) => data?.route === pathname);

  // Effects
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = `${activeRoute?.title} | Dominican Media`;
    }
  }, [activeRoute]);

  return (
    <main className={`${classes.container}`}>
      <Header />
      <section className={className}>{children}</section>
      <Footer />
    </main>
  );
};

export default MainLayout;
