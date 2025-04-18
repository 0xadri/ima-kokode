import { useState } from "react";
import InvestmentReturns from "./InvestmentReturns";

const InvestmentParamInputs = ({ recalc }) => {
  const [initInv, setInitInv] = useState(0);
  const [annInv, setAnnInv] = useState(0);
  const [expRtrn, setExpRtrn] = useState(0);
  const [duration, setDuration] = useState(0);

  const calcParams = {
    initialInvestment: initInv,
    annualInvestment: annInv,
    expectedReturn: expRtrn,
    duration: duration,
  };

  return (
    <>
      <div className="inv-param-inputs-area">
        <div className="inv-row-one">
          <div className="inv-row-input-block">
            <label htmlFor="initial-investment" className="inv-row-input-label">
              Initial Investment ($)
            </label>
            <input
              type="number"
              name="initial-investment"
              id="initial-investment"
              placeholder="Type Initial Investment..."
              className="inv-row-input-field"
              value={initInv}
              onChange={(e) => setInitInv(e.target.value)}
            />
          </div>
          <div className="inv-row-input-block">
            <label htmlFor="annual-investment" className="inv-row-input-label">
              Annual Investment ($)
            </label>
            <input
              type="number"
              name="annual-investment"
              id="annual-investment"
              placeholder="Type Annual Investment..."
              className="inv-row-input-field"
              value={annInv}
              onChange={(e) => setAnnInv(e.target.value)}
            />
          </div>
        </div>
        <div className="inv-row-two">
          <div className="inv-row-input-block">
            <label htmlFor="expected-return" className="inv-row-input-label">
              Expected Return (%)
            </label>
            <input
              type="number"
              name="expected-return"
              id="expected-return"
              placeholder="Type Expected Return..."
              className="inv-row-input-field"
              value={expRtrn}
              onChange={(e) => setExpRtrn(e.target.value)}
            />
          </div>
          <div className="inv-row-input-block">
            <label htmlFor="duration" className="inv-row-input-label">
              Duration (Years)
            </label>
            <input
              type="number"
              name="duration"
              id="duration"
              placeholder="Type Duration..."
              className="inv-row-input-field"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
        </div>
      </div>
      <InvestmentReturns calcParams={calcParams} />
    </>
  );
};

export default InvestmentParamInputs;
