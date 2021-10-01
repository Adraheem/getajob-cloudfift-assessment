import styles from "./styles.module.scss";

const HowItWorksCard = ({ role, company, image }) => {
  return (
    <div className={`uk-card ${styles.card}`}>
      <div className={styles.image}>
        <img src={image} alt={role} />
      </div>
      <div className={`uk-card-body ${styles.body}`}>
        <p>
          {role} <span className="uk-text-primary">@ {company}</span>
        </p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
