'use strict';

// console.log(document.querySelector('.message').textContent);

// console.log(
//   (document.querySelector('.message').textContent = '🤲 Correct answer!')
// );

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 25;

// document.querySelector('.guess').value = 57;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);

  if (guessValue === 0) {
    document.querySelector('.message').textContent = '👎 NO INPUT';
  } else if (guessValue === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = 'Correct Answer🙀';

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessValue < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too low📉';
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game😔';
    }
  } else if (guessValue > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too high';
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game😔';
    }
  }
});
