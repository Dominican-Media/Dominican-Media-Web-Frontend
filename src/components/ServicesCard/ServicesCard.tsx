import Image from "next/image";
import classes from "./ServicesCard.module.css";

type ServicesCardType = {
  image: string;
  title: string;
  caption: string;
};

const ServicesCard = ({ image, title, caption }: ServicesCardType) => {
  return (
    <div className={classes.container}>
      <Image src={image} alt={title} width={610} height={589} />
      <h4>{title}</h4>
      <p>{caption}</p>
    </div>
  );
};

export default ServicesCard;
