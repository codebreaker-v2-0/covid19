import styles from "./index.module.css";

const BtnTransparent = ({ className, onClick, children }) => (
  <button className={`${styles.btnTransparent} ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default BtnTransparent;
