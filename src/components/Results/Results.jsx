import './Results.css';
import React from 'react';
import PropTypes from 'prop-types';
import results from '../../utils/results.json';
import ResultRecord from '../ResultRecord/ResultRecord';

const Results = ({ name, score }) => {
  React.useEffect(() => {
    results.push({ name, score });
    console.log(results);
  }, []);

  return (
    <div className="results">
      <h1 className="results__header">Результаты</h1>
      <p className="results__text">Меньше -- Лучше</p>
      {
        results.sort((a, b) => a.score - b.score).map((record, idx) => (
          <ResultRecord
            key={idx.toString()}
            name={record.name}
            score={record.score}
          />
        ))
}
    </div>
  );
};
Results.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
export default Results;
