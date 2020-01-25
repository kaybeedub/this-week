import React from 'react';
import moment from 'moment';

function Week(props) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const renderDay = () =>
    props.daysOfWeek.map(day => (
      <li className="day">
        <p>{days[moment(day).day()]}</p>
        <p>
          {months[moment(day).month()]} {moment(day).date()}
        </p>
        <p> {moment(day).year()}</p>
      </li>
    ));
  return (
    <div>
      <ul className="week">{renderDay()}</ul>
    </div>
  );
}

export default Week;
