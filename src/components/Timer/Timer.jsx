import './Timer.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounter, toggleGameStatus } from '../../services/actions';

const Timer = () => {
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
    dispatch(toggleGameStatus());
  };

  return (
    <div className="timer">
      {gameStarted ? <p className="timer__output">{counterValue}</p>
        : <button type="button" disabled={gameStarted} onClick={onStartClick} className="timer__button">Начать игру</button> }
    </div>
  );
};
Timer.propTypes = {
};
export default Timer;
