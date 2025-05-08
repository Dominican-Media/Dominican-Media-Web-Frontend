import Mail from "@/assets/SvgIcons/Mail";
import Phone from "@/assets/SvgIcons/Phone";
import Logo from "@/components/Logo/Logo";
import { routeComponents } from "@/utils/routes";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  // Utils
  const footerRoutes = routeComponents.filter((data) =>
    data?.properties?.includes("isFooterRoute")
  );

  return (
    <footer className={classes.container}>
      <div>
        <Logo />
        <p>© 2024 Dominican media.</p>

        <a href="tel:+2348037921511">
          <Phone />
          <span>+234 803 792 1511</span>
        </a>

        <a href="mailto:opmediang@gmail.com">
          <Mail />
          <span>opmediang@gmail.com</span>
        </a>
        <div>
          <a href="#0">
            <Facebook />
          </a>

          <a href="#0">
            <Instagram />
          </a>

          <a href="#0">
            <Twitter />
          </a>
        </div>
      </div>

      <div>
        <h4>Company</h4>
        {footerRoutes
          .filter((data) => data?.properties?.includes("footerCompany"))
          .map((data) => {
            return (
              <Link href={data?.route} key={data?.route}>
                {data?.title}
              </Link>
            );
          })}
      </div>

      <div>
        <h4>Support</h4>
        {footerRoutes
          .filter((data) => data?.properties?.includes("footerSupport"))
          .map((data) => {
            return (
              <Link href={data?.route} key={data?.route}>
                {data?.title}
              </Link>
            );
          })}
      </div>

      <div>
        <h4>Policies</h4>
        {footerRoutes
          .filter((data) => data?.properties?.includes("footerPolicies"))
          .map((data) => {
            return (
              <Link href={data?.route} key={data?.route}>
                {data?.title}
              </Link>
            );
          })}
      </div>
    </footer>
  );
};

export default Footer;
