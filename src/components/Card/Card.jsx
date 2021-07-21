import './Card.css';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  type, id, active, onClick,
}) => {
  const [cardActive, setCardActive] = React.useState(false);
  React.useEffect(() => {
    setCardActive(active);
  });
  const onCardClick = () => {
    setCardActive(true);
    onClick(id, type);
  };
  return (
    <div className="card">
      <button
        aria-label="card"
        className={`card_button ${cardActive ? 'card_active' : ''}`}
        type="button"
        onClick={onCardClick}
      >
        <p className={`card__text ${cardActive ? 'card__text_active' : ''}`}>{type}</p>
      </button>
    </div>
  );
};
Card.propTypes = {
  type: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Card;
