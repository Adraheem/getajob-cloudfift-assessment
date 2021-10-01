import styles from "./styles.module.scss";

const CustomerSayingCard = ({ name, role, feedback, image }) => {
  return (
    <div className="uk-grid-large uk-flex-middle" data-uk-grid>
      <div className="uk-width-1-4@m uk-width-1-3@s uk-width-5-6">
        <div className={styles.cust}>
          <div className={styles.customer}>
            <div>
              <img src={image} alt="Customer" />
            </div>
          </div>
        </div>
      </div>
      <div className="uk-width-3-4@m uk-width-2-3@s uk-width-1-1">
        <div className={`uk-width-5-6@s uk-width-1-1 ${styles.customerText}`}>
          <p>{feedback}</p>
        </div>

        <h5 className="uk-margin-remove-bottom">{name}</h5>
        <p className="uk-margin-remove-top uk-text-muted">{role}</p>
      </div>
    </div>
  );
};

export default CustomerSayingCard;
