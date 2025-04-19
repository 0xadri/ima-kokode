import { useState } from "react";
import { calculateInvestmentResults, formatter } from "../utils/investment";

const InvestmentReturns = ({ invParams }) => {
  //   console.log("invParams:");
  //   console.log(invParams);
  const inputsAreValid =
    invParams.initialInvestment > 0 &&
    invParams.annualInvestment > 0 &&
    invParams.expectedReturn > 0 &&
    invParams.duration > 0;

  const results = inputsAreValid ? calculateInvestmentResults(invParams) : null;
  //   console.log("results:");
  //   console.log(results);
  const initialInvestment =
    inputsAreValid &&
    results[0].valueEndOfYear -
      results[0].interest -
      results[0].annualInvestment;

  return (
    <div className="inv-returns-area">
      {!inputsAreValid && <div>Please Enter Positive Values</div>}
      {inputsAreValid && results && (
        <table>
          <thead>
            <tr>
              <th scope="col" className="inv-returns-th">
                Year
              </th>
              <th scope="col" className="inv-returns-th">
                Annual Investment
              </th>
              <th scope="col" className="inv-returns-th">
                Interest (Year)
              </th>
              <th scope="col" className="inv-returns-th">
                Total Inc. Interest
              </th>
              <th scope="col" className="inv-returns-th">
                Total Invested Capital
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((yearData, index) => (
              <tr key={index}>
                <th scope="row">{yearData.year}</th>
                <td>{formatter.format(yearData.annualInvestment)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>
                  {formatter.format(
                    initialInvestment +
                      yearData.annualInvestment * yearData.year
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InvestmentReturns;
