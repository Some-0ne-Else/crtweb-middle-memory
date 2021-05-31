import './Timer.css';
import React from 'react';
import PropTypes from 'prop-types';

const Timer = ({ onClick }) => {
  const [timerValue, setTimerValue] = React.useState(0);
  const [timerStarted, setTimerStarted] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  React.useEffect(() => {
    let timer;
    if (timerStarted) {
      timer = setTimeout(() => {
        setTimerValue((c) => c + 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  });

  const onStartClick = () => {
    setButtonDisabled(true);
    setTimerStarted(true);
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
  onClick: PropTypes.func.isRequired,
};
export default Timer;
