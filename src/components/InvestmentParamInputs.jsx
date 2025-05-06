const InvestmentParamInputs = ({ setInvestmentParameters, invParams }) => {
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
              className="inv-row-input-field bg-neutral-800 rounded px-1"
              value={invParams.initialInvestment}
              onChange={(e) =>
                setInvestmentParameters("initialInvestment", e.target.value)
              }
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
              className="inv-row-input-field bg-neutral-800 rounded px-1"
              value={invParams.annualInvestment}
              onChange={(e) =>
                setInvestmentParameters("annualInvestment", e.target.value)
              }
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
              className="inv-row-input-field bg-neutral-800 rounded px-1"
              value={invParams.expectedReturn}
              onChange={(e) =>
                setInvestmentParameters("expectedReturn", e.target.value)
              }
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
              className="inv-row-input-field bg-neutral-800 rounded px-1"
              value={invParams.duration}
              onChange={(e) =>
                setInvestmentParameters("duration", e.target.value)
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentParamInputs;
