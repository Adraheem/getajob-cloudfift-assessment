import { headerNav } from "../../../assets/data/header-nav";
import { logo } from "../../../assets/images/brand";
import styles from "../../../styles/modules/layout.module.scss";

const Header = () => {
  return (
    <header className="uk-container uk-container-large uk-margin-small-top">
      <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
        <div className="uk-navbar-left">
          <div className="uk-navbar-item">
            <img src={logo} alt="GetAJob logo" className={styles.logo} />
          </div>
        </div>

        <div className="uk-navbar-center">
          <ul className="uk-navbar-nav uk-nav">
            {headerNav.map((nav, idx) => (
              <li key={idx}>
                <a href={`/${nav.url}`}>{nav.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav uk-nav">
            <li>
              <a href="/signup">Sign up</a>
            </li>
          </ul>
          <div className="uk-navbar-item">
            <a
              href="/login"
              className="uk-button uk-button-primary-light uk-button-primary border-rounded"
            >
              Log in
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
