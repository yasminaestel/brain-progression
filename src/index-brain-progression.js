import readlineSync from 'readline-sync';

const startGames = () => {
  console.log('Welcome to the Brain Games!');
};

const getUsername = () => readlineSync.question('May I have your name? ');

const getRandomNumber = () => Math.floor(Math.random() * 100);

const getRandomArrayLength = () => Math.floor(Math.random() * 6 + 6);

const randomDiff = () => Math.floor(Math.random() * 10) + 1;

const startRound = () => {
  const fistIndex = getRandomNumber();
  const arrayLength = getRandomArrayLength();
  const difference = randomDiff();
  const progression = [fistIndex];

  for (let index = 1; index < arrayLength; index += 1) {
    const intermediateVariable = progression[index - 1] + difference;
    progression.push(intermediateVariable);
  }

  let number = difference;
  let correctAnswer;
  if (number < progression.length) {
    correctAnswer = progression[number];
    progression.splice(number, 1, '..');
  } else {
    number -= 5;
    correctAnswer = progression[number];
    progression.splice(number, 1, '..');
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
  startGames();
  const username = getUsername();
  console.log(`Hello, ${username}!`);

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
