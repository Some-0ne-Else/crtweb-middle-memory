import './Timer.css';
import React from 'react';
import PropTypes from 'prop-types';

const Timer = ({ timerActive, onClick, getTimerValue }) => {
  const [timerValue, setTimerValue] = React.useState(0);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  React.useEffect(() => {
    let timer;
    if (timerActive) {
      timer = setTimeout(() => {
        setTimerValue((c) => c + 1);
      }, 1000);
    } else { getTimerValue(timerValue); }
    return () => clearTimeout(timer);
  });

  const onStartClick = () => {
    setButtonDisabled(true);
    onClick();
  };

  return (
    <div className="timer">
      <button type="button" disabled={buttonDisabled} onClick={onStartClick} className="timer__button">Старт</button>
      <p className="timer__output">{timerValue}</p>
    </div>
  );
};
Timer.propTypes = {
  timerActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  getTimerValue: PropTypes.func.isRequired,
};
export default Timer;
