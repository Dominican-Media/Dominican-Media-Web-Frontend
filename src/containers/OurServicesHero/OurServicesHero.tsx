import Button from "@/components/Button/Button";
import { ArrowRight } from "@mui/icons-material";
import classes from "./OurServicesHero.module.css";

const OurServicesHero = () => {
  return (
    <section className={classes.container}>
      <div className={classes.textSection}>
        <h1>Your Vision Realized Through a Dominican Perspective</h1>

        <Button>
          <span>Explore Sevrices</span>
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
};

export default OurServicesHero;
