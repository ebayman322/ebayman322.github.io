// array to store the captchas
const captchas = [
  {
    image: 'https://i.imgur.com/RirXFtZ.jpg',
    solution: 'CAPTCHAS SUCK'
  },
  {
    image: 'https://i.imgur.com/CJFsVFH.jpg',
    solution: 'I swear Im not a Robot!'
  },
  {
    image: 'https://i.imgur.com/G8h9hHV.jpg',
    solution: 'blame Canada'
  }
];

// array to store the leaderboard data
const leaderboard = [
  {
    name: 'Alice',
    time: 45
  },
  {
    name: 'Bob',
    time: 60
  },
  {
    name: 'Charlie',
    time: 75
  }
];

// variable to store the current captcha index
let currentCaptchaIndex = 0;

// variable to store the start time for the current captcha
let startTime;

// function to display the current captcha
function displayCaptcha() {
  // get the current captcha
  const captcha = captchas[currentCaptchaIndex];

  // update the captcha image
  const captchaEl = document.getElementById('captcha');
  captchaEl.src = captcha.image;

  // reset the start time
  startTime = Date.now();
}

// function to handle the form submission
function handleFormSubmission(event) {
  // prevent the default form submission behavior
  event.preventDefault();

  // get the user's response
  const response = document.getElementById('captcha-input').value;

  // check if the response is correct
  const captcha = captchas[currentCaptchaIndex];
  if (response === captcha.solution) {
    // if the response is correct, move on to the next captcha
    currentCaptchaIndex++;

    // if there are no more captchas, end the game
    if (currentCaptchaIndex >= captchas.length) {
      endGame();
      return;
    }

    // display the next captcha
    displayCaptcha();
  } else {
    // if the response is incorrect, display an error message
    const messageEl = document.getElementById('message');
    messageEl.textContent = 'Incorrect solution. Please try again.';
  }
}

// function to end the game and show the leaderboard
function endGame() {
  // calculate the elapsed time
  const elapsedTime = Date.now() - startTime;

  // prompt the user for their name
  const name = prompt('Congratulations, you solved all the captchas! Please enter your name for the leaderboard:');

  // add the user's score to the leaderboard
  leaderboard.push({
    name: name,
    time: elapsedTime
  });

  // sort the leaderboard by time
  leaderboard.sort((a, b) => a.time - b.time);

  // display the leaderboard
  displayLeaderboard();
}

// function to display the leaderboard
function displayLeaderboard() {
  // create an HTML string for the leaderboard
 
