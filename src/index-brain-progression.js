import readlineSync from 'readline-sync';

const getUsername = () => readlineSync.question('May I have your name? ');

const getRandomNumber = () => Math.round(Math.random() * 100);

const getRandomArrayLength = () => Math.round(Math.random() * 6 + 4);

const getRandomNumberToTen = () => Math.round(Math.random() * 10) + 1;

const startRound = () => {
  const arrayLength = getRandomArrayLength();
  const difference = getRandomNumberToTen();
  const progression = [getRandomNumber()];

  for (let i = 0; i < arrayLength; i += 1) {
    const intermediateVariable = progression[i] + difference;
    progression.push(intermediateVariable);
  }

  let indexProgression = getRandomNumberToTen();
  let correctAnswer;
  if (indexProgression < progression.length) {
    correctAnswer = progression[indexProgression];
    progression.splice(indexProgression, 1, '..');
  } else {
    indexProgression -= 5;
    correctAnswer = progression[indexProgression];
    progression.splice(indexProgression, 1, '..');
  }

  const str = progression.join(' ');
  console.log(`Question: ${str}`);
  const youAnswer = readlineSync.question('You answer: ');
  if (youAnswer === `${correctAnswer}`) {
    console.log('Correct!');
    return true;
  }
  console.log(`${youAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};

const gameBrainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const username = getUsername();
  console.log(`Hello, ${username}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRound();

    if (!isCorrect) {
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};

export default gameBrainProgression;
