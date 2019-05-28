import React from 'react';

function Modal({
  show,
  onClick,
  dateHandler,
  dayOfWeek,
  CalenderData,
  selectedDate
}) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal_container">
      <div className="modal_card">
        <p className="modal_card_text">MAY/JUNE</p>
        <div className="grid_container">
          {dayOfWeek.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>

        <div className="grid_container">
          {CalenderData.map((item, index) => {
            return (
              <button
                autoFocus
                className={
                  item === selectedDate ? 'date_button_selected' : 'date_button'
                }
                disabled={!item.free}
                onClick={dateHandler}
                key={index}
                value={item.date}
              >
                {item.date}
              </button>
            );
          })}
        </div>
        <div className="button_container">
          <button className="date_update_button" onClick={onClick}>
            <p>GOT IT</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
