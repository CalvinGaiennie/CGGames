import Board from "../Sudoku/Components/Board";
import Header from "../components/Header";
import ReturnToHomeLink from "../components/ReturnToHomeLink";

function Sudoku() {
  return (
    <div>
      {/* <AppNav></AppNav> */}
      <Header />
      <ReturnToHomeLink />
      <Board />
    </div>
  );
}

export default Sudoku;
