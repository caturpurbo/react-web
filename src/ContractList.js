import React from 'react';

const ContractList = ({ contracts }) => {
  return (
    <div>
      <h2>Contracts</h2>
      <ul>
        {contracts.map((contract) => (
          <li key={contract.id}>
            <h3>{contract.name}</h3>
            {/* You can display additional contract details here, like deliverables */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContractList;
