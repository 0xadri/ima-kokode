import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import InvestmentCalculator from "./pages/InvestmentCalculator";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/InvestmentCalculator"
          element={<InvestmentCalculator />}
        />
      </Routes>
    </>
  );
}

export default App;
