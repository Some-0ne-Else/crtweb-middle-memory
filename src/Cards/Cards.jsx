import './Cards.css';
import React from 'react';
import Card from '../Card/Card';
import cardsAmount from '../utils/constants';

const Cards = () => {
  const cardsArr = [];

  // random generation
  const generateCards = () => {
    for (let i = 0; i < cardsAmount; i += 1) {
      cardsArr.push({ id: i, type: 1 });
    }
  };
  generateCards();
  console.log(cardsArr);
  const onCardClick = (type) => {
    console.log(type);
  };
  return (
    <main className="cards">
      {cardsArr.map((card) => (
        <Card key={card.id} type={card.type} onClick={onCardClick} />
      ))}
    </main>
  );
};

export default Cards;
