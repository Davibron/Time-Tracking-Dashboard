import { useState, useEffect } from 'react'
import littleData from './littleData'
import Detail from './detail'
import './App.css'

function App() {
  const [selectedPeriod, setSelectedPeriod] = useState('daily');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [selectedPeriod]);

  const fetchData = async () => {
    try {
      const response = await fetch('./data.json');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

const dataElement = littleData.map((data, index) => {
  return <Detail 
    key={index}
    {...data}
    selectedPeriod={selectedPeriod}
  />
})

  const handlePeriodClick = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <main className='container'>
      <div className='client'>
        <div className='profile'>
          <img className='profile-pic' src="../src/assets/images/image-jeremy.png"/>
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
        {dataElement}      
      </div>
    </main>
  )
}

export default App
