import React from 'react';

function Buttons(props) {
  return (
    <div className="Buttons">
      <button onClick={props.getLast}>Last Week</button>
      <button onClick={props.getNext}>Next Week</button>
    </div>
  );
}

export default Buttons;
