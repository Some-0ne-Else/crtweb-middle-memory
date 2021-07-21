import { CARDS_AMOUNT, MIN, MAX } from './constants';
// Generating data for game
const pseudoRandomTypes = (minVal, maxVal) => {
  const minimum = Math.ceil(minVal);
  const maximum = Math.floor(maxVal);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

const generateTypes = () => {
  const typesArr = [];
  while (typesArr.length < CARDS_AMOUNT) {
    const currVal = pseudoRandomTypes(MIN, MAX);
    if (typesArr.filter((item) => item === currVal).length < 2) { typesArr.push(currVal); }
  }
  return typesArr;
};

const generateCards = (types) => {
  const cardsArr = [];
  for (let i = 0; i < CARDS_AMOUNT; i += 1) {
    cardsArr.push({ id: i, type: types[i], active: false });
  }
  return cardsArr;
};

export { generateTypes, generateCards };
