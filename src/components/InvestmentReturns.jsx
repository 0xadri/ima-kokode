import { useState } from "react";
import { calculateInvestmentResults } from "../utils/investment";

let results;

const InvestmentReturns = ({ calcParams }) => {
  const [dataRows, setDataRows] = useState();

  console.log("calcParams:");
  console.log(calcParams);

  if (
    calcParams.initialInvestment > 0 &&
    calcParams.annualInvestment > 0 &&
    calcParams.expectedReturn > 0 &&
    calcParams.duration > 0
  ) {
    // console.log(`${initInv} && ${annInv} && ${expRtrn} && ${duration}`);
    results = calculateInvestmentResults(calcParams);
    console.log("r:");
    console.log(results);
    // setDataRows(results);
  }

  return (
    <div className="inv-returns-area">
      {!results && <div>No Results</div>}
      {results && (
        <table>
          <thead>
            <tr>
              <th scope="col" className="inv-returns-th">
                Year
              </th>
              <th scope="col" className="inv-returns-th">
                Investment Value
              </th>
              <th scope="col" className="inv-returns-th">
                Interest (Year)
              </th>
              <th scope="col" className="inv-returns-th">
                Total Interest
              </th>
              <th scope="col" className="inv-returns-th">
                Invested Capital
              </th>
            </tr>
          </thead>
          <tbody>
            {/* todo: fix buggy values */}
            {results.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.year}</th>
                <td>{item.annualInvestment}</td>
                <td>{item.interest}</td>
                <td>{item.valueEndOfYear}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InvestmentReturns;
