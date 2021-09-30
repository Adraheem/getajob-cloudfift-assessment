import { Icon } from "@iconify/react";
import { useState } from "react";
import styles from "./styles.module.scss";

const SearchComponent = () => {
  const [search, setSearch] = useState({ keyword: "", location: "" });

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(JSON.stringify(search));
  };

  return (
    <div
      className={`uk-width-5-6 uk-margin-medium-top uk-margin-medium-bottom ${styles.searchBox}`}
    >
      <form className="uk-height-1-1" onSubmit={handleSubmit}>
        <div
          className="uk-grid-collapse uk-height-1-1 uk-grid-match"
          data-uk-grid
        >
          <div className="uk-width-1-2 uk-height-1-1">
            <input
              type="text"
              name="keyword"
              value={search.keyword}
              onChange={handleChange}
              placeholder="Enter keywords, skill, interest"
              className={`uk-input uk-height-1-1 ${styles.searchInput}`}
            />
          </div>
          <div className="uk-width-expand">
            <div className="uk-position-relative">
              <div className={styles.locationIcon}>
                <Icon icon="bytesize:location" />
              </div>
              <input
                type="text"
                placeholder="Location"
                name="location"
                value={search.location}
                onChange={handleChange}
                className={`uk-input uk-height-1-1 ${styles.searchInput} ${styles.searchLocation}`}
              />
            </div>
          </div>
          <div className="uk-width-auto">
            <button
              type="submit"
              className={`uk-button uk-button-primary ${styles.searchButton}`}
            >
              <Icon icon="eva:search-fill" fontSize="1.5rem" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
