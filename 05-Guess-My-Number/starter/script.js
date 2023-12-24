'use strict';

console.log(document.querySelector('.message').textContent);

console.log(
  (document.querySelector('.message').textContent = '🤲 Correct answer!')
);

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 25;

document.querySelector('.guess').value = 57;
