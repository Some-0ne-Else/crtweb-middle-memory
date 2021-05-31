/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */
import './Cards.css';
import React from 'react';
import Card from '../Card/Card';
import {
  cardsAmount, min, max, reactionTime,
} from '../utils/constants';

const Cards = () => {
  const [cards, setCards] = React.useState([]);
  const selectedCardOne = React.useRef(null);
  const selectedCardTwo = React.useRef(null);
  const cardsArr = [];
  const timeout = React.useRef();
  const pseudoRandomTypes = (minVal, maxVal) => {
    const minimum = Math.ceil(minVal);
    const maximum = Math.floor(maxVal);
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
  };
  React.useEffect(() => {
    const generateCards = () => {
      for (let i = 0; i < cardsAmount; i += 1) {
        cardsArr.push({ id: i, type: pseudoRandomTypes(min, max), active: false });
      }
    };
    generateCards();
    setCards(cardsArr);
    console.log(cardsArr);
  }, []);

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

  const updateState = (selectedCard) => {
    console.log('selectedCard', selectedCard);
    setCards(cards.map((card) => {
      if (card.id === selectedCard.id) { card.active = true; console.log(card); return card; }
      return card;
    }));
    console.log(cards);
  };

  const resetState = () => {
    setCards(cards.map((card) => {
      if (card.active) { card.active = false; return card; } return card;
    }));
  };
  const onCardClick = (id, type) => {
    if (!selectedCardOne.current) {
      selectedCardOne.current = { id, type };
      updateState(selectedCardOne.current);
      timeout.current = setTimeout(() => { clearSelection(); resetState(); console.log('timeout 5000'); }, 5000);
    } else {
      selectedCardTwo.current = { id, type };
      updateState(selectedCardTwo.current);
    }
    console.log('1st Card', selectedCardOne.current);
    console.log('2nd Card', selectedCardTwo.current);

    // eslint-disable-next-line max-len
    if (selectedCardOne.current?.type === selectedCardTwo.current?.type && selectedCardOne.current?.id !== selectedCardTwo.current?.id) {
      handleMatch();
    } else if (selectedCardOne.current && selectedCardTwo.current) {
      setTimeout(() => { resetState(); clearSelection(); console.log(timeout.current); clearTimeout(timeout.current); console.log('reset'); }, reactionTime);
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

export default Cards;
