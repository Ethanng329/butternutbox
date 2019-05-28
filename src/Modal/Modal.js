import React from 'react';

import { format } from 'date-fns';

function Modal({
  show,
  onClick,
  dateHandler,
  dayOfWeek,
  CalenderData,
  selectedDate,
  monthRange,
  animate,
  onMouse
}) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal_container">
      <div className="modal_card">
        <p className="modal_card_text">{monthRange}</p>
        <div>
          <div className="grid_container">
            {dayOfWeek.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <div className="grid_container">
            {CalenderData.map((item, index) => {
              return (
                <button
                  className={
                    item.date === selectedDate
                      ? 'date_button_selected'
                      : 'date_button'
                  }
                  disabled={!item.is_deliverable}
                  onClick={dateHandler}
                  key={index}
                  value={item.date}
                >
                  {format(item.date, 'D')}
                </button>
              );
            })}
          </div>
        </div>
        <div className="button_container">
          <button className="date_update_button" onClick={onClick}>
            GOT IT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
