import React from 'react';

function SingleTrain({ train }) {
  return (
    <div>
      <h2>{train.name}</h2>
      <p>Departure Time: {train.departureTime}</p>
      <p>Seat Availability: {train.seatAvailability}</p>
      <p>Price (Sleeper): {train.price.sleeper}</p>
      <p>Price (AC): {train.price.ac}</p>
      
    </div>
  );
}

export default SingleTrain;
