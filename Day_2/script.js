'use strict'

const player0 = document.querySelector('#player1');
const player1 = document.querySelector('#player2');
const score0  = document.querySelector('#score1');
const score1  = document.querySelector('#score2');
const dice    = document.querySelector('.dice');
const btnNew  = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const current0 = document.querySelector('#current1');
const current1 = document.querySelector('#current2');

score0.textContent = 0;
score1.textContent = 0;
current0.textContent = 0;
current1.textContent = 0;
dice.classList.add('hidden');

const scores = [0, 0]; 
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function() {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber); 

    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
        currentScore += diceNumber;
        document.querySelector(`#current${activePlayer + 1}`).textContent = currentScore;
    }else {
        currentScore = 0;
        document.querySelector(`#current${activePlayer + 1}`).textContent = currentScore;   
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0.classList.toggle('active');
        player1.classList.toggle('active');
    }
});

btnHold.addEventListener('click', function() {

    scores[activePlayer] += currentScore;
    document.querySelector(`#score${activePlayer + 1}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 99) {
        document.querySelector(`#p${activePlayer + 1}`).textContent = 'winner';
        dice.classList.add('hidden');
        btnRoll.disabled = true;
        btnHold.disabled = true;
    } else {
        currentScore = 0;
        document.querySelector(`#current${activePlayer + 1}`).textContent = currentScore;   
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0.classList.toggle('active');
        player1.classList.toggle('active');
    }
});

btnNew.addEventListener('click', function() {
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    activePlayer = 0;   
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    document.querySelector('#p1').textContent = 'Player 1';
    document.querySelector('#p2').textContent = 'Player 2';
    dice.classList.add('hidden');
    btnRoll.disabled = false;
    btnHold.disabled = false;
    player0.classList.add('active');
    player1.classList.remove('active');
});
