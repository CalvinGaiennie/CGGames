import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
function ReturnToHomeLink() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">home</NavLink>
    </nav>
  );
}

export default ReturnToHomeLink;
