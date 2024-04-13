import React, { useState } from 'react';
//import DatePickerComponent from './date-picker/DatePickerComponent';
//import OtherComponent from './date-picker/OtherComponent';
import Dropp from './DropDownFinal';
import DateTimePicker from './datehour';
//import DateTimePicker from './datehour';

function ParentComponent() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedChain, setSelectedChain] = useState('Bitcoin');
  //const [selectedHour, setSelectedHour] = useState('Bitcoin');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
    
  };

  const handleChainSelected = (chain) => {
    setSelectedChain(chain);
   // console.log(chain);
  };

  return (
    <div>
      
      <Dropp selectedChain={selectedChain} onChainSelected={handleChainSelected}/>
      <DateTimePicker selectedDate ={selectedDate} onDataSelected={handleDateChange}/>
      

    </div>
  );
}
//<DatePickerComponent selectedDate={selectedDate} onDateChange={handleDateChange} />
      
//<OtherComponent selectedDate={selectedDate} />
///// IN ASTA O SA FIE DATELE DE LE TRIMIT LA API CU O FUCNTIE!!

export default ParentComponent;
