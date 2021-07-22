import './Timer.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounter } from '../../services/actions';

const Timer = () => {
  const { counterValue } = useSelector((state) => ({
    counterValue: state.counter.value,
  }));
  const dispatch = useDispatch();

  React.useEffect(() => {
    const timer = setInterval(() => {
      dispatch(increaseCounter());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer">
      <p className="timer__output">{counterValue}</p>
    </div>
  );
};
Timer.propTypes = {
};
export default Timer;
