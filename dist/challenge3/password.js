"use strict";
const uppercaseChars = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const numbersChars = '0123456789';
const symbolsChars = '!#$%&?¡@-_.,*';
function generatePassword(size, uppercase, numbers, symbols) {
    let password = '';
    let characters = 'abcdefghijklmnñopqrstuvwxyz';
    characters += uppercase ? uppercaseChars : '';
    characters += numbers ? numbersChars : '';
    characters += symbols ? symbolsChars : '';
    for (let i = 0; i < size; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('range');
    const sliderValue = document.getElementById('rangeValue');
    slider.addEventListener('click', () => {
        sliderValue.textContent = slider.value;
    });
    const form = document.getElementById('passwordOptions');
    const uppercaseCheck = form.elements.namedItem('uppercase');
    const numbersCheck = form.elements.namedItem('numbers');
    const symbolsCheck = form.elements.namedItem('symbols');
    const passwordGenerated = document.getElementById('password');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let password = generatePassword(parseInt(slider.value), uppercaseCheck.checked, numbersCheck.checked, symbolsCheck.checked);
        passwordGenerated.textContent = password;
    });
    const home = document.getElementById('home');
    home.addEventListener('click', (event) => {
        window.location.href = '../index.html';
    });
});
//# sourceMappingURL=password.js.map