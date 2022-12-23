/*------------ Constants(winning combos) ------------*/
let winningCombos = [ 
  [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
  [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
  [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
  [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
  [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
  [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
  [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
  [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
  [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
  [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
  [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
  [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
  [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
  [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
  [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
  [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
  [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
  [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
  [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
  [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
  [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
  [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
  [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
  ];
  /*--------constants-audio-----------------------------*/
 import * as audioJs from './audio.js'


/*------------ Variables (State of the Game) ------------*/
let winner 
let board 
let tie 
let turn
/*---- Cached Element References ----*/
const tileEls = document.querySelectorAll(".tile")
const messageEl = document.getElementById("message")
const resetBtnEl = document.querySelector('#reset')
/*----------Event Listeners-----------*/
tileEls.forEach(tile => tile.addEventListener('click', handleClick))
resetBtnEl.addEventListener('click',init)
/*------------ Functions ------------*/
function init() {
  board = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
  turn = 1;
  winner = false;
  tie = false;
  render()
 
}
init()

function render(){
  updateBoard()
  updateMessage()
}

function updateBoard() {
  board.forEach(function (tile, index) {
    if (tile === -1) {
     tileEls[index].innerHTML = '<img id="madeon" src="./Assets/madeon-neon-logo.png">';
     tileEls[index].classList.add("newton")
     
     return
    }
     else if (tile === 1){
      tileEls[index].innerHTML = '<img id="shelter" src="./Assets/shelter-logo-small.png">';
      tileEls[index].classList.add("newton")
      
      return
     }
      else  (tile === null); {
      tileEls[index].textContent =
      "";
      
      return
      }
  })
  
}

function updateMessage() {
  if (winner === false && tie === false && turn === -1) {
    messageEl.textContent = "Player Two's Turn"
  } else if (winner === false && tie === false && turn === 1) {
    messageEl.textContent = "Player One's Turn"
  } else if (winner === true && tie === false && turn === -1) {
    messageEl.textContent = "Player Two's Wins!"
  } else if (winner === true && tie === false && turn === 1) {
    messageEl.textContent = "Player One's Wins!"
  } else {
    messageEl.textContent = "It's a Bloody Tie How?"
  }
  
}

function handleClick(evt){
  const tileIdx = parseInt(evt.target.id.replace('tile', ''))
  if (board[tileIdx] || winner) return
  let physic = 35
  while (board[tileIdx + physic] !== null) {
    physic -= 7
  }
  board[tileIdx + physic] = turn
  audioJs.playkingDomhearts()
  render()
  switchPlayerTurn()
  updateMessage()
  checkForTie()
  checkForWinner()
}



function checkForTie() {
  if (board.includes(null)) return
     tie = true
  
}

function checkForWinner(){
  winningCombos.forEach(function(winCombos) {
    let sum = 0
    winCombos.forEach(function(index){
      sum += board[index]
    })
      if(sum === 4 || sum === -4){
        winner = true
      }
  })
}

function switchPlayerTurn(){
 if (!winner) 
    turn *= -1
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