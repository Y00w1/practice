"use strict";
function isPerfectSquare(number) {
    let square = Math.sqrt(number);
    return (square * square === number);
}
function isFibonacci(number) {
    return isPerfectSquare(5 * number * number + 4) || isPerfectSquare(5 * number * number - 4);
}
function isPrimeNumber(number) {
    let a = Math.floor(Math.random() * (number - 2)) + 2;
    return Math.pow(a, number) % number == a % number;
}
function isEven(number) {
    return number % 2 == 0;
}
function setAnswer(number) {
    let answer = number + ' ';
    answer += isPrimeNumber(number) ? 'es primo' : 'no es primo';
    answer += isFibonacci(number) ? ', fibonacci' : ', no es fibonacci';
    answer += isEven(number) ? ' y es par.' : ' y es impar.';
    return answer;
}
document.addEventListener('DOMContentLoaded', () => {
    const number = document.getElementById('checkNumber');
    const answer = document.getElementById('answer');
    const btnCheck = document.getElementById('btnCheck');
    btnCheck.addEventListener('click', (event) => {
        if (number.value != '') {
            answer.textContent = setAnswer(parseInt(number.value));
        }
        else {
            answer.textContent = 'Ingrese un número válido';
        }
    });
    const home = document.getElementById('home');
    home.addEventListener('click', (event) => {
        window.location.href = '../index.html';
    });
});
//# sourceMappingURL=checkNumber.js.map