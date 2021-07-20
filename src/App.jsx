import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';
import Timer from './components/Timer/Timer';
import Results from './components/Results/Results';
import { toggleGameStatus } from './services/actions';

function App() {
  const dispatch = useDispatch();
  const gameStarted = useSelector((state) => state.gameStarted);
  const [showResults, setShowResults] = React.useState(false);
  const [currentName, setCurrentName] = React.useState('DefaultUser');
  const [currentScore, setCurrentScore] = React.useState(0);

  const onGameFinish = () => {
    setShowResults(true);
    dispatch(toggleGameStatus());
  };

  const onFormSubmit = (user) => {
    setCurrentName(user);
  };

  const onStartClick = () => {
    dispatch(toggleGameStatus());
    // setTimeout(() => onGameFinish(), 2000); // for test
  };
  const getTimerValue = (timerValue) => {
    setCurrentScore(timerValue);
  };

  return (
    <div className="app">
      <Form onSubmit={onFormSubmit} />
      {!showResults ? <Timer onClick={onStartClick} getTimerValue={getTimerValue} /> : ''}
      {gameStarted ? <Cards onFinish={onGameFinish} /> : ''}
      {showResults ? <Results name={currentName} score={currentScore} /> : ''}
    </div>
  );
}

export default App;
