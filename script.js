let red = document.getElementById(`colorRed`)
let blue = document.getElementById(`colorBlue`)
let yellow = document.getElementById(`colorYellow`)
let green = document.getElementById(`colorGreen`)
// let start = document.getElementById(`start`)

var start = document.querySelector('#start')

var simonSaysArray = [];
var playerArray = [];
var score = 0;
var currentRound = 0;
var sequence = 0;
var colors = [`red`, `blue`, `green`, `yellow`];

// variable listed below were taken from example https://aiyentam.github.io/Simon-Says/

var simonSays = {
    started: false,
    quit: false,
    // end of used code
    sound: {
        blue: new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound1.mp3`),
        red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
        yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
        green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
    }
}
console.log(simonSays);

// var startCycle = function (arr) {
//     return arr.push(simonSays.colors[Math.floor(Math.random() * 4)])
// }




start.addEventListener('click', handleStart)

function handleStart(evt) {
    evt.preventDefault()
    console.log('button is working');
    // Push random color(s)

    simonSaysArray.push(colors[Math.floor(Math.random() * 4)])
    for(let i = 0; i <= simonSaysArray.length; i++){  
        
    }

    console.log(simonSaysArray);
    
}


red.addEventListener('click', function (evt) {

    evt.preventDefault()
    console.log('red is working');
    playerArray.push('red');
    console.log(playerArray);

}
)

blue.addEventListener('click', function (evt) {

    evt.preventDefault()
    console.log('blue is working');
    playerArray.push('blue');
    console.log(playerArray);
}
)

yellow.addEventListener('click', function (evt) {

    evt.preventDefault()
    console.log('yellow is working');
    playerArray.push('yellow');
    console.log(playerArray);
}
)

green.addEventListener('click', function (evt) {

    evt.preventDefault()
    console.log('green is working');
    playerArray.push('green');
    console.log(playerArray);
    
}
)

function checkColors(){
    for(let i = 0; i < simonSaysArray.length; i++) {
        if (simonSaysArray[i] === playerArray[i]){
            console.log('correct');
            playerArray = []
            handleStart();
            
        }
        else {
            console.log('incorrect');
            clearGame();
            
            
        }
        
    }
        
    }








// function startCycle(arr) {

//     return arr.push(simonSays.colors)
// }


// function startSimonTimer() {
//     var i = 0;
//     var setTimer = setInterval(function () {
//         $('#color' + simonSays.simonSaysArray[i]).fadeTo('slow', 0).fadeTo('slow', 1); i++;
//         if (i >= simonSays.simonSaysArray.length) {
//             clearInterval(setTimer);
//         }

//     }, 1500);
// };


function clearGame() {
        currentRound = 0
        simonSaysArray = []
        playerArray = []
}

// function clearAnswers() {
//     return (
//         simonSays.playerArray = []
//     )
// }

// function nextRound() {
//     simonSays.currentRound++;
// }

// function resetSimon() {
//     simonSays.currentRound = 0;
//     simonSays.simonSaysArray = [];

// }


// function startGame() {
//     if (simonSays.currentRound === 10) {
//         alert("please stop!");
//     }
//     clearGame();
// }

// nextRound();

// startCycle(simonSays.simonSaysArray);
// startSimonTimer(simonSays.simonSaysArray);

// $('button').off('click').on('click', function () {
//     simonSays.playerArray.push($(this).attr('id'));

//     for (var i = 0; i < simonSays.playerArray.length; i++) {
//         // stringify concept taken from example https://aiyentam.github.io/Simon-Says/
//         if (JSON.stringify(simonSays.simonSaysArray) === JSON.stringify(simonSays.playerArray)) {
//             clearAnswers();
//             startGame();
//             break;
//         }

//         if (simonSays.simonSaysArray[i] !== simonSays.playerArray[i]) {
//             alert ('Sorry, you lose');
//             resetSimon();
//         }
    

// }




// }




// );

