const scores: {[key: number]: string} = {
    0: 'Love', 1: '15', 2: '30', 3: '40', 4: 'Deuce', 5: 'Ventaja ', 6: 'Ha ganado el '
}

type player = {name: string, points: number, winner: boolean};
const p1: player = {
    name: 'P1',
    points: 0,
    winner: false
};
const p2: player = {
    name: 'P2',
    points: 0,
    winner: false
};

function point(playerA: player, playerB: player){    
    if (playerA.points == 5 && playerB.points == 4){
        playerA.points = 6;
        playerA.winner = true;
        return;
    }else if (playerA.points == 4 && playerB.points == 5) {
        playerB.points -= 1;
        return;
    }else if (playerA.points == 3 && playerB.points <=2){
        playerA.points = 6;
        playerA.winner = true;
        return;
    }else if (playerA.points == 3 && playerB.points == 3){
        playerA.points = 4;
        playerB.points = 4;
        return;
    }
    playerA.points += 1;
}

function reset(): void {
    p1.points = 0;
    p2.points = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    //Score table
    const scoreUl = document.getElementById('score') as HTMLUListElement;

    //players
    const player1 = document.getElementById('player1') as HTMLButtonElement;
    const player2 = document.getElementById('player2') as HTMLButtonElement;

    function handleClick(playerA: player, playerB: player){
        if(playerA.winner || playerB.winner) {
            player1.disabled = true;
            player2.disabled = true;
            return;
        }
        point(playerA, playerB);
        const scoreLi = document.createElement('li');
        if(playerA.points <= 3 && playerB.points <= 3){
            scoreLi.textContent = scores[p1.points] + ' - ' + scores[p2.points];
        }else if (playerA.points > playerB.points){
            scoreLi.textContent = scores[playerA.points] + playerA.name;
        }else if(playerA.points == playerB.points){
            scoreLi.textContent = scores[playerA.points];
        }else if(playerA.points == playerB.points){
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

    //Reset
    const btnReset = document.getElementById('btnReset') as HTMLButtonElement;
    btnReset.addEventListener('click', () => {
        reset();
        scoreUl.innerHTML = '';
    });

    //Return home
    const home = document.getElementById('home') as HTMLButtonElement;
    home.addEventListener('click', (event) => {
        window.location.href = '../index.html';
    });
});