// This is a simplified example of api.js
// Replace the placeholders with actual API endpoints and implementations

// Simulate fetching all trains data



export async function fetchAllTrainsData() {
    try {
      const response = await fetch('https://api.example.com/all-trains');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching all trains data:', error);
      return [];
    }
  }
  
  // Simulate fetching single train data by ID
  export async function fetchSingleTrainData(trainId) {
    try {
      const response = await fetch(`https://api.example.com/train/${trainId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching single train data:', error);
      return null;
    }
  }
  