import Image from "next/image";
import classes from "./SmallUserCard.module.css";

type SmallUserCardType = {
  name: string;
  image: string;
  onClick?: () => void;
};

const SmallUserCard = ({ name, image, onClick }: SmallUserCardType) => {
  return (
    <div
      className={classes.container}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      <Image src={image} alt={name} height={90} width={90} />
      <p>{name}</p>
    </div>
  );
};

export default SmallUserCard;
