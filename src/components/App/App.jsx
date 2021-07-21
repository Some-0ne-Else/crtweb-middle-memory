import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../Form/Form';
import Cards from '../Cards/Cards';
import Timer from '../Timer/Timer';
import Results from '../Results/Results';
import { toggleGameStatus, toggleShowResults } from '../../services/actions';

function App() {
  const dispatch = useDispatch();
  const {
    gameStarted, timerValue, userName, showResults,
  } = useSelector((state) => ({
    gameStarted: state.gameStarted,
    timerValue: state.counter.value,
    userName: state.userName,
    showResults: state.showResults,
  }));
  const onGameFinish = () => {
    dispatch(toggleShowResults());
    dispatch(toggleGameStatus());
  };

  return (
    <div className="app">
      <Form />
      { userName !== 'DefaultUser' && !showResults && <Timer /> }
      {gameStarted && !showResults && <Cards onFinish={onGameFinish} />}
      {showResults && <Results name={userName} score={timerValue} /> }
    </div>
  );
}

export default App;
