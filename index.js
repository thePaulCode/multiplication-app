const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const formElement = document.getElementById("form");
const scoreElement = document.getElementById("score");
const questionElement = document.getElementById("question");
const inputElement = document.getElementById("input");

questionElement.innerText = `Qual é o resultado da multiplicação: ${num1} x ${num2}?`;

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
    score = 0;
}
scoreElement.innerText = `Pontuação: ${score}`;

const correctAnswer = num1 * num2;

formElement.addEventListener("submit", () => {
    const userAnswer = +inputElement.value;
    if (userAnswer === correctAnswer) {
        score++;
        updateLocalStorage();

    } else {
        score--;
        updateLocalStorage();

    }

});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}
