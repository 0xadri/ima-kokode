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
    <div className="mt-10">
      {!inputsAreValid && <div>Please Enter Positive Values</div>}
      {inputsAreValid && results && (
        <table className="m-auto text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                Total Inc. Interest
              </th>
              <th scope="col" className="px-6 py-3">
                Interest (Year)
              </th>
              <th scope="col" className="px-6 py-3">
                Total Interest
              </th>
              <th scope="col" className="px-6 py-3">
                Total Invested Capital
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((yearData, index) => {
              const totalInterest =
                yearData.valueEndOfYear -
                yearData.annualInvestment * yearData.year -
                initialInvestment;
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {yearData.year}
                  </th>
                  <td className="px-6 py-4">
                    {formatter.format(yearData.valueEndOfYear)}
                  </td>
                  <td className="px-6 py-4">
                    {formatter.format(yearData.interest)}
                  </td>
                  <td className="px-6 py-4">
                    {formatter.format(totalInterest)}
                  </td>
                  <td className="px-6 py-4">
                    {formatter.format(
                      initialInvestment +
                        yearData.annualInvestment * yearData.year
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InvestmentReturns;
