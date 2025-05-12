import ArrowRight from "@/assets/SvgIcons/ArrowRight";
import { IMAGES } from "@/utils/constants";
import { Facebook, Instagram, Mail, Phone, YouTube } from "@mui/icons-material";
import Image from "next/image";
import classes from "../ShowDetailModalBody/ShowDetailModalBody.module.css";

type UserInfoModalBodyType = {
  onClose: () => void;
  onReturn?: () => void;
};

const UserInfoModalBody = ({ onClose, onReturn }: UserInfoModalBodyType) => {
  return (
    <div className={classes.container}>
      <div className={classes.back}>
        <ArrowRight
          onClick={() => {
            if (onReturn) {
              onReturn();
            }
          }}
        />
      </div>

      <div className={classes.videoIframe}>
        <Image
          src={IMAGES.KNOW_YOUR_FAITH}
          alt="User Name"
          height={400}
          width={400}
        />

        <div className={classes.gradient}></div>
        <div className={classes.textSection}>
          <h2>Title</h2>
          <p>Caption</p>
        </div>
      </div>

      <div className={classes.body}>
        <div className={classes.description}>
          <h4>Brief Intor</h4>
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
          <h4>Contact</h4>

          <div className={classes.seasons}>
            <a>
              <Mail />
            </a>

            <a>
              <Phone />
            </a>
          </div>
        </div>

        <div className={classes.description}>
          <h4>Socials</h4>

          <div className={classes.seasons}>
            <a>
              <Facebook />
            </a>

            <a>
              <Instagram />
            </a>

            <a>
              <YouTube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoModalBody;
