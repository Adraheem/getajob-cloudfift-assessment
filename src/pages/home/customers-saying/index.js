import { Icon } from "@iconify/react";
import { customerFeedback } from "../../../assets/data/customerFeedback";
import CustomerSayingCard from "../../../components/customersSaying";
import styles from "./styles.module.scss";

const CustomersSaying = () => {
  return (
    <div className="uk-container uk-container-large uk-margin-xlarge-bottom">
      <h2 className="uk-width-large uk-text-bold uk-margin-remove-bottom">
        What are our customers saying
      </h2>

      <div>
        <div
          className={`uk-position-relative uk-visible-toggle`}
          tabIndex="-1"
          data-uk-slider="finite: true"
        >
          <div className={styles.arrows}>
            <a
              className={styles.arrowLeft}
              href="/"
              data-uk-slider-item="previous"
            >
              <Icon icon="bi:arrow-left" />
            </a>
            <a
              className={styles.arrowRight}
              href="/"
              data-uk-slider-item="next"
            >
              <Icon icon="bi:arrow-right" />
            </a>
          </div>

          <ul className={`uk-slider-items uk-child-width-1-1 uk-grid`}>
            {customerFeedback.map((feed, idx) => (
              <li key={idx}>
                <CustomerSayingCard {...feed} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomersSaying;
