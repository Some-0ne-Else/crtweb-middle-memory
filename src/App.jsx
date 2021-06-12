/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import './App.css';
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';
import Timer from './components/Timer/Timer';
import Results from './components/Results/Results';
import { generateCards, generateTypes } from './utils/utils';

function App() {
  const [isAppRun, setAppRun] = React.useState(false);
  const [timerActive, setTimerActive] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [currentName, setCurrentName] = React.useState('DefaultUser');
  const [currentScore, setCurrentScore] = React.useState(0);

  const initialState = { cards: generateCards(generateTypes()), counter: 0 };
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'cards/match':
        return { ...state /* фильтрация массива после совпадения */ };
      case 'counter/increment':
        return { ...state, counter: state.counter + 1 };
      case 'counter/increseOnValue':
        return { ...state, counter: state.counter + action.payload };
      default:
        return state;
    }
  }
  const store = configureStore({ reducer: rootReducer });
  console.log(store.getState());

  const increaseCounter = () => ({
    type: 'counter/increment',
  });
  const increaseCounterOnValue = (value) => ({
    type: 'counter/increseOnValue',
    payload: value,
  });

  store.dispatch(increaseCounter());
  store.dispatch(increaseCounterOnValue(2));
  console.log(store.getState());
  const onGameFinish = () => {
    setTimerActive(false);
    setShowResults(true);
    setAppRun(false);
  };

  const onFormSubmit = (e, user) => {
    // e.preventDefault();
    setCurrentName(user);
  };

  const onClick = () => {
    setAppRun(true);
    setTimerActive(true);
    setTimeout(() => onGameFinish(), 2000); // for test
  };
  const getTimerValue = (timerValue) => {
    setCurrentScore(timerValue);
  };

  return (
    <div className="app">
      <Form onSubmit={onFormSubmit} />
      {!showResults ? <Timer timerActive={timerActive} onClick={onClick} getTimerValue={getTimerValue} /> : ''}
      {isAppRun ? <Cards onFinish={onGameFinish} /> : ''}
      {showResults ? <Results name={currentName} score={currentScore} /> : ''}
    </div>
  );
}

export default App;
