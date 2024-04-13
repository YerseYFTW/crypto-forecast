import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

function DatePickerComponent({ selectedDate, onDateChange }) {
  const formatDate = (date) => {
    if (!date) return 'Select Date';
    return date.toLocaleDateString();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px', padding: '45px', textAlign: 'center' }}>
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        dateFormat="dd/MM/yyyy"
        className="form-control"
        placeholderText="Select Date"
      />
      
    </div>
  );
}

export default DatePickerComponent;
