import { fetchAllTrainsData } from '../api/api.js';


import React, { useEffect, useState } from 'react';
import SingleTrain from '../components/SingleTrain';
import { fetchSingleTrainData } from '../api/api.js'; 

function SingleTrainPage({ match }) {
  const [train, setTrain] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      const data = await fetchSingleTrainData(match.params.id);
      setTrain(data);
    };
    fetchData();
  }, [match.params.id]);

  return (
    <div>
      {train ? <SingleTrain train={train} /> : <p>Loading...</p>}
    </div>
  );
}

export default SingleTrainPage;
