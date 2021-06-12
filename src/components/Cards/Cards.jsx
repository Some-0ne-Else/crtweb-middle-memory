/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import './Cards.css';
import PropTypes from 'prop-types';
import React from 'react';
import Card from '../Card/Card';
import { reactionTime } from '../../utils/constants';
import { generateCards, generateTypes } from '../../utils/utils';

// eslint-disable-next-line no-unused-vars
const Cards = ({ onFinish }) => {
  const [cards, setCards] = React.useState([1]);
  const selectedCardOne = React.useRef(null);
  const selectedCardTwo = React.useRef(null);
  const timeout = React.useRef();

  React.useEffect(() => {
    // Filling initiate cards
    setCards(generateCards(generateTypes()));
  }, []);

  React.useEffect(() => {
    console.log(cards);
    if (!cards.length) { onFinish(); }
  }, [cards]);

  const clearSelection = () => {
    selectedCardOne.current = null;
    selectedCardTwo.current = null;
  };
  const handleMatch = () => {
    setTimeout(() => {
      // eslint-disable-next-line max-len
      setCards(cards.filter((card) => card.id !== selectedCardOne.current.id && card.id !== selectedCardTwo.current.id));
      clearSelection();
      clearTimeout(timeout.current);
    }, reactionTime);
  };

  const activateState = (selectedCard) => { // rewrite?
    setCards(cards.map((card) => {
      if (card.id === selectedCard.id) { card.active = true; return card; }
      return card;
    }));
  };

  const resetState = () => {
    setCards(cards.map((card) => {
      if (card.active) { card.active = false; return card; } return card;
    }));
  };

  const onCardClick = (id, type) => {
    if (!selectedCardOne.current) {
      selectedCardOne.current = { id, type };
      activateState(selectedCardOne.current);
      timeout.current = setTimeout(() => { clearSelection(); resetState(); console.log('timeout 5000'); }, 5000);
    } else {
      selectedCardTwo.current = { id, type };
      activateState(selectedCardTwo.current);
    }
    console.log('1st Card', selectedCardOne.current);
    console.log('2nd Card', selectedCardTwo.current);

    // eslint-disable-next-line max-len
    if (selectedCardOne.current?.type === selectedCardTwo.current?.type && selectedCardOne.current?.id !== selectedCardTwo.current?.id) {
      handleMatch();
    } else if (selectedCardOne.current && selectedCardTwo.current) {
      setTimeout(() => { resetState(); clearSelection(); console.log(timeout.current); clearTimeout(timeout.current); console.log(' not match, reset '); }, reactionTime);
    }
  };
  return (
    <main className="cards">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          type={card.type}
          active={card.active}
          onClick={onCardClick}
        />
      ))}
    </main>
  );
};

Cards.propTypes = {
  onFinish: PropTypes.func.isRequired,
};
export default Cards;
