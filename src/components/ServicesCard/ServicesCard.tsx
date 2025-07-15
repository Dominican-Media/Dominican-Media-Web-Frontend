import { serviceType } from "@/utils/types";
import Image from "next/image";
import classes from "./ServicesCard.module.css";

type ServicesCardType = {
  data: serviceType;
};

const ServicesCard = ({ data }: ServicesCardType) => {
  return (
    <div className={classes.container}>
      <Image src={data?.image} alt={data?.title} width={610} height={589} />
      <h4>{data?.title}</h4>
      <p>{data?.description}</p>
    </div>
  );
};

export default ServicesCard;
