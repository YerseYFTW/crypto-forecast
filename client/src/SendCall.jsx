import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Sendd({ selectedDate, selectedChain, onPriceSelected, onAccuracySelected }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const unixTimeStampCall = () => {
    const timestamp = Math.round(selectedDate.getTime()); // Convert Date object to Unix timestamp in seconds
    console.log('Timestamp:', timestamp);
    console.log('Selected Chain:', selectedChain);

    fetchData(timestamp);
  };

  const fetchData = async (timestamp) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://cfcc.chickenkiller.com:5000/predict?coin=${selectedChain.substring(0, selectedChain.indexOf('(')).trim().toLowerCase()}&time=${timestamp}`);
      const data = response.data;
      console.log('API Response:', data);
      onAccuracySelected(data.accuracy);
      onPriceSelected(data.predicted_price);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={unixTimeStampCall}>Fetch Data</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default Sendd;
