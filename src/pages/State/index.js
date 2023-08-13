import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./index.module.css";
import apiStatusConstants from "../../constants/api-status-constants";
import statesList from "../../constants/states-list";
import Footer from "../../components/Footer";
import renderContent from "../../utilities/render-content";
import StateWideData from "../../components/StateWideData";

let districtsData = [];
let stateData = {};

const State = () => {
  const params = useParams();

  // State: API Status
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.progress);
  const [currentCategory, setCurrentCategory] = useState("confirmed");

  // Function: Fetch Data
  const fetchData = async () => {
    setApiStatus(apiStatusConstants.progress);

    const response = await fetch(
      "https://apis.ccbp.in/covid19-state-wise-data"
    );

    if (response.ok) {
      const fetchedData = await response.json();

      const stateItem = fetchedData[params.stateId];

      districtsData = Object.entries(stateItem.districts).map(
        ([key, value]) => {
          const { total } = value;
          const confirmed = total.confirmed || 0;
          const deceased = total.deceased || 0;
          const recovered = total.recovered || 0;
          return {
            districtName: key,
            confirmed,
            deceased,
            recovered,
            active: confirmed - deceased - recovered,
          };
        }
      );

      const { stateName, imgUrl } = statesList.find(
        (item) => item.stateCode === params.stateId
      );
      const stateTotal = stateItem.total;
      const lastUpdated = new Date(
        stateItem.meta.last_updated
      ).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      const { population } = stateItem.meta;
      const confirmed = stateTotal.confirmed || 0;
      const deceased = stateTotal.deceased || 0;
      const recovered = stateTotal.recovered || 0;

      stateData = {
        stateName,
        imgUrl,
        lastUpdated,
        population: population.toLocaleString("en-IN"),
        confirmed,
        deceased,
        recovered,
        tested: stateTotal.tested.toLocaleString("en-IN"),
        active: confirmed - recovered - deceased,
      };

      setApiStatus(apiStatusConstants.success);
    } else setApiStatus(apiStatusConstants.failure);
  };

  // React Hook: useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // Function: Render Success View
  const renderSuccessView = () => {
    const { stateName, tested, lastUpdated, imgUrl, population } = stateData;
    const sortedList = districtsData.sort((a, b) => {
      if (a[currentCategory] > b[currentCategory]) return -1;
      if (a[currentCategory] < b[currentCategory]) return 1;
      return 0;
    });

    return (
      <>
        {/* State Details */}
        <div className={styles.stateDetails}>
          <div>
            <h3>{stateName}</h3>
            <p>{lastUpdated}.</p>
          </div>
          <div>
            <p>Tested</p>
            <p className={styles.value}>{tested}</p>
          </div>
        </div>

        {/* State Wide Data */}
        <StateWideData
          data={stateData}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />

        {/* State Location */}
        <img alt="state-location" src={imgUrl} />

        <div className={styles.ncpReport}>
          <h3>NCP Report</h3>
          <div>
            <div>
              <p>Population</p>
              <p>{population}</p>
            </div>
            <div>
              <p>Tested</p>
              <p>{tested}</p>
            </div>
          </div>
        </div>

        <div className={styles.topDistricts}>
          <h3 className={styles[currentCategory]}>Top Districts</h3>
          <ul>
            {sortedList.map((item) => (
              <li key={item.districtName}>
                <span>{item[currentCategory].toLocaleString("en-IN")}</span>
                <span>{item.districtName}</span>
              </li>
            ))}
          </ul>
        </div>

        <Footer />
      </>
    );
  };

  return (
    <div className={styles.state}>
      {renderContent(apiStatus, renderSuccessView)}
    </div>
  );
};

export default State;
