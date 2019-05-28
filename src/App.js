import React, { useState } from 'react';

import List from './List/List';
import Modal from './Modal/Modal';

import './App.css';

import CalenderData from './CalenderData';

const dayOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function App() {
  const initialSelectedDate = CalenderData[0];
  const [isShow, setIsShow] = useState(true);
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);

  const handleDate = event => {
    const newSelectedDate = CalenderData.find(
      item => item.date === event.target.value
    );
    setSelectedDate(newSelectedDate);
  };

  const monthChecker = () => {
    const firstDataMonth = CalenderData[0].month;
    const lastDataMonth = CalenderData[CalenderData.length - 1].month;
    if (firstDataMonth === lastDataMonth) {
      return firstDataMonth;
    } else return `${firstDataMonth}/${lastDataMonth}`;
  };

  return (
    <div>
      <List
        showSelectedDate={selectedDate}
        onClick={() => setIsShow(!isShow)}
        selectedDate={selectedDate}
      />
      <Modal
        monthRange={monthChecker()}
        selectedDate={selectedDate}
        dayOfWeek={dayOfWeek}
        CalenderData={CalenderData}
        dateHandler={event => handleDate(event)}
        show={isShow}
        onClick={() => setIsShow(!isShow)}
      />
    </div>
  );
}

export default App;
