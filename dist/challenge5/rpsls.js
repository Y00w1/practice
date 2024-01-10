"use strict";
const options = ['paper', 'rock', 'lizard', 'spock', 'scissors'];
const results = ['empata', 'gana', 'pierde'];
function bot() {
    return options[Math.floor(Math.random() * 4)];
}
function checkWinner(player1, player2) {
    if (player1 === '' || player2 === '') {
        return '';
    }
    let indexPlayer1 = options.indexOf(player1);
    let indexPlayer2 = options.indexOf(player2);
    let difference = indexPlayer1 - indexPlayer2;
    if (difference < 0) {
        difference += options.length;
    }
    while (difference > 2) {
        difference -= 2;
    }
    return player1 + ' ' + results[difference] + ' ' + player2;
}
function choose(target) {
    if (target.tagName === 'IMG') {
        target = target.parentElement;
    }
    if (target.tagName === 'BUTTON') {
        return target.id;
    }
    else {
        return '';
    }
}
;
document.addEventListener('DOMContentLoaded', () => {
    const gameModes = document.getElementsByName('gameModes');
    let selected = 'gameMode1';
    let turnMsg = document.getElementById('turnMsg');
    let player1 = '';
    let player2 = '';
    for (let i = 0; i < gameModes.length; i++) {
        gameModes[i].addEventListener('change', () => {
            if (gameModes[i].checked) {
                selected = gameModes[i].value;
            }
            if (selected === 'gameMode2') {
                turnMsg.textContent = 'player 1 turn';
            }
        });
    }
    const options = document.getElementById('options');
    const winnerMsg = document.getElementById('winnerMsg');
    options.addEventListener('click', (event) => {
        let target = event.target;
        if (target.tagName === 'DIV') {
            return;
        }
        if (selected === 'gameMode1') {
            player1 = choose(target);
            player2 = bot();
        }
        else if (selected === 'gameMode2') {
            if (player1 === '') {
                player1 = choose(target);
                turnMsg.textContent = 'player 2 turn';
            }
            else {
                player2 = choose(target);
                turnMsg.textContent = 'player 1 turn';
            }
        }
        if (player1 !== '' && player2 !== '') {
            let winnerMessage = checkWinner(player1, player2);
            winnerMsg.textContent = winnerMessage;
            player1 = '';
            player2 = '';
        }
    });
    const home = document.getElementById('home');
    home.addEventListener('click', (event) => {
        window.location.href = '../index.html';
    });
});
//# sourceMappingURL=rpsls.js.map