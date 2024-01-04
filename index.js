document.addEventListener('DOMContentLoaded', () => {
    const challenge1 = document.getElementById('challenge1');
    const challenge2 = document.getElementById('challenge2');
    const challenge3 = document.getElementById('challenge3');
    challenge1.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = './view/challenge1.html';
    });
    challenge2.addEventListener('click', (event) => {
        window.location.href = './view/challenge2.html';
    });
    challenge3.addEventListener('click', (event) => {
        window.location.href = './view/challenge3.html';
    });
});