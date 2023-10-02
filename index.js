var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Aman",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
  options: ['2005', '2008','2010','2012'],
  answer: "2008"
}, {
  question: "What is the name of Thor’s hammer?",
  options: ["Vanir","Mjolnir","Aesir","Norn"],
  answer: "Mjolnir"
},
{
  question: "What is Captain America’s shield made of?",
  options: ['Adamantium','Vibranium','Promethium','Carbonadium'],
  answer: "Vibranium"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " DO YOU KNOW Marvel?");
  console.log("-------------");
  console.log("Please write number in front of right answer");
  console.log("-------------");
}

// play function
function play(question,option, answer) {
  // console.log("shkdl");
  var userAnswer = readlineSync.keyInSelect(option,question);
  
  if (option[userAnswer] === answer) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.options, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
