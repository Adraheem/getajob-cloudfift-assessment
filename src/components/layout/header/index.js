import { Icon } from "@iconify/react";
import { useState } from "react";
import { headerNav } from "../../../assets/data/header-nav";
import { logo } from "../../../assets/images/brand";
import styles from "../../../styles/modules/layout.module.scss";

const Header = () => {
  const [openSidebar, setSidebar] = useState(false);

  return (
    <>
      <header className="uk-container uk-container-large uk-margin-small-top">
        <nav
          className="uk-navbar-container uk-navbar-transparent"
          data-uk-navbar
        >
          <div className="uk-navbar-left">
            <div className="uk-navbar-item">
              <img src={logo} alt="GetAJob logo" className={styles.logo} />
            </div>
          </div>

          <div className="uk-navbar-center uk-visible@m">
            <ul className="uk-navbar-nav uk-nav">
              {headerNav.map((nav, idx) => (
                <li key={idx}>
                  <a href={`/${nav.url}`}>{nav.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav uk-nav uk-visible@s">
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
            <div
              className="uk-navbar-item uk-hidden@m"
              onClick={() => setSidebar(!openSidebar)}
            >
              <Icon
                icon={openSidebar ? "line-md:close" : "ci:menu-alt-02"}
                inline={true}
                fontSize="2rem"
              />
            </div>
          </div>
        </nav>
      </header>

      <MobileSidebar open={openSidebar} />
    </>
  );
};

const MobileSidebar = ({ open }) => {
  return (
    <>
      <div
        className={`uk-hidden@m ${styles.sidebar} ${open ? styles.open : ""}`}
      >
        <div>
          <ul className="uk-nav uk-nav-default">
            {headerNav.map((nav, idx) => (
              <li key={idx}>
                <a href={`/${nav.url}`}>{nav.name}</a>
              </li>
            ))}

            <li className="uk-nav-divider"></li>
            <li>
              <a href="/signup">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
