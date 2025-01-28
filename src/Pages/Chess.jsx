import ChessBoard from "../Chess/Components/ChessBoard.jsx";
import Header from "../components/Header";
import ReturnToHomeLink from "../components/ReturnToHomeLink";

function Chess() {
  return (
    <div>
      <Header />
      <ReturnToHomeLink />
      <ChessBoard />
    </div>
  );
}

export default Chess;
