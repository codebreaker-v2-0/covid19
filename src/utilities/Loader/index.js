import { HashLoader } from "react-spinners";

import styles from "./index.module.css";

const Loader = () => (
  <div className={styles.loader}>
    <HashLoader color="#007BFF" size={80} />;
  </div>
);

export default Loader;
