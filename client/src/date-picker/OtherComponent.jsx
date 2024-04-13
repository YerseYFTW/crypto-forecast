import React from 'react';

function OtherComponent({ selectedDate }) {
  const formatDate = (date) => {
    if (!date) return 'No Date Selected';
    return date.toLocaleDateString();
  };

  return (
    <div>
      <p>Selected Date: {formatDate(selectedDate)}</p>
    </div>
  );
}

export default OtherComponent;
