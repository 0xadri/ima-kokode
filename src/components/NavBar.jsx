import { Link } from "react-router";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      {" · "}
      <Link to="/InvestmentCalculator">Investment Calculator</Link>
    </div>
  );
};

export default NavBar;
