import React from 'react';

import van from '../static/images/van.svg';
import diary from '../static/images/calendar.svg';

function List({ onClick, showSelectedDate, selectedDate }) {
  const { date, dayOfWeek, month } = selectedDate;
  return (
    <div className="list_container">
      <h2 className="list_title">Choose your delivery date</h2>
      <ul>
        <li>
          <div className="img_background">
            <img src={van} alt="van icon" />
          </div>
          <span>Delivery is always free</span>
        </li>
        <li>
          <div className="img_background">
            <img src={diary} alt="diary icon" />
          </div>
          <span>
            {dayOfWeek} {month} {date}
          </span>
          <button onClick={onClick} className="change_button">
            Change
          </button>
        </li>
      </ul>
    </div>
  );
}

export default List;
