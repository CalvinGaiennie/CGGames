import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function ReturnToHomeLink() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/login">login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ReturnToHomeLink;
