import './App.css';
import React from 'react';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';
import Timer from './components/Timer/Timer';
import Results from './components/Results/Results';

function App() {
  const [isAppRun, setAppRun] = React.useState(false);
  const [timerActive, setTimerActive] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [currentName, setCurrentName] = React.useState('DefaultUser');
  const [currentScore, setCurrentScore] = React.useState(0);

  const onGameFinish = () => {
    setTimerActive(false);
    setShowResults(true);
    setAppRun(false);
  };

  const onFormSubmit = (e, user) => {
    e.preventDefault();
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
