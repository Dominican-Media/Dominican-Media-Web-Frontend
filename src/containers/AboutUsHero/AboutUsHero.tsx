import Button from "@/components/Button/Button";
import { IMAGES } from "@/utils/constants";
import Image from "next/image";
import classes from "./AboutUsHero.module.css";

const AboutUsHero = () => {
  return (
    <section className={classes.container}>
      <div>
        <h1>
          We create content that entertains and educates people on moral and
          social issues
        </h1>
        <Button>Contact Us</Button>
      </div>

      <Image src={IMAGES.ABOUT_US} alt="About Us" height={500} width={1000} />
    </section>
  );
};

export default AboutUsHero;
