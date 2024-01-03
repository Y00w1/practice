"use strict";
const scores = {
    0: 'Love', 1: '15', 2: '30', 3: '40', 4: 'Deuce', 5: 'Ventaja ', 6: 'Ha ganado el '
};
const p1 = {
    name: 'P1',
    points: 0,
    winner: false
};
const p2 = {
    name: 'P2',
    points: 0,
    winner: false
};
function point(playerA, playerB) {
    if (playerA.points == 5 && playerB.points == 4) {
        playerA.points = 6;
        playerA.winner = true;
        return;
    }
    else if (playerA.points == 4 && playerB.points == 5) {
        playerB.points -= 1;
        return;
    }
    else if (playerA.points == 3 && playerB.points <= 2) {
        playerA.points = 6;
        playerA.winner = true;
        return;
    }
    else if (playerA.points == 3 && playerB.points == 3) {
        playerA.points = 4;
        playerB.points = 4;
        return;
    }
    playerA.points += 1;
}
function reset() {
    p1.points = 0;
    p2.points = 0;
}
document.addEventListener('DOMContentLoaded', () => {
    const scoreUl = document.getElementById('score');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    function handleClick(playerA, playerB) {
        if (playerA.winner || playerB.winner) {
            player1.disabled = true;
            player2.disabled = true;
            return;
        }
        point(playerA, playerB);
        const scoreLi = document.createElement('li');
        if (playerA.points <= 3 && playerB.points <= 3) {
            scoreLi.textContent = scores[p1.points] + ' - ' + scores[p2.points];
        }
        else if (playerA.points > playerB.points) {
            scoreLi.textContent = scores[playerA.points] + playerA.name;
        }
        else if (playerA.points == playerB.points) {
            scoreLi.textContent = scores[playerA.points];
        }
        else if (playerA.points == playerB.points) {
            scoreLi.textContent = scores[p1.points];
        }
        scoreUl.appendChild(scoreLi);
    }
    player1.addEventListener('click', () => {
        handleClick(p1, p2);
    });
    player2.addEventListener('click', () => {
        handleClick(p2, p1);
    });
    const btnReset = document.getElementById('btnReset');
    btnReset.addEventListener('click', () => {
        reset();
        scoreUl.innerHTML = '';
    });
    const home = document.getElementById('home');
    home.addEventListener('click', (event) => {
        window.location.href = '../index.html';
    });
});
//# sourceMappingURL=tenis_match.js.map