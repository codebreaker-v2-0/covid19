import apiStatusConstants from "../constants/api-status-constants";
import Loader from "./Loader";

const renderContent = (apiStatus, renderSuccessView) => {
  switch (apiStatus) {
    case apiStatusConstants.progress:
      return <Loader />;
    case apiStatusConstants.failure:
      return <h1>Failure</h1>;
    default:
      return renderSuccessView();
  }
};

export default renderContent;
