// import styles from "./styles.module.scss";

import { categories } from "../../../assets/data/categories";
import CategoryCard from "../../../components/categoryCard";

const Categories = () => {
  return (
    <div className="uk-container uk-container-large uk-margin-xlarge-bottom">
      <h2 className="uk-text-center uk-text-bold">Popular Categories</h2>

      <div
        className="uk-margin-medium-top uk-grid-small uk-child-width-1-4@m uk-child-width-1-2@s uk-child-width-1-1 uk-grid-match"
        data-uk-grid
      >
        {categories.map((category, idx) => (
          <div key={idx}>
            <CategoryCard {...category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
