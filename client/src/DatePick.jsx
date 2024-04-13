import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState(null); // State for selected date

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update selected date
  };

  const formatDate = (date) => {
    if (!date) return 'Select Date';
    return date.toLocaleDateString(); // Format date as string
  };

  // Export selectedDate as a named export
 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px', padding: '45px', textAlign: 'center' }}>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        className="form-control"
        placeholderText="Select Date"
      />
      <button
        className="btn btn-primary mt-3"
        style={{ width: '100%' }}
        onClick={() => alert(`Selected Date: ${formatDate(selectedDate)}`)}
      >
        Change Data to see: {formatDate(selectedDate)}
      </button>
    </div>
  );
}

export default DatePickerComponent;

