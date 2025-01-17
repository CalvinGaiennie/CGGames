import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game1 from "./Pages/Game1.jsx";
import Game2 from "./Pages/Game2.jsx";
import Game3 from "./Pages/Game3.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Game1 />}></Route>
          <Route path="/Game2" element={<Game2 />}></Route>
          <Route path="/Game3" element={<Game3 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
