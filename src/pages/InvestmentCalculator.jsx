import { useState } from "react";
import InvestmentParamInputs from "../components/InvestmentParamInputs";
import InvestmentReturns from "../components/InvestmentReturns";

const InvestmentCalculator = () => {
  const [invParams, setInvParams] = useState({
    initialInvestment: 20000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 5,
  });

  const setInvestmentParameters = (name, value) => {
    setInvParams((prevInvParams) => {
      return {
        ...prevInvParams,
        [name]: +value,
      };
    });
  };

  return (
    <div>
      <h1>Investment Calculator</h1>
      <InvestmentParamInputs
        setInvestmentParameters={setInvestmentParameters}
        invParams={invParams}
      />
      <InvestmentReturns invParams={invParams} />
    </div>
  );
};

export default InvestmentCalculator;
