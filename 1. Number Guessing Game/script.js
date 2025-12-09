
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When input / guess field is empty
  if (!guess) {
    document.querySelector('.message').textContent = 'Enter a number 🔢';
    document.querySelector('.message').style.color = '#ba6000ff';

    // When number is the same
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.secretNumber').textContent = secretNumber;
    document.querySelector('.highscore').textContent = score;

    document.querySelector('body').style.backgroundColor = '#a7f190ff';
    document.querySelector('.message').style.color = '#ba6000ff';

    // When number is too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Number too High ⬆️';
      document.querySelector('.message').style.color = '#0409a1ff';
      // score = score - 1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤣 You lost';
      document.querySelector('.message').style.color = '#a10423ff';
    }

    // When number is too low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Number too Low ⬇️';
      document.querySelector('.message').style.color = '#700381ff';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤣 You lost';
      document.querySelector('.message').style.color = '#a10423ff';
    }
  }
});

// Rest
document.querySelector('.reset').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing ...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.secretNumber').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#f7f7f7';
  document.querySelector('.message').style.color = '#0a0b0b';
});
