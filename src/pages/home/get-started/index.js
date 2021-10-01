import styles from "./styles.module.scss";

const GetStarted = () => {
  return (
    <div className="uk-container uk-container-large uk-margin-xlarge-bottom">
      <div className={`uk-flex uk-flex-right ${styles.getStarted}`}>
        <div className="uk-width-2-3">
          <h1 className="uk-text-bold uk-margin-remove-bottom">
            Get a Job you actually like
          </h1>
          <p className="uk-margin-remove-top">
            Create an account and start applying
          </p>
          <p>
            <button className="uk-button uk-button-primary uk-button-large border-rounded uk-width-medium">
              Get started
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
