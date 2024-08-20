import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.navContainer}>
        <nav className={css.nav}>
          <ul className={css.item}>
            <li>
              <NavLink to="/" className={getLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="./movies" className={getLinkClass}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
