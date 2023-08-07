import { fetchAllTrainsData } from '../api/api.js';


import React, { useEffect, useState } from 'react';
import TrainList from '../components/TrainList';
//import { fetchAllTrainsData } from '../api/api.js'; 
function AllTrainsPage() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      const data = await fetchAllTrainsData();
      setTrains(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>All Trains Schedule</h1>
      <TrainList trains={trains} />
    </div>
  );
}

export default AllTrainsPage;
