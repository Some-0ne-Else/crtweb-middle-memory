import './Card.css';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  type, id, active, finded, disabled, onClick,
}) => (
  <div className={`card ${finded ? 'card_finded' : ''} ${active ? 'card_active' : ''}`}>
    <button
      disabled={finded || disabled}
      aria-label="card"
      className={`card_button  ${(finded || disabled) ? 'card_button_finded' : ''}`}
      type="button"
      onClick={() => onClick(id, type)}
    >
      <p className={`card__text ${active ? 'card__text_active' : ''}`}>{active ? type : ''}</p>
    </button>
  </div>
);
Card.propTypes = {
  type: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  finded: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Card;
