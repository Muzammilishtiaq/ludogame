// Selecting Element
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
const scores = [0, 0];
let currentscore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent =
    0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentscore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
//Rolling dice functionaity
btnRoll.addEventListener("click", function () {
  //1. Gentrating a ramdom dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `image/dice-${dice}.png`;
  console.log(dice);

  //3. Check for rolled
  if (dice !== 1) {
    //Add dice to curreentscore
    currentscore = currentscore + dice;
    //  current0El.textContent = currentscore; //change later
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentscore;
  } else {
    //switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener("click", function () {
  //   Add current score to active player
  scores[activePlayer] += currentscore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];
  // check if player score is >= 100
  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`player--${activePlayer}`)
      .classList.add("player-winner");
      document
      .querySelector(`player--${activePlayer}`)
      .classList.add("player-active");
      
  }
  //finisch the game
  switchPlayer();

  //switch to the player
});

//new game funtion handle
btnNew.addEventListener('click',function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
})