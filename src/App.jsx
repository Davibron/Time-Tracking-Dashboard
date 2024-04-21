import React, { useState, useEffect } from 'react';
import Detail from './detail';
import './App.css';

function App() {
  const [selectedPeriod, setSelectedPeriod] = useState('daily');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [selectedPeriod]);

  const fetchData = async () => {
    try {
      const response = await fetch('src/data.json');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePeriodClick = (period) => {
    setSelectedPeriod(period);
  };

  // Filter data based on selected period
  const filteredData = data.filter(item => item.timeframes[selectedPeriod]);

  return (
    <main className='container'>
      <div className='client'>
        <div className='profile'>
          <img className='profile-pic' src="/images/image-jeremy.png" alt="Profile" />
          <h6>Report for</h6>
          <h2>Jeremy Robson</h2>
        </div>
        <div className='period'>
          <span onClick={() => handlePeriodClick('daily')}>Daily</span>
          <span onClick={() => handlePeriodClick('weekly')}>Weekly</span>
          <span onClick={() => handlePeriodClick('monthly')}>Monthly</span>
        </div>
      </div>
      <div className='data-element-container'>
        {filteredData.map((dataItem, index) => (
          <Detail 
            key={index}
            {...dataItem}
            selectedPeriod={selectedPeriod}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
