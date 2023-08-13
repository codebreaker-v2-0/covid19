import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

import styles from "./index.module.css";

function RootLayout() {
  return (
    <div className={styles.root}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
