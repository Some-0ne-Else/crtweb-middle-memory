import './Card.css';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ type, onClick }) => {
  const [cardType, setCardType] = React.useState('');
  const [cardActive, setCardActive] = React.useState(false);

  React.useEffect(() => {
    setCardType(type);
  }, []);
  const onCardClick = () => {
    setCardActive(true);
    onClick(cardType);
  };
  return (
    <div className="card">
      <button className={`card_button ${cardActive ? 'card_active' : ''}`} type="button" onClick={onCardClick}>{cardType}</button>
    </div>
  );
};
Card.propTypes = {
  type: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Card;
