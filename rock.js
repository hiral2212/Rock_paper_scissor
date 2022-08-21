let userScore = 0;
let computerScore = 0;
const userScore_Span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
/* set up the core function for the computer that will use math.random to loop through an array and return 
 that value */
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  /*array of rock paper and scissors */
  const randomNumber = Math.floor(Math.random() * choices.length); //generate random number choices with math.floor
  return choices[randomNumber];
  //floor function returns a random number between 0 and choices.length - 1
  //floor function returns largest ineger less than or equal to choices.length - 1
}
// similar to convertcase but just takes lowercase and replaces with titlecase
  // === operator  checks for string literal  its two operands are equal .=== operator checks the value and data types too.

//winnig function
//this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function win(user, computer) {
  //pass two arguments user and computer
  userScore++; //increment   the score   for the user
  console.log("user score is " + userScore + " " + user);
  userScore_Span.innerHTML = userScore;
  // const userName = ' (user)'.size(3).sup();
  //const compName = ' (comp)'.size(3).sup();
  result_div.innerHTML = `<p>${user} beats ${computer}. You win!</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add("winningStyles");
  setTimeout(() => roundStatus.classList.remove("winningStyles"), 300);
  //with out using arrow fucntion
  /* const  mytimeout=setTimeout(mtfunction , 300);
function mtfunction(){
  roundStatus.classList.remove('winningStyles');
}  */
}
// Losing Condition  of user and winning condition of the computer - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function loses(user, computer) {
  computerScore++;
  console.log("computer score is " + computerScore + " " + computer);
  computerScore_span.innerHTML = computerScore;
  // const userName = ' (user)'.size(3).sup();
  //const compName = ' (comp)'.size(3).sup();
  result_div.innerHTML = `<p>${computer} beats ${user}. You lose!</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add("losingStyles");
  setTimeout(() => roundStatus.classList.remove("losingStyles"), 300);
}
// Draw Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function draw(user, copmuter) {
  //const userName = ' (user)'.size(3).sup();
  //const compName = ' (comp)'.size(3).sup();
  result_div.innerHTML = `<p>It was a draw! You both chose ${user}</p>`;
  // "It was a draw! You both chose " + user + " " + computer; // old js
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add("drawStyles");
  setTimeout(() => roundStatus.classList.remove("drawStyles"), 300);
}
// The core game functions that set up and determine the games actual logic aka paper beats rock etc
function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("Game function: user choice is = " + userChoice);
  console.log("Game function: computer choice is = " + computerChoice);
  switch (userChoice + computerChoice) {
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      win(userChoice, computerChoice);
      console.log("user win");
      break;

    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      loses(userChoice, computerChoice);
      console.log("computer wins");
      break;
    case "rockrock":
    case "scissorsscissors":
    case "paperpaper":
      draw(userChoice, computerChoice);
      console.log("draw");
      break;
  }
}
function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
    getComputerChoice();
  });
  paper_div.addEventListener("click", function () {
    game("paper");
    getComputerChoice();
  });
  scissors_div.addEventListener("click", function () {
    game("scissors");
    getComputerChoice();
  });
}
main();
