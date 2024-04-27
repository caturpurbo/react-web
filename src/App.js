import React, { useState, useEffect } from 'react';
import './App.css';
import ContractForm from './ContractForm';
import ContractList from './ContractList';

function App() {
  const [contracts, setContracts] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetch(`${backendUrl}/api/contracts`) // Fetches contracts from backend API
      .then(response => response.json())
      .then(data => setContracts(data));
  }, []);

  const handleAddContract = (newContract) => {
    fetch(`${backendUrl}/api/contracts`, { // Sends POST request to add a contract
      method: 'POST',
      body: JSON.stringify(newContract),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json()) // Handle potential errors here
      .then(addedContract => setContracts([...contracts, addedContract]));
  };

  return (
    <div className="App">
      <h1>Contract Management</h1>
      <ContractForm onSubmit={handleAddContract} />
      <ContractList contracts={contracts} />
    </div>
  );
}

export default App;
