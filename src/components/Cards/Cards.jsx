import './Cards.css';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { REACTION_TIME, COMPARE_WINDOW } from '../../utils/constants';
import {
  selectCard,
  checkMatch,
  clearSelection,
  activateCard,
  resetActiveState,
} from '../../services/actions';

const Cards = ({ onFinish }) => {
  const { cards, selectedCards } = useSelector((store) => ({
    cards: store.cards,
    selectedCards: store.selectedCards,
  }));
  const dispatch = useDispatch();
  const timeout = React.useRef();

  React.useEffect(() => {
    if (!cards.length) { onFinish(); }
  }, [cards]);

  const checkCards = () => {
    setTimeout(() => {
      dispatch(checkMatch());
      dispatch(clearSelection());
      clearTimeout(timeout.current);
    }, REACTION_TIME);
  };

  const onCardClick = (id, type) => {
    if (selectedCards.length < 1) { // only one card selected
      dispatch(selectCard({ id, type }));
      dispatch(activateCard({ id }));
      timeout.current = setTimeout(() => {
        dispatch(clearSelection());
        dispatch(resetActiveState());
      }, COMPARE_WINDOW);
    } else {
      dispatch(selectCard({ id, type }));
      dispatch(activateCard({ id }));
      checkCards();
      setTimeout(() => {
        dispatch(resetActiveState());
        dispatch(clearSelection());
        clearTimeout(timeout.current);
      }, REACTION_TIME);
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
