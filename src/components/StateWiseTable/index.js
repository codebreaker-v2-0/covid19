import styles from "./index.module.css";

const StateWiseTable = ({ data }) => (
  <div className={styles.stateWiseTable}>
    <table>
      <thead>
        <tr>
          <th>State</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Recovered</th>
          <th>Deceased</th>
          <th>Population</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => {
          const {
            stateCode,
            stateName,
            confirmed,
            active,
            recovered,
            deceased,
            population,
          } = item;
          return (
            <tr key={stateCode}>
              <td>{stateName}</td>
              <td className={styles.confirmed}>
                {confirmed.toLocaleString("en-IN")}
              </td>
              <td className={styles.active}>
                {active.toLocaleString("en-IN")}
              </td>
              <td className={styles.recovered}>
                {recovered.toLocaleString("en-IN")}
              </td>
              <td className={styles.deceased}>
                {deceased.toLocaleString("en-IN")}
              </td>
              <td className={styles.population}>
                {population.toLocaleString("en-IN")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default StateWiseTable;
