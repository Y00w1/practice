"use strict";
class Question {
    constructor(text, answers) {
        this.text = text;
        this.answers = answers;
    }
}
const questions = [
    new Question('Si te encuentras con un troll en el bosque prohibido, ¿qué harías?', [
        { choice: 'Intento razonar y comunicarme con él', house: 'Ravenclaw' },
        { choice: 'Corro tan rápido como puedo para buscar ayuda', house: 'Hufflepuff' },
        { choice: 'Uso mi varita para defenderme', house: 'Gryffindor' },
        { choice: 'Trato de engañarlo para que se vaya', house: 'Slytherin' },
    ]),
    new Question('Cuál de estos elementos te atrae más?', [
        { choice: 'El fuego brillante', house: 'Gryffindor' },
        { choice: 'El aire fresco de la montaña', house: 'Ravenclaw' },
        { choice: 'El agua tranquila de un lago', house: 'Hufflepuff' },
        { choice: 'La tierra sólida bajo tus pies', house: 'Slytherin' },
    ]),
    new Question('Si pudieras tener cualquier habilidad mágica, ¿cuál elegirías?', [
        { choice: 'La habilidad de volar', house: 'Gryffindor' },
        { choice: 'La habilidad de hacerme invisible', house: 'Slytherin' },
        { choice: 'La habilidad de hablar con los animales', house: 'Hufflepuff' },
        { choice: 'La habilidad de cambiar el tiempo', house: 'Ravenclaw' },
    ]),
    new Question('Qué asignatura de Hogwarts te gustaría más?', [
        { choice: 'Defensa Contra las Artes Oscuras', house: 'Gryffindor' },
        { choice: 'Herbología', house: 'Hufflepuff' },
        { choice: 'Adivinación', house: 'Ravenclaw' },
        { choice: 'Pociones', house: 'Slytherin' },
    ]),
    new Question('Si tuvieras la oportunidad de enfrentarte a un dragón, ¿cómo te prepararías?', [
        { choice: 'Estudiaría todo lo que pudiera sobre dragones', house: 'Ravenclaw' },
        { choice: 'Reuniría a mis amigos para que me ayudaran', house: 'Hufflepuff' },
        { choice: 'Intentaría encontrar una manera de evitar el enfrentamiento', house: 'Slytherin' },
        { choice: 'Me enfrentaría al dragón con valentía y determinación', house: 'Gryffindor' },
    ]),
];
let currentQuestionIndex = 0;
const userAnswers = [];
document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('questionContainer');
    const nextButton = document.getElementById('nextButton');
    const resultDiv = document.getElementById('result');
    const home = document.getElementById('home');
    function showResult() {
        const housesCount = {};
        userAnswers.forEach((answer) => {
            housesCount[answer] = (housesCount[answer] || 0) + 1;
        });
        const maxHouse = Object.keys(housesCount).reduce((a, b) => housesCount[a] > housesCount[b] ? a : b);
        resultDiv.textContent = `Felicitaciones! Perteneces a la casa ${maxHouse}!`;
        resultDiv.style.display = 'block';
        questionContainer.style.display = 'none';
        nextButton.style.display = 'none';
    }
    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        if (currentQuestion) {
            const choicesHTML = currentQuestion.answers.map((answer) => `<label>
                <input type="radio" name="answer" value="${answer.house}">
                ${answer.choice}
            </label>`).join(`<br>`);
            questionContainer.innerHTML = `
            <p>${currentQuestion.text}</p>
            ${choicesHTML}
            `;
        }
        else {
            showResult();
        }
    }
    function handleNextButton() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (selectedAnswer) {
            userAnswers.push(selectedAnswer.value);
            currentQuestionIndex++;
            showQuestion();
        }
        else {
            alert('Selecciona una respuesta antes de continuar');
        }
    }
    nextButton.addEventListener('click', handleNextButton);
    showQuestion();
    home.addEventListener('click', (event) => {
        window.location.href = '../index.html';
    });
});
//# sourceMappingURL=sortingHat.js.map