import { Icon } from "@iconify/react";
import styles from "./styles.module.scss";

const JobCard = ({ role, image, type, company, location }) => {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <div className="uk-flex uk-flex-right">
          <button className="uk-button uk-button-small border-rounded">
            {type}
          </button>
        </div>
        <div className={styles.logo}>
          <img src={image} alt="Paystack" />
        </div>
        <h4 className="uk-text-center uk-margin-top">{role}</h4>
      </div>
      <div className={styles.footer}>
        <p
          className="uk-margin-small-bottom"
          style={{ fontWeight: 500 }}
        >
          {company}
        </p>
        <div className="uk-grid-small" data-uk-grid>
          <div className="uk-width-expand">
            <p className="uk-text-small">
              <Icon icon="cil:location-pin" inline={true} /> {location}
            </p>
          </div>
          <div className="uk-width-auto">
            <button className="uk-button uk-button-primary uk-button-small border-rounded">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
