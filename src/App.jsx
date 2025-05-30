import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import InvestmentCalculator from "./pages/InvestmentCalculator";
import NavBar from "./components/NavBar";
import TicTacToe from "./pages/TicTacToe";
import Playground from "./pages/Playground";
import Timer from "./pages/Timer";
import ProjectMgmt from "./pages/ProjectMgmt";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen pt-30">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Timer" element={<Timer />} />
        <Route
          path="/InvestmentCalculator"
          element={<InvestmentCalculator />}
        />
        <Route path="/ProjectMgmt" element={<ProjectMgmt />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
        <Route path="/Playground" element={<Playground />} />
      </Routes>
    </div>
  );
}

export default App;
