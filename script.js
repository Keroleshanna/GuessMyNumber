'use strict';

let secritNumber = Math.trunc(Math.random() * 20 + 1);

let body = document.querySelector('body');
let btnCheck = document.querySelector('.check');
let message = document.querySelector('.message');
let labelScore = document.querySelector('.label-score');
let score = Number(document.querySelector('.score').textContent);
let inputNumber = document.querySelector('.guess');
let showNumber = document.querySelector('.number');
let labelHighScore = document.querySelector('.label-highscore');
let highScore = Number(document.querySelector('.highscore').textContent);
let btnAgain = document.querySelector('.again');

btnCheck.addEventListener('click', function () {
  let inputNumber = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (inputNumber === secritNumber) {
      message.textContent = '🎉 Correct Number!';
      showNumber.textContent = secritNumber;
      body.style.backgroundColor = '#60b347';
      if (highScore < score)
        labelHighScore.textContent = `🥇 Highscore: ${score}`;
      highScore = score;
    } else {
      if (!inputNumber) {
        message.textContent = '❗ No Number...';
      } else if (inputNumber < secritNumber) {
        message.textContent = '👇 Too low!';
      } else if (inputNumber > secritNumber) {
        message.textContent = '👆 To high!';
      }
      labelScore.textContent = `💯 Score: ${--score}`;
    }
  } else {
    if (score > 0) {
      message.textContent = '👎 Game over ....';
      labelScore.textContent = `💯 Score: ${--score}`;
    }
  }
});

btnAgain.addEventListener('click', function () {
  secritNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secritNumber);
  message.textContent = 'Start guessing...';
  body.style.backgroundColor = '#222';
  showNumber.textContent = '?';
  score = 20;
  labelScore.textContent = `💯 Score: ${score}`;
  document.querySelector('.guess').value = null;
});
