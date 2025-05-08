import Button from "@/components/Button/Button";
import Logo from "@/components/Logo/Logo";
import { IMAGES } from "@/utils/constants";
import { routeComponents } from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "./Header.module.css";

const Header = () => {
  // Utils
  const headerRoutes = routeComponents.filter((data) =>
    data?.properties?.includes("isHeaderRoute")
  );

  // Router
  const pathname = usePathname();

  // States
  const [navBackground, setNavBackground] = useState("transparent");

  const handleScroll = () => {
    if (typeof window === "undefined") {
      return;
    }

    const currentScrollY = window?.scrollY as number;

    if ((currentScrollY as number) > 200) {
      setNavBackground("#ffffff");
    } else {
      setNavBackground("transparent");
    }
  };

  // Effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={classes.container}
      style={{ backgroundColor: navBackground }}
    >
      <Logo />

      <nav>
        {headerRoutes.map((data) => {
          return (
            <Link
              href={data?.route}
              key={data?.route}
              className={
                pathname.includes(data?.route)
                  ? classes.active
                  : classes.inActive
              }
            >
              {data?.title}
            </Link>
          );
        })}
      </nav>

      <Button>Contact Us</Button>
    </header>
  );
};

export default Header;
