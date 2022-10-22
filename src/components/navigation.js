import React from "react";
import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";
import { useTranslation, Trans } from "react-i18next";

const Navigation = ({ items }) => {
  const { t } = useTranslation();
  return (
    <header className="nav-header">
      <ul>
        {items.length ? (
          items.map((item, i) => {
            return (
              <li key={`${item.title}-${i}`}>
                <HashLink smooth to={item.path}>
                  <i className={item.icon}></i>
                  {t(item.title)}
                </HashLink>
              </li>
            );
          })
        ) : (
          <span>t(Add Navigation Items)</span>
        )}
      </ul>
    </header>
  );
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, path: PropTypes.string })
  ),
};
Navigation.defaultProps = {
  items: [],
};
export default Navigation;
