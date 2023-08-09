import { BiSearch } from "react-icons/bi";

import styles from "./index.module.css";

const InputSearch = ({ value, onChange }) => (
  <div className={styles.inputSearch}>
    <BiSearch />
    <input value={value} onChange={onChange} placeholder="Enter the State" />
  </div>
);

export default InputSearch;
