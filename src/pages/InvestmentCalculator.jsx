import InvestmentParamInputs from "../components/InvestmentParamInputs";
import InvestmentReturns from "../components/InvestmentReturns";

const InvestmentCalculator = () => {
  return (
    <div>
      <h1>Investment Calculator</h1>
      <InvestmentParamInputs />
      <InvestmentReturns />
    </div>
  );
};

export default InvestmentCalculator;
