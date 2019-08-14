import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get('http://lol.dk').then((response: any) => {
        console.log(response);
      });
    };
  }, []);
  return (
    <div>
      <h1>Project Management</h1>
    </div>
  );
};

export default App;
