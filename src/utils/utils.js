import { cardsAmount, min, max } from './constants';
// Generating data for game
const pseudoRandomTypes = (minVal, maxVal) => {
  const minimum = Math.ceil(minVal);
  const maximum = Math.floor(maxVal);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

const generateTypes = () => {
  const typesArr = [];
  while (typesArr.length < cardsAmount) {
    const currVal = pseudoRandomTypes(min, max);
    if (typesArr.filter((item) => item === currVal).length < 2) { typesArr.push(currVal); }
  }
  return typesArr;
};

const generateCards = (types) => {
  const cardsArr = [];
  for (let i = 0; i < cardsAmount; i += 1) {
    cardsArr.push({ id: i, type: types[i], active: false });
  }
  return cardsArr;
};

export { generateTypes, generateCards };
