import React, { useState } from 'react';
import { format } from 'date-fns';

import List from './List/List';
import Modal from './Modal/Modal';
import './App.css';
import { jsonData } from './jsonData';

const dayOfWeek = jsonData
  .map(item => {
    const dayofWeek = format(item.date, 'dd');
    return dayofWeek.charAt(0);
  })
  .slice(0, 7);

function App() {
  const initialSelectedDate = jsonData[0].date;
  const [isShow, setIsShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);

  const handleDate = event => {
    const newSelectedDate = jsonData.find(
      item => item.date === event.target.value
    );
    setSelectedDate(newSelectedDate.date);
  };

  const monthChecker = () => {
    const firstDataMonth = format(jsonData[0].date, 'MMM');
    const lastDataMonth = format(jsonData[jsonData.length - 1].date, 'MMM');
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
        CalenderData={jsonData}
        dateHandler={event => handleDate(event)}
        show={isShow}
        onClick={() => setIsShow(!isShow)}
      />
    </div>
  );
}

export default App;
