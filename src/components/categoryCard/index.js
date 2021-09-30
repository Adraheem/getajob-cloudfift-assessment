import styles from "./styles.module.scss";

const CategoryCard = ({ image, name, description }) => {
  return (
    <div className={`uk-card ${styles.CategoryCard}`}>
      <div className="uk-card-body uk-text-center">
        <div className={styles.image}>
          <img src={image} alt={name} />
        </div>
        <h4 className="uk-margin-remove-bottom uk-margin-top">{name}</h4>
        <p className="uk-text-small uk-margin-remove">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
