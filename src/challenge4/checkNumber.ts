function isPerfectSquare(number: number): boolean{
    let square = Math.sqrt(number);
    return (square * square === number);
}
function isFibonacci(number: number): boolean{
    return isPerfectSquare(5*number*number + 4) || isPerfectSquare(5*number*number -4);
}
function isPrimeNumber(number: number): boolean{
    let a:number = Math.floor(Math.random() * (number-2) ) + 2;
    return Math.pow(a, number) % number == a % number;
}
function isEven(number:number):boolean {
    return number % 2 == 0;
}
function setAnswer(number:number): string{
    let answer = number + ' ';
    answer += isPrimeNumber(number) ? 'es primo' : 'no es primo';
    answer += isFibonacci(number) ? ', fibonacci' : ', no es fibonacci';
    answer += isEven(number) ? ' y es par.' : ' y es impar.';
    return answer;
}

document.addEventListener('DOMContentLoaded', () => {
    const number = document.getElementById('checkNumber') as HTMLInputElement;
    const answer = document.getElementById('answer') as HTMLParagraphElement;
    const btnCheck = document.getElementById('btnCheck') as HTMLButtonElement;

    btnCheck.addEventListener('click', (event) => {
        if (number.value != '') {
            answer.textContent = setAnswer(parseInt(number.value));
        }else{
            answer.textContent = 'Ingrese un número válido';
        }
    });

    //Return home
    const home = document.getElementById('home') as HTMLButtonElement;
    home.addEventListener('click', (event) => {
        window.location.href = '../index.html';
    });
});