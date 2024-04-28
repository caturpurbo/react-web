import React from 'react';

const ContractList = ({ contracts }) => {
  return (
    <div className="contract-list">
      <h2>Contracts</h2>
      <ul>
        {contracts.map((contract) => (
          <li key={contract.id}>
            <h3>{contract.name}</h3>
            <h4>Deliverables</h4>
            <ul>
              {contract.deliverables.map((deliverable) => (
                <li key={deliverable.id}>
                  {deliverable.description} - Due Date: {deliverable.targetDate}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContractList;
