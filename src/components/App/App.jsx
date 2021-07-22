import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../Form/Form';
import Cards from '../Cards/Cards';
import Timer from '../Timer/Timer';
import Results from '../Results/Results';
import { nextGameStep, playAgain } from '../../services/actions';

function App() {
  const dispatch = useDispatch();
  const {
    timerValue,
    userName,
    gameStep,
  } = useSelector((state) => ({
    timerValue: state.counter.value,
    userName: state.userName,
    gameStep: state.gameStep,
  }));

  return (
    <div className="app">
      <Form />
      { gameStep === 2 && <button type="button" onClick={() => dispatch(nextGameStep())} className="timer__button">Начать игру</button>}
      { gameStep === 3 && (
      <>
        <Timer />
        <Cards />
      </>
      )}

      { gameStep === 4 && (
      <>
        <Results name={userName} score={timerValue} />
        <button className="app__button" type="button" onClick={() => dispatch(playAgain())}>Играть еще раз</button>
      </>
      )}

    </div>
  );
}

export default App;
