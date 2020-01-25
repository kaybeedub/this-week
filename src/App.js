import React, { useState } from 'react';
import moment from 'moment';
import Week from './Components/Week';
import Buttons from './Components/Buttons';

function App() {
  const now = moment().startOf('week');
  const week = [now];
  let i = 0;
  while (week.length < 7) {
    week.push(moment(now).add(++i, 'day'));
  }

  const [daysOfWeek, setDaysOfWeek] = useState(week);

  const getNext = () => {
    let nextWeek = daysOfWeek.map(day => moment(day).add(7, 'days')._d);
    setDaysOfWeek(nextWeek);
  };

  const getLast = () => {
    let nextWeek = daysOfWeek.map(day => moment(day).subtract(7, 'days')._d);
    setDaysOfWeek(nextWeek);
  };

  return (
    <div>
      <h1>This Week</h1>
      <Week daysOfWeek={daysOfWeek} />
      <Buttons getNext={getNext} getLast={getLast} />
    </div>
  );
}

export default App;
