import './Cards.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { COMPARE_WINDOW, CLOSE_WINDOW } from '../../utils/constants';
import {
  selectCard,
  checkMatch,
  clearSelection,
  disableOtherCards,
  resetCardStatus,
  nextGameStep,
} from '../../services/actions';

const Cards = () => {
  const { cards, selectedCards } = useSelector((store) => ({
    cards: store.cards,
    selectedCards: store.selectedCards,
  }));
  const dispatch = useDispatch();
  const timeout = React.useRef();

  React.useEffect(() => {
    if (cards.filter((el) => el.finded === false).length === 0) { dispatch(nextGameStep()); }
  }, [cards]);

  const onCardClick = (id, type) => {
    if (selectedCards.length === 0) {
      dispatch(selectCard({ id, type }));
      timeout.current = setTimeout(() => {
        dispatch(clearSelection());
        dispatch(resetCardStatus());
      }, COMPARE_WINDOW);
    } else {
      dispatch(selectCard({ id, type }));
      dispatch(disableOtherCards());
      setTimeout(
        () => {
          dispatch(checkMatch());
          dispatch(clearSelection());
          dispatch(resetCardStatus());
          clearTimeout(timeout.current);
        }, CLOSE_WINDOW,
      );
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
          finded={card.finded}
          disabled={card.disabled}
          onClick={onCardClick}
        />
      ))}
    </main>
  );
};

export default Cards;
