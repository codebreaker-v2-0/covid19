import { useEffect, useState } from "react";

import InputSearch from "../../utilities/InputSearch";

import styles from "./index.module.css";
import apiStatusConstants from "../../constants/api-status-constants";
import statesList from "../../constants/states-list";
import StateWiseTable from "../../components/StateWiseTable";
import CountryWideData from "../../components/CountryWideData";
import Footer from "../../components/Footer";
import renderContent from "../../utilities/render-content";

let statesData = [];
let countryData = {};

const Home = () => {
  // State: API Status
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.progress);

  // State: Search Input
  const [searchInput, setSearchInput] = useState("");
  const updateSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  // Function: Fetch Data
  const fetchData = async () => {
    setApiStatus(apiStatusConstants.progress);

    const response = await fetch(
      "https://apis.ccbp.in/covid19-state-wise-data"
    );

    if (response.ok) {
      const fetchedData = await response.json();

      statesData = statesList.map((item) => {
        const { stateCode, stateName } = item;
        const { population } = fetchedData[stateCode].meta;
        const { confirmed, recovered, deceased } = fetchedData[stateCode].total;
        return {
          stateCode,
          stateName,
          population,
          confirmed,
          recovered,
          deceased,
          active: confirmed - recovered - deceased,
        };
      });

      let confirmed = 0;
      let active = 0;
      let recovered = 0;
      let deceased = 0;

      statesData.forEach((item) => {
        confirmed += item.confirmed;
        active += item.active;
        recovered += item.recovered;
        deceased += item.deceased;
      });

      countryData = {
        confirmed,
        active,
        recovered,
        deceased,
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
    return (
      <>
        {/* Input: Search */}
        <InputSearch value={searchInput} onChange={updateSearchInput} />

        {!searchInput && (
          <>
            <CountryWideData data={countryData} />
            <StateWiseTable data={statesData} />
            <Footer />
          </>
        )}
      </>
    );
  };

  return (
    <div className={styles.home}>
      {renderContent(apiStatus, renderSuccessView)}
    </div>
  );
};

export default Home;
