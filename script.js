// assign all clickable elements to useable variables

const red = document.getElementById(`colorRed`);

const blue = document.getElementById(`colorBlue`);

const yellow = document.getElementById(`colorYellow`);

const green = document.getElementById(`colorGreen`);

const onButton = document.getElementById("on");

const start = document.getElementById("start");

const turnCounter = document.getElementById("turn");

// instantiate player and cpu arrays, score, current round, color sequence , colors used, and win variable

var simonSaysArray = [];

var playerArray = [];

var score = 0;

var currentRound = 0;

var sequence = 0;

var colors = [`red`, `blue`, `green`, `yellow`];

let win;

// variable listed below were taken from example https://aiyentam.github.io/Simon-Says/

// var simonSays = {

//   started: false,

//   quit: false,

// };

// console.log(simonSays)

//on button logic

onButton.addEventListener("click", e => {
  if (onButton.checked == true) {
    on = true;

    turnCounter.innerHTML = "-";
  } else {
    on = false;

    turnCounter.innerHTML = "";

    clearColor();

    clearInterval(intervalId);
  }
});

// start game logic

start.addEventListener("click", e => {
  if (on == true || win) {
    play();
  } else {
    alert('please click the "on" button');
  }
});

//return simon circles to original colors

clearColor = () => {
  green.style.backgroundColor = "green";

  yellow.style.backgroundColor = "goldenrod";

  blue.style.backgroundColor = "blue";

  red.style.backgroundColor = "red";
};

// play game logic

play = () => {
  (win = false), (simonSaysArray = []);

  playerArray = [];

  flash = 0;

  intervalId = 0;

  turn = 1;

  turnCounter.innerHTML = 1;

  good = true;

  for (var i = 0; i < 20; i++) {
    simonSaysArray.push(colors[Math.floor(Math.random() * 4)]);
  }

  computerTurn = true;

  intervalId = setInterval(gameTurn, 800);

  console.log(simonSaysArray);
};

// determine whose turn it is

gameTurn = () => {
  on = false;

  if ((flash = turn)) {
    clearInterval(intervalId);

    computerTurn = false;

    clearColor();

    on = true;
  }

  if (computerTurn) {
    clearColor();

    setTimeout(() => {
      if (simonSaysArray[flash] == 1) oneGreen();

      if (simonSaysArray[flash] == 2) twoYellow();

      if (simonSaysArray[flash] == 3) threeRed();

      if (simonSaysArray[flash] == 4) fourBlue();

      flash++;
    }, 200);
  }
};

// functions to light simon circles

oneGreen = () => {
  green.style.backgroundColor = "lightgreen";
};

twoYellow = () => {
  yellow.style.backgroundColor = "yellow";
};

threeRed = () => {
  red.style.backgroundColor = "lightred";
};

fourBlue = () => {
  blue.style.backgroundColor = "lightskyblue";
};

// end simon light functions

// clickable button logic

red.addEventListener("click", function(evt) {
  evt.preventDefault();

  console.log("red is working");

  playerArray.push("red");

  console.log(playerArray);

  // checkColors();

  threeRed();

  if (!win) {
    setTimeout(() => {
      clearColor();
    }, 300);
  }
});

blue.addEventListener("click", function(evt) {
  evt.preventDefault();

  console.log("blue is working");

  playerArray.push("blue");

  console.log(playerArray);

  // checkColors();

  fourBlue();

  if (!win) {
    setTimeout(() => {
      clearColor();
    }, 300);
  }
});

yellow.addEventListener("click", function(evt) {
  evt.preventDefault();

  console.log("yellow is working");

  playerArray.push("yellow");

  console.log(playerArray);

  // checkColors();

  twoYellow();

  if (!win) {
    setTimeout(() => {
      clearColor();
    }, 300);
  }
});

green.addEventListener("click", function(evt) {
  evt.preventDefault();

  console.log("green is working");

  playerArray.push("green");

  console.log(playerArray);

  // checkColors();

  oneGreen();

  if (!win) {
    setTimeout(() => {
      clearColor();
    }, 300);
  }
});

//check colors logic

checkColors = () => {
  if (
    playerArray[playerArray.length - 1] !==
    simonSaysArray[playerArray.length - 1]
  )
    good = false;
  if (playerArray.length == 20 && good) {
    winGame();
  }
  if (good == false) {
    flashColor();
    turnCounter.innerHTML = "No!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();
    }, 800);
  }
};

// old code below

// on click start -> run handleStart function

function handleStart(evt) {
  evt.preventDefault();

  console.log("button is working");

  // Push random color(s)

  simonSaysArray.push(colors[Math.floor(Math.random() * 4)]);

  for (let i = 0; i <= simonSaysArray.length; i++) {}

  console.log(simonSaysArray);

  //user inputs color

  checkColors();
}

function clearGame() {
  currentRound = 0;

  simonSaysArray = [];

  playerArray = [];
}
