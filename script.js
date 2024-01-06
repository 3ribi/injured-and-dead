'use strict';
let history = [];
let score = 0;
let highscore = 100;
// Generate a random 4-digit number
let randomNumber = generateRandomNumber();
console.log(randomNumber);

// Function to generate a random 4-digit number
function generateRandomNumber() {
  let digits = [];
  while (digits.length < 4) {
    const digit = Math.floor(Math.random() * 10);
    if (!digits.includes(digit)) {
      digits.push(digit);
    }
  }
  return digits.join('');
}

// Function to set a message
function setMessage(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', checkGuess);

function checkGuess() {
  const guess = document.querySelector('.guess').value;

  // Check if the guess is a 4-digit number
  if (!/^\d{4}$/.test(guess)) {
    setMessage('Please enter a 4-digit number.');
    return;
  }

  score++;
  document.querySelector('.score').textContent = score;

  // Initialize counts for correct digits at the same position (d) and correct digits at different positions (i)
  let d = 0;
  let i = 0;

  // Compare the guess with the random number
  for (let j = 0; j < 4; j++) {
    if (guess[j] === randomNumber[j]) {
      d++;
    } else if (randomNumber.includes(guess[j])) {
      i++;
    }
  }

  const result = {
    guess,
    d,
    i,
  };

  history.push(result);

  if (d === 4) {
    setMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = randomNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score < highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.body.classList.add('win-style'); // Add a CSS class to change the page style
  } else {
    setMessage(`${score}=> Dead: ${d} Hurt: ${i}`);
    displayHistory();
  }
}

function displayHistory() {
  const historyDiv = document.getElementById('attempts');
  historyDiv.innerHTML = '<h2>Attempts History</h2>';
  history.forEach((result, index) => {
    const attemptDiv = document.createElement('div');
    attemptDiv.innerHTML = `<strong> ${index + 1}=></strong> Guess:${
      result.guess
    }, D:${result.d}, H:${result.i}`;
    historyDiv.appendChild(attemptDiv);
  });
}

document.querySelector('.again').addEventListener('click', function () {
  score = 0;
  randomNumber = generateRandomNumber();
  console.log(randomNumber);

  // document.querySelector('.message').textContent = 'Start guessing...';
  setMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.getElementById('attempts').innerHTML = ' ';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  history = [];
});
