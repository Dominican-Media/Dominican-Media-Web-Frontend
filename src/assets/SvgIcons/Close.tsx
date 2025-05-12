type CloseTypes = {
  onClick?: () => void;
};

const Close = ({ onClick }: CloseTypes) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      viewBox="0 -960 960 960"
      width="20px"
      fill="#e8eaed"
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  );
};

export default Close;
