import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { BiPlusMedical } from "react-icons/bi";
import { GiHeartBeats } from "react-icons/gi";
import { IoSkull } from "react-icons/io5";

import styles from "./index.module.css";

const CountryWideData = ({ data }) => {
  const { confirmed, active, recovered, deceased } = data;

  return (
    <ul className={styles.countryWideData}>
      <li className={styles.confirmed}>
        <p className={styles.name}>Confirmed</p>
        <IoCheckmarkDoneCircle className={styles.icon} />
        <p className={styles.value}>{confirmed.toLocaleString("en-IN")}</p>
      </li>

      <li className={styles.active}>
        <p className={styles.name}>Active</p>
        <BiPlusMedical className={styles.icon} />
        <p className={styles.value}>{active.toLocaleString("en-IN")}</p>
      </li>

      <li className={styles.recovered}>
        <p className={styles.name}>Recovered</p>
        <GiHeartBeats className={styles.icon} />
        <p className={styles.value}>{recovered.toLocaleString("en-IN")}</p>
      </li>

      <li className={styles.deceased}>
        <p className={styles.name}>Deceased</p>
        <IoSkull className={styles.icon} />
        <p className={styles.value}>{deceased.toLocaleString("en-IN")}</p>
      </li>
    </ul>
  );
};

export default CountryWideData;
