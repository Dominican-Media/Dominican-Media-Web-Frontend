import classes from "./StatCard.module.css";

type StatCardType = {
  index: number | string;
  title: string;
  paragraph: string;
  backgroundColor?: string;
};

const StatCard = ({
  index,
  title,
  paragraph,
  backgroundColor,
}: StatCardType) => {
  return (
    <div className={classes.container} style={{ backgroundColor }}>
      <h3>{index}</h3>
      <h4>{title}</h4>
      <p>{paragraph}</p>
    </div>
  );
};

export default StatCard;
