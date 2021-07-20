import './Timer.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounter } from '../../services/actions';

const Timer = ({
  onClick,
}) => {
  const { counterValue, gameStarted } = useSelector((state) => ({
    counterValue: state.counter.value,
    gameStarted: state.gameStarted,
  }));
  const dispatch = useDispatch();

  React.useEffect(() => {
    let timer;
    if (gameStarted) {
      timer = setTimeout(() => {
        dispatch(increaseCounter());
      }, 1000);
    }
    return () => clearTimeout(timer);
  });

  const onStartClick = () => {
    onClick();
  };

  return (
    <div className="timer">
      <button type="button" disabled={gameStarted} onClick={onStartClick} className="timer__button">Старт</button>
      <p className="timer__output">{counterValue}</p>
    </div>
  );
};
Timer.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Timer;
