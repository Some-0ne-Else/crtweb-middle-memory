import './ResultRecord.css';
import React from 'react';
import PropTypes from 'prop-types';

const ResultRecord = ({ name, score }) => (
  <div className="record">
    <p className="record__text">{name}</p>
    <p className="record__text">{score}</p>
  </div>
);
ResultRecord.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};
export default ResultRecord;
