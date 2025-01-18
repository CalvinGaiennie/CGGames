import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chess from "./Pages/Chess.jsx";
import Sudoku from "./Pages/Sudoku.jsx";
import BlackJack from "./Pages/BlackJack.jsx";
import Home from "./Pages/Home.jsx";
import Go from "./Pages/Go.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/Chess" element={<Chess />}></Route>
          <Route path="/Sudoku" element={<Sudoku />}></Route>
          <Route path="/BlackJack" element={<BlackJack />}></Route>
          <Route path="/Go" element={<Go />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
