import React from 'react';
import { Link } from 'react-router-dom';

function TrainList({ trains }) {
  return (
    <ul>
      {trains.map(train => (
        <li key={train.id}>
          <Link to={`/train/${train.id}`}>{train.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default TrainList;
