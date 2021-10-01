import { Icon } from "@iconify/react";
import { recommendedJobs } from "../../../assets/data/recommended-jobs";
import JobCard from "../../../components/job";
import styles from "./styles.module.scss";

const RecommendedJobs = () => {
  return (
    <div className={`uk-container uk-container-large  uk-margin-xlarge-bottom`}>
      <h2 className={`uk-text-bold`}>Recommended Jobs</h2>

      <div className="uk-margin-large-top">
        <div
          className={`uk-position-relative uk-visible-toggle ${styles.slider}`}
          tabIndex="-1"
          data-uk-slider="finite: true"
        >
          <ul className={`uk-slider-items ${styles.sliderItems} uk-grid`}>
            {recommendedJobs.map((job, index) => (
              <li key={index}>
                <JobCard {...job} />
              </li>
            ))}
          </ul>

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
        </div>
      </div>
    </div>
  );
};

export default RecommendedJobs;
