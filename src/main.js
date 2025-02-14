import "./style.css";

document.querySelector("#app").innerHTML = `
    <main>
      <section class="player player--0 player--active">
        <h2 class="name" id="name--0">Player 1</h2>
        <p class="score" id="score--0">43</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--0">3</p>
        </div>
      </section>
      <section class="player player--1">
        <h2 class="name" id="name--1">Player 2</h2>
        <p class="score" id="score--1">24</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--1">5</p>
        </div>
      </section>

      <img src="dice-5.png" alt="Playing dice" class="dice" />
      <button class="btn btn--new">🔄 New game</button>
      <button class="btn btn--roll">🎲 Roll dice</button>
      <button class="btn btn--hold">📥 Hold</button>
    </main>

`;

// variables de estado en JS y selectores DOMXS

// activePlayer -> variable de estado en JS
const sectionPlayer0 = document.querySelector(".player--0");
const sectionPlayer1 = document.querySelector(".player--1");
// score = [0,0] -> variable de estado en JS
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");

// current -> variable de estado en JS
const currentScore0 = document.querySelector("#current--0");
const currentScore1 = document.querySelector("#current--1");

const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");

const imgDice = document.querySelector(".dice");

let score, currentScore, activePlayer;

const initData = () => {
  // init state variables
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  // init DOM elements
  imgDice.classList.add("hidden");
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
};

initData();

btnRoll.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  imgDice.src = `dice-${dice}.png`;
  imgDice.classList.remove("hidden");

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
  } else {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    sectionPlayer0.classList.toggle("player--active");
    sectionPlayer1.classList.toggle("player--active");
  }
}
);

btnHold.addEventListener("click", () => {
  score[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

  if (score[activePlayer] >= 100) {
    document.querySelector(`#name--${activePlayer}`).textContent = "Winner!";
    imgDice.classList.add("hidden");
    //and change the css of the winner player player
    document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    sectionPlayer0.classList.toggle("player--active");
    sectionPlayer1.classList.toggle("player--active");
  }
});

btnNew.addEventListener("click", initData);
