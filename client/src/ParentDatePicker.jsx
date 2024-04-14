import React, { useState } from 'react';
import Dropp from './DropDownFinal';
import DateTimePicker from './datehour';
import Sendd from './SendCall';
import './customcss.css';

function ParentComponent() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedChain, setSelectedChain] = useState('Bitcoin (BTC)');
  const [selectedPrice, setSelectedPrice] = useState();
  const [selectedAccuracy, setSelectedAccuracy] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log('parent', date);
  };

  const handleChainSelected = (chain) => {
    setSelectedChain(chain);
  };

  return (
    <div>
    <div className="parent-container">
      <div className="component-container">
        <Dropp selectedChain={selectedChain} onChainSelected={handleChainSelected} selectedDate={selectedDate} />
      </div>
      <div className="component-container1">
        <DateTimePicker selectedDate={selectedDate} onDataSelected={handleDateChange} />
      </div>
      <div className="component-container">
        <Sendd selectedDate={selectedDate} selectedChain={selectedChain} onPriceSelected={setSelectedPrice} onAccuracySelected={setSelectedAccuracy} />
      </div>
    </div>
    <div>
    <p style={{fontSize:'30px'}}>Forecasted price for {selectedChain} is: </p>
    <p style={{fontSize:'80px', color:'green'}}>{selectedPrice ? `$${selectedPrice.toFixed(2)}` : 'N/A'}</p>
    <p style={{fontSize:'30px'}}>with accuracy of: {selectedAccuracy ? selectedAccuracy :"N/A"}</p>
  </div>
  </div>
  );
}

export default ParentComponent;
