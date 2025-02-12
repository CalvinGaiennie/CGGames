import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chess from "./Pages/Chess.jsx";
import Sudoku from "./Pages/Sudoku.jsx";
import BlackJack from "./Pages/BlackJack.jsx";
import Home from "./Pages/Home.jsx";
import Go from "./Pages/Go.jsx";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";

function App() {
  return (
    <AuthProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/Chess" element={<Chess />} />
            <Route path="/Sudoku" element={<Sudoku />} />
            <Route path="/BlackJack" element={<BlackJack />} />
            <Route path="/Go" element={<Go />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
