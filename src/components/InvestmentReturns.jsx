const InvestmentReturns = () => {
  return (
    <div className="inv-returns-area">
      <table>
        <thead>
          <tr>
            <th scope="col" className="inv-returns-th">
              Year
            </th>
            <th scope="col" className="inv-returns-th">
              Investement Value
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
          <tr>
            <th scope="row">1</th>
            <td>$17,100</td>
            <td>$900</td>
            <td>$900</td>
            <td>$16,200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentReturns;
