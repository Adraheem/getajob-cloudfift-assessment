import { howItWorksUsers } from "../../../assets/data/how-it-works";
import { howItWorks } from "../../../assets/images/icons";
import HowItWorksCard from "../../../components/how-it-works";
import styles from "./styles.module.scss";

const HowItWorks = () => {
  return (
    <div className="uk-container uk-container-large uk-margin-xlarge-bottom">
      <div className="uk-grid-large uk-flex-middle" data-uk-grid>
        <div className="uk-width-expand">
          <div className="uk-flex uk-flex-right">
            <div className="uk-width-5-6">
              <div
                className={`uk-child-width-1-2 uk-grid-large ${styles.cardList}`}
                data-uk-grid
              >
                {howItWorksUsers.map((user, idx) => (
                  <div key={idx}>
                    <HowItWorksCard {...user} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="uk-width-2-5">
          <h2 className="uk-text-bold uk-margin-large-bottom">How it works</h2>
          <p>
            Getajob helps you find the right job easily. Getajob helps you find
            the right job easily. Getajob helps you find the right job easily.
          </p>

          <h4 className={styles.hiw}>
            <img src={howItWorks} alt="Check" /> <span>Search Jobs</span>
          </h4>
          <p>
            We have jobs in the most popular industries and with top companies.
            Plus, you can create alerts so you never miss a job opportunity.
          </p>

          <h4>
            <img src={howItWorks} alt="Check" />{" "}
            <span>Create a Profile and Get Noticed</span>
          </h4>
          <p>
            Create a profile to showcase your skills and experience so
            recruiters can find you. Upload your CV so you can apply for jobs
            quickly and easily.
          </p>

          <h4>
            <img src={howItWorks} alt="Check" /> <span>Apply for jobs</span>
          </h4>
          <p>
            Find the training you need to improve your skills, or visit our
            Career Center for tips and advice to build your career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
