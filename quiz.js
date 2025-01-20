function checkAnswer() {

const correctAnswer = "4";

//retrive the user selected answer.
const selectedOption = document.querySelector('input[name="quiz"]:checked');

if (!selectedOption) {
    alert("Please select an answer before submitting.");
    return;
}

//get the user selected answer
const userAnswer = selectedOption.value;

//compare the user selected answer

const feedbackElement = document.getElementById("feedback");

if (userAnswer === correctAnswer){
    feedbackElement.textContent = "Correct! Well done.";
    feedbackElement.style.color = "green";
} else {
    feedbackElement.textContent = "That's incorrect. Try again!";
    feedbackElement.style.color = "red";
}

}

//add event lisener to the "submited button"
document.getElementById("submit-answer").addEventListener("click", checkAnswer);