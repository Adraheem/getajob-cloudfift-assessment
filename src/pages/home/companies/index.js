import { Icon } from "@iconify/react";
import styles from "./styles.module.scss";
import { brands } from "../../../assets/images/brand";

const Companies = () => {
  return (
    <div
      className={`uk-container uk-container-large uk-margin-xlarge-bottom uk-position-relative ${styles.container}`}
    >
      <div className={styles.bg} />
      <div className={`uk-child-width-1-2@m uk-child-width-1-1 uk-flex-middle ${styles.grid}`} data-uk-grid>
        <div>
          <div className="uk-flex uk-flex-right@m">
            <div className="uk-width-2-3@m uk-width-4-5@s uk-width-1-1">
              <h2 className="uk-text-bold uk-margin-medium-bottom">
                Over 1000+ jobs from top companies in our network
              </h2>
              <p>
                Every day we index millions of jobs directly from employer
                websites. We’re committed to accurate, high-quality jobs so you
                won’t find old, duplicated, or spammy listings here.
              </p>
              <p>
                Organize and automate your job search while at home or on the
                go. We’ll deliver new, relevant jobs of interest straight to
                your inbox.
              </p>

              <p>
                <a href="/" className={styles.learnMoreLink}>
                  <span>Learn More</span> <Icon icon="bi:arrow-right" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="uk-flex uk-flex-right@m uk-flex-center">
            <img src={brands} alt="Brand" className={styles.brandLogos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
