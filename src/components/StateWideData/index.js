import { useEffect, useState } from "react";
import styles from "./index.module.css";

const StateWideData = ({ data, currentCategory, setCurrentCategory }) => {
  const { confirmed, active, recovered, deceased } = data;

  const [triggerType, setTriggerType] = useState("loop");

  useEffect(() => {
    setTimeout(() => {
      setTriggerType("hover");
    }, 1000);
  }, []);

  return (
    <div className={styles.stateWideData}>
      <button
        className={`${styles.confirmed} ${
          currentCategory === "confirmed" && styles.current
        }`}
        onClick={() => {
          setCurrentCategory("confirmed");
        }}
      >
        <p className={styles.name}>Confirmed</p>
        <lord-icon
          className={styles.icon}
          src="https://cdn.lordicon.com/whvrlbbr.json"
          trigger={triggerType}
          colors="primary:#2ca58d,secondary:#ebe6ef"
          style={{ width: "100px", height: "100px", margin: "-10px" }}
        ></lord-icon>
        <p className={styles.value}>{confirmed.toLocaleString("en-IN")}</p>
      </button>

      <button
        className={`${styles.active} ${
          currentCategory === "active" && styles.current
        }`}
        onClick={() => {
          setCurrentCategory("active");
        }}
      >
        <p className={styles.name}>Active</p>
        <lord-icon
          src="https://cdn.lordicon.com/qcargsbo.json"
          trigger={triggerType}
          colors="primary:#3a3347,secondary:#92140c,tertiary:#4bb3fd,quaternary:#ffc738,quinary:#ebe6ef,senary:#646e78"
          style={{ width: "100px", height: "100px", margin: "-10px" }}
        ></lord-icon>
        <p className={styles.value}>{active.toLocaleString("en-IN")}</p>
      </button>

      <button
        className={`${styles.recovered} ${
          currentCategory === "recovered" && styles.current
        }`}
        onClick={() => {
          setCurrentCategory("recovered");
        }}
      >
        <p className={styles.name}>Recovered</p>
        <lord-icon
          className={styles.icon}
          src="https://cdn.lordicon.com/uiaaaqiz.json"
          trigger={triggerType}
          colors="primary:#28a745,secondary:#f9c9c0"
          style={{ width: "100px", height: "100px", margin: "-10px" }}
        ></lord-icon>
        <p className={styles.value}>{recovered.toLocaleString("en-IN")}</p>
      </button>

      <button
        className={`${styles.deceased} ${
          currentCategory === "deceased" && styles.current
        }`}
        onClick={() => {
          setCurrentCategory("deceased");
        }}
      >
        <p className={styles.name}>Deceased</p>
        <lord-icon
          src="https://cdn.lordicon.com/javbdkyp.json"
          trigger={triggerType}
          colors="primary:#3a3347,secondary:#646e78,tertiary:#ebe6ef"
          style={{ width: "100px", height: "100px", margin: "-10px" }}
        ></lord-icon>
        <p className={styles.value}>{deceased.toLocaleString("en-IN")}</p>
      </button>
    </div>
  );
};

export default StateWideData;
