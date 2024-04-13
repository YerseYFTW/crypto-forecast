import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateTimePicker({ selectedDate, onDataSelected }) {
  const handleDateChange = (date) => {
    onDataSelected(date);
  };

  const handleSubmit = () => {
    console.log(selectedDate); // Log the selected date when the Submit button is clicked
    // Perform other actions or send data to parent component here
  };

  return (
    <div>
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Select Date and Time"
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default DateTimePicker;
