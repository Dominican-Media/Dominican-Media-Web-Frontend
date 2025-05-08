type ArrowRightTypes = {
  fill?: string;
};

const ArrowRight = ({ fill }: ArrowRightTypes) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      viewBox="0 -960 960 960"
      width="20px"
      fill={fill || "#e8eaed"}
    >
      <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
    </svg>
  );
};

export default ArrowRight;
