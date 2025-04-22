import { Link } from "react-router";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      {" · "}
      <Link to="/Timer">Timer Game</Link>
      {" · "}
      <Link to="/ProjectMgmt">Project Management</Link>
      {" · "}
      <Link to="/InvestmentCalculator">Investment Calculator</Link>
      {" · "}
      <Link to="/TicTacToe">Tic Tac Toe</Link>
      {" · "}
      <Link to="/Playground">🕹</Link>
    </div>
  );
};

export default NavBar;
