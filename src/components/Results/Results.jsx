import './Results.css';
import React from 'react';
import PropTypes from 'prop-types';
import results from '../../utils/results.json';
import ResultRecord from '../ResultRecord/ResultRecord';

const Results = ({ name, score }) => {
  React.useEffect(() => {
    console.log(name, score);
    if (name && score) { results.push({ name, score }); }
  });

  return (
    <div className="results">
      <h1 className="results__header">Результаты</h1>
      {results.map((record, idx) => (
        <ResultRecord
          key={idx.toString()}
          name={record.name}
          score={record.score}
        />
      ))}
    </div>
  );
};
Results.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
export default Results;
