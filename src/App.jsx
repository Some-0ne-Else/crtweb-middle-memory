import './App.css';
import React from 'react';
import Cards from './Cards/Cards';
import Timer from './Timer/Timer';
import Results from './Results/Results';

function App() {
  const [isAppRun, setAppRun] = React.useState(false);
  const onClick = () => {
    setAppRun(true);
  };
  return (
    <div className="app">
      <Timer onClick={onClick} />
      {isAppRun ? <Cards /> : ''}
      <Results />
    </div>
  );
}

export default App;
