/*------------ Constants(winning combos) ------------*/


/*------------ Variables (State of the Game) ------------*/
let winner 
let connectFour 
let tie 
let player

/*---- Cached Element References ----*/
const tileEls = document.querySelectorAll(".tile")
const introEl = document.querySelector("#intro")
const messageEl = document.querySelector("#message")
/*----------Event Listeners-----------*/
document.addEventListener("click", handleClick)

/*------------ Functions ------------*/
function init() {
  connectFour = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,];
  turn = 1;
  winner = false;
  tie = false;
  render()
}
init()
// set to the side for now you set up the init function for the board 
function render(){
  updateConnect()
  updateMessage()
}

function updateConnect() {
  connectFour.forEach(function (tile, index) {
    if (tile === -1) {
     tileEls[index].textContent =
     "Red";
      return
    }
     if (tile === 1){
      tileEls[index].textContent =
      "Black";
      return
     }
     if (tile === null) {
      tileEls[index].textContent =
      "";
      return
     }
  })
}
updateConnect()
//update Msg
function updateMessage() {
  if (winner === false && tie === false && turn == -1) {
    messageEl.textContent = "Player Heart Turn"
  } else if (winner === false && tie === false && turn == 1) {
    messageEl.textContent = "Player Spade Turn"
  } else if (winner === true && tie === false && turn == 1) {
    messageEl.textContent = "Player Heart Wins!"
  } else if (winner === true && tie === false && turn == -1) {
    messageEl.textContent = "Player Spade Wins!"
  } else {
    messageEl.textContent = "It's a Bloody Tie How?"
  }
}

function handleClick(evt) {
  const sqIdx = evt.target.id
  let numIdx = parseInt(sqIdx.charAt("tile"))
  let connectFourIdx = connectFour[numIdx]
  console.log(sqIdx)
  if (connectFourIdx !== null || winner === true){
    return
  }
  placePiece(numIdx)
  checkForTie()
  checkForWinner()
  switchPlayerTurn()
  render()
}
//above is correct
function placePiece(index){
  connectFour[index] = turn

}
console.log(placePiece)

function checkForTie() {
  if (!connectFour.includes(null)){
    tie = true
  }
}

function checkForWinner(){
  winningCombos.forEach(function(winCombos) {
    let sum = winCombos.reduce(function(alpha,num){
      return alpha + connectFour[num]
    },0);
      if(Math.abs(sum)===3){
        winner = true
      }
  })
}

function switchPlayerTurn(){
  if (winner === true) {
    return
  } if (winner === false) {
    turn *= -1
  }
}



// 1)Define the needed variables to keep track of the state of the game.
// 1a)variables that should be defined
// cnt4board
// winner
//loser maybe not cause if you have two truthys you can make loser a falsy
// tie


// 2)Store the cached elements 
// name constants I wanna make them circles so tileEls youre gonna need to store 7x6 so it would be 42 circles
// we want messages to appear so make a msg element.
// set up click and btns and event listeners as well but after our base script is set up 
// 


//3) try loading the game, see if its rendering. User should be able to view it Don't forget to add some css so youre not looking at a white board.
//a)Create the needed functions to render the board. so you need to store an array for the 42 elements

//b)create a render function to see if the board is rendered above is repeated but more research is req.


// c)css imagine the board make it a grid of (Length by Width) 7 x 6 thats how many playable spaces should be




//4)Render the board console.log to make sure once that happens you can start using functions to add using the variables

//a)you need functions for a tie, taking turns, a winner, a loser, a random math generator so adding a computer too for single players.

//b) you wanna make functions for the changing state of the game.
// write out winning combos. Diagnally and linear connecting four in a row  I think maybe more than 8 ways to win?

// c) add evt listeners for handling actions like player click then write functions for input by the user.

// d)you also want to check for chip placements check for winner, tie and loser, as well player turns

// e)if game works make a reset button
//5 Make it pretty for Ben not confetti maybe stars going everywhere