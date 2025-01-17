import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <div>
      <NavLink to="/">game1</NavLink>
      <NavLink to="/Game2">game2</NavLink>
      <NavLink to="/Game3">game3</NavLink>
    </div>
  );
}

export default AppNav;
