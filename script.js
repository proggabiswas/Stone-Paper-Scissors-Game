let userScore=0;
let compScore=0;

let logoes = document.querySelectorAll(".logo");
let playerWin =document.querySelector("#player-score");
let computerWin =document.querySelector("#computer-score");
let msg = document.querySelector("#msg");

const genCompChoice=()=>{
    const choices=["rock","paper","scissors"];
    const randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
}

const drawGame=()=>{
    msg.innerText="Game was draw.Play again";
    msg.style.backgroundColor ="#081b31";
}
const showWinner = (userWin, playerChoice, compChoice) => {
    if (userWin) {
      userScore++;
      playerWin.innerText = userScore;
      msg.innerText = `You win! Your ${playerChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      computerWin.innerText = compScore;
      msg.innerText = `You lost. ${compChoice} beats your ${playerChoice}`;
      msg.style.backgroundColor = "red";
    }
};
  
const playGame = (playerChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();
  
    if (playerChoice === compChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;
      if (playerChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (playerChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner( userWin, playerChoice, compChoice);
    }
  };

logoes.forEach((logo)=>{
    logo.addEventListener("click",()=>{
      const playerChoice= logo.getAttribute("id");
      console.log("choice was clicked",playerChoice);
       playGame(playerChoice);
    })
})