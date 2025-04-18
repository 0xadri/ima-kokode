import { useState } from "react";
import InvestmentParamInputs from "../components/InvestmentParamInputs";
import InvestmentReturns from "../components/InvestmentReturns";

const InvestmentCalculator = () => {
  return (
    <div>
      <h1>Investment Calculator</h1>
      <InvestmentParamInputs />
    </div>
  );
};

export default InvestmentCalculator;
