import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

import styles from "./index.module.css";

const Footer = () => (
  <div className={styles.footer}>
    <h3>
      <span className={styles.logo1}>COVID</span>
      <span className={styles.logo2}>INDIA</span>
    </h3>
    <p>We stand with everyone fighting on the front lines</p>
    <div className={styles.iconsContainer}>
      <AiFillGithub className={styles.icon} />
      <AiFillInstagram className={styles.icon} />
      <AiFillTwitterCircle className={styles.icon} />
    </div>
  </div>
);

export default Footer;
