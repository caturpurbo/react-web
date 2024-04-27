import React, { useState } from 'react';

const ContractForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [deliverables, setDeliverables] = useState([]);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleAddDeliverable = () => {
    setDeliverables([...deliverables, { description: '', targetDate: '' }]);
  };

  const handleDeliverableChange = (index, event) => {
    const updatedDeliverables = [...deliverables];
    updatedDeliverables[index][event.target.name] = event.target.value;
    setDeliverables(updatedDeliverables);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContract = { name, deliverables };
    onSubmit(newContract);
    setName('');
    setDeliverables([]); // Clear form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Contract</h2>
      <label htmlFor="name">Contract Name:</label>
      <input type="text" id="name" value={name} onChange={handleInputChange} />
      <h3>Deliverables</h3>
      <button type="button" onClick={handleAddDeliverable}>Add Deliverable</button>
      {deliverables.map((deliverable, index) => (
        <div key={index}>
          <label htmlFor={`description-${index}`}>Description:</label>
          <input type="text" id={`description-${index}`} name="description" value={deliverable.description} onChange={(e) => handleDeliverableChange(index, e)} />
          <label htmlFor={`targetDate-${index}`}>Target Date:</label>
          <input type="date" id={`targetDate-${index}`} name="targetDate" value={deliverable.targetDate} onChange={(e) => handleDeliverableChange(index, e)} />
        </div>
      ))}
      <button type="submit">Create Contract</button>
    </form>
  );
};

export default ContractForm;
