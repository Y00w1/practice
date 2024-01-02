"use strict";
const alphabet = {
    a: '4', b: '8', c: '[', d: ')', e: '3',
    f: '|=', g: '6', h: '#', i: '1', j: ',_|',
    k: '|<', l: '|', m: '1^1', n: '|V', o: '0',
    p: '|*', q: '9', r: 'I2', s: '5', t: '7',
    u: '(_)', v: '|/', w: 'VV', x: '><', y: '`/', z: '2'
};
function translate(text) {
    let translated = '';
    for (let char of text) {
        translated += alphabet[char] || char;
    }
    return translated;
}
document.addEventListener('DOMContentLoaded', () => {
    const toTranslateInput = document.getElementById('toTranslate');
    const translateButton = document.getElementById('btnSubmit');
    const resultParagraph = document.getElementById('txt');
    translateButton.addEventListener('click', (event) => {
        event.preventDefault();
        const textToTranslate = toTranslateInput.value.toLowerCase();
        const translatedText = translate(textToTranslate);
        resultParagraph.textContent = translatedText;
    });
});
//# sourceMappingURL=translate_leet.js.map