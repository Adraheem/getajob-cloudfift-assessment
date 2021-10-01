import { footerLinks, footerSocials } from "../../../assets/data/footer-links";
import { logoAlt } from "../../../assets/images/brand";
import styles from "../../../styles/modules/layout.module.scss";

const Footer = () => {
  return (
    <footer className="uk-container uk-container-large">
      <div className={styles.footer}>
        <div className="uk-grid-large" data-uk-grid>
          <div className="uk-width-1-4@m uk-width-1-2@s uk-width-1-1">
            <p>
              <img src={logoAlt} alt="Getajobng" className={styles.logo} />
            </p>

            <p className="uk-margin-top uk-text-small">
              Getajobng provides a full online service for anyone looking for a
              new job. We're not a recruitment agency, we're a job site.
            </p>
          </div>
          <div className="uk-width-1-2@s uk-width-1-1">
            <div className="uk-grid-column-small uk-child-width-1-3@m uk-child-width-1-2" data-uk-grid>
              {footerLinks.map((fl, i) => (
                <div key={i}>
                  <h4>{fl.title}</h4>

                  <ul className="uk-nav uk-nav-default uk-text-small">
                    {fl.links.map((flink, idx) => (
                      <li key={idx}>
                        <a href={flink.url}>{flink.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="uk-width-1-4@m uk-width-1-1">
            <h4>Social Media:</h4>

            <div className="uk-grid-small uk-child-width-auto" data-uk-grid>
              {footerSocials.map((social, idx) => (
                <div key={idx}>
                  <a href={social.url} title={social.title}>
                    <img
                      src={social.image}
                      alt={social.title}
                      className={styles.socialIcon}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="uk-text-center uk-margin-large-top">
          <p className="uk-text-meta">
            &copy; Copyright Get-A-Job RMS 2019, All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
