import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
function GameChoiceMenu() {
  return (
    <div className="flex">
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink to="/Chess">
              <img src="chess.jpeg" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/Sudoku">
              <img src="sudoku.png" />
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink to="/BlackJack">
              <img src="blackjack.webp" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/Go">
              <img src="go.jpg" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default GameChoiceMenu;
