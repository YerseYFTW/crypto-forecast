import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateTimePicker({ selectedDate, onDataSelected }) {
  const [placeholder, setPlaceholder] = useState('Select Date and Time');

  const handleDateChange = (date) => {
    // if (date instanceof Date && !isNaN(date)) {
    //     console.log(date.getTime());
    //   const unixTimestamp = Math.round(date.getTime() / 1000); // Convert date to Unix timestamp (seconds since epoch)
    //   console.log('child', unixTimestamp);
    //   onDataSelected(unixTimestamp);
    //   // Update placeholder text to display selected date and time
    //   setPlaceholder(date.toLocaleString()); // Customize placeholder text as needed
    // } else {
    //   console.error('Invalid date selected:', date);
    // }
    setPlaceholder(date.toLocaleString());
    onDataSelected(date);
  };

  const handleSubmit = () => {
    // Handle form submission or other actions with Unix timestamp
    console.log(selectedDate); // Unix timestamp
  };

  return (
    <div>
      <div style={{paddingTop:'5px'}}>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText={placeholder}
        />
      </div>
      
    </div>
  );
}
{/* <div style={{ marginTop: '20px' }}>
        <button onClick={handleSubmit}>Submit</button>
      </div> */}

export default DateTimePicker;
