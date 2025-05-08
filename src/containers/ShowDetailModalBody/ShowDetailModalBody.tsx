import Comment from "@/assets/SvgIcons/Comment";
import Like from "@/assets/SvgIcons/Like";
import Button from "@/components/Button/Button";
import { IMAGES } from "@/utils/constants";
import { PlayArrow } from "@mui/icons-material";
import Image from "next/image";
import classes from "./ShowDetailModalBody.module.css";

const ShowDetailModalBody = () => {
  return (
    <div className={classes.container}>
      <div className={classes.videoIframe}>
        <Image
          src={IMAGES.KNOW_YOUR_FAITH}
          alt="Show Name"
          height={400}
          width={400}
        />

        <div className={classes.gradient}></div>
        <div className={classes.textSection}>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, nisi autem amet dicta doloribus quam nulla illum soluta
            deserunt harum minus similique voluptatem dolore expedita
            voluptatibus? Sequi nihil veniam quae provident ad molestiae earum,
            vero quia odit, fugit iure illo corrupti exercitationem eius aut.
            Placeat numquam voluptatibus eligendi non totam.
          </p>
          <Button>
            <PlayArrow />
            <span>Watch on youtube</span>
          </Button>
        </div>
      </div>

      <div className={classes.body}>
        <div className={classes.description}>
          <h4>Description</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, quisquam. Officia mollitia libero pariatur atque enim
            asperiores rem porro illo error! Nisi mollitia eos officiis a
            doloremque nam pariatur, rem quo corporis numquam quos sed facilis.
            Atque id sint quibusdam soluta ipsa tenetur nobis quos fugit
            cupiditate asperiores, voluptatibus quisquam!
          </p>
        </div>

        <div className={classes.description}>
          <h4>Most Recent Release Date</h4>
          <p>8th May, 2025</p>
        </div>

        <div className={classes.description}>
          <h4>Seasons</h4>
        </div>

        <div className={classes.description}>
          <h4>Episodes</h4>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailModalBody;
