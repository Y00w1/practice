const uppercaseChars = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const numbersChars = '0123456789';
const symbolsChars = '!#$%&?¡@-_.,*';
function generatePassword(size:number, uppercase: boolean, numbers: boolean, symbols: boolean): string {
    let password = '';
    let characters = 'abcdefghijklmnñopqrstuvwxyz';
    characters += uppercase ? uppercaseChars : '';
    characters += numbers ? numbersChars : '';
    characters += symbols ? symbolsChars : '';
    for (let i = 0; i < size; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password
}

document.addEventListener('DOMContentLoaded', () => {
    //slider
    const slider = document.getElementById('range') as HTMLInputElement;
    const sliderValue = document.getElementById('rangeValue') as HTMLLabelElement;
    slider.addEventListener('click', () =>{
        sliderValue.textContent = slider.value;
    });

    //password generator
    const form = document.getElementById('passwordOptions') as HTMLFormElement;
    const uppercaseCheck = form.elements.namedItem('uppercase') as HTMLInputElement;
    const numbersCheck = form.elements.namedItem('numbers') as HTMLInputElement;
    const symbolsCheck = form.elements.namedItem('symbols') as HTMLInputElement;
    const passwordGenerated = document.getElementById('password') as HTMLParagraphElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let password = generatePassword(parseInt(slider.value), uppercaseCheck.checked, numbersCheck.checked, symbolsCheck.checked);
        passwordGenerated.textContent = password;
    });

    //Return home
    const home = document.getElementById('home') as HTMLButtonElement;
    home.addEventListener('click', (event) => {
        window.location.href = '../index.html';
    });
});