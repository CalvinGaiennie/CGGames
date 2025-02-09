import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
function GameChoiceMenu() {
  return (
    <div className="flex">
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink to="/Chess">
              <h1>Chess</h1>
              <img src="chess.jpeg" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/Sudoku">
              <h1>Sudoku</h1>
              <img src="sudoku.png" />
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink to="/BlackJack">
              <h1>BlackJack</h1>
              <img src="blackjack.webp" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/Go">
              <h1>Go</h1>
              <img src="go.jpg" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default GameChoiceMenu;
