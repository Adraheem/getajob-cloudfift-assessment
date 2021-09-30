import { google, kpmg, paystack } from "../../../assets/images/brand";
import { heroRectangle, topMan } from "../../../assets/images/pictures";
import SearchComponent from "../../../components/search";
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <div className={`uk-container uk-container-large ${styles.hero}`}>
      <img src={heroRectangle} alt="rect" className={styles.heroBg} />

      <div
        className="uk-grid-large uk-child-width-1-2 uk-flex-middle"
        data-uk-grid
      >
        <div>
          <h1 className={`uk-text-bold ${styles.heroText}`}>
            Find a <span className="uk-text-primary">job</span> easily
          </h1>
          <p className="uk-width-large">
            With verified, up-to-date job listings directly from employer
            websites, we create a premium experience for job seekers, employers,
            and data seekers alike.
          </p>

          <SearchComponent />

          <p>Trusted by:</p>
          <div
            className="uk-grid uk-child-width-auto uk-flex-middle"
            data-uk-grid
          >
            <div>
              <img
                src={paystack}
                alt="Paystack"
                className={styles.trustedBrand}
              />
            </div>
            <div>
              <img
                src={google}
                alt="Paystack"
                className={styles.trustedBrand}
              />
            </div>
            <div>
              <img src={kpmg} alt="Paystack" className={styles.trustedBrand} />
            </div>
          </div>
        </div>
        <div>
          <div className={`uk-width-xlarge ${styles.heroImg}`}>
            <div>
              <img src={topMan} alt="Find a job easily" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
