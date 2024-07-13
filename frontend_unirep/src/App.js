import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [republics, setRepublics] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/republics/')
      .then(response => {
        setRepublics(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Republics</h1>
      <ul>
        {republics.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
