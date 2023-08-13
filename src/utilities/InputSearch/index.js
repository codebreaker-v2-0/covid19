import { BiSearch, BiSolidChevronRightSquare } from "react-icons/bi";

import styles from "./index.module.css";
import statesList from "../../constants/states-list";
import { Link } from "react-router-dom";

const InputSearch = ({ value, onChange }) => {
  const filteredStatesList = statesList.filter((item) =>
    item.stateName.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );

  const renderSearchResults = () => (
    <ul className={styles.searchResults}>
      {filteredStatesList.map((item) => (
        <li key={item.stateCode}>
          <Link to={`/state/${item.stateCode}`}>
            <div className={styles.content}>
              <p>{item.stateName}</p>
              <div className={styles.box}>
                {item.stateCode}

                <BiSolidChevronRightSquare />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className={styles.inputSearch}>
        <BiSearch />
        <input
          value={value}
          onChange={onChange}
          placeholder="Enter the State"
        />
      </div>
      {value && renderSearchResults()}
    </>
  );
};

export default InputSearch;
