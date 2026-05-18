let score = 0;
let currentQuestion = 0;
let timeLeft = 10;
let timer;

// QUESTIONS
const questions = [

{
    question: "Which data structure uses FIFO?",
    answers: ["Stack", "Queue", "Tree", "Graph"],
    correct: "Queue"
},

{
    question: "Binary numbers use which digits?",
    answers: ["0 and 1", "2 and 3", "4 and 5", "1 and 2"],
    correct: "0 and 1"
},

{
    question: "Which logic gate requires both inputs true?",
    answers: ["OR", "AND", "XOR", "NOT"],
    correct: "AND"
},

{
    question: "A set with no elements is?",
    answers: ["Finite", "Universal", "Null Set", "Subset"],
    correct: "Null Set"
},

{
    question: "5! equals?",
    answers: ["20", "100", "120", "60"],
    correct: "120"
}

];

// ELEMENTS
const homeScreen =
document.getElementById("homeScreen");

const quizContainer =
document.getElementById("quizContainer");

const startBtn =
document.getElementById("startBtn");

const questionText =
document.getElementById("question");

const btn1 =
document.getElementById("btn1");

const btn2 =
document.getElementById("btn2");

const btn3 =
document.getElementById("btn3");

const btn4 =
document.getElementById("btn4");

const feedback =
document.getElementById("feedback");

const scoreDisplay =
document.getElementById("score");

const timerDisplay =
document.getElementById("timer");

const nextBtn =
document.getElementById("nextBtn");

const popup =
document.getElementById("popup");

const successSound =
document.getElementById("successSound");

const failSound =
document.getElementById("failSound");

// START BUTTON
startBtn.addEventListener("click", function () {

    homeScreen.style.display = "none";

    quizContainer.style.display = "block";

    loadQuestion();
});

// LOAD QUESTION
function loadQuestion() {

    resetButtons();

    let q = questions[currentQuestion];

    questionText.innerHTML = q.question;

    btn1.innerHTML = q.answers[0];
    btn2.innerHTML = q.answers[1];
    btn3.innerHTML = q.answers[2];
    btn4.innerHTML = q.answers[3];

    startTimer();
}

// TIMER
function startTimer() {

    clearInterval(timer);

    timeLeft = 10;

    timerDisplay.innerHTML =
    "Time Left: " + timeLeft + "s";

    timer = setInterval(function () {

        timeLeft--;

        timerDisplay.innerHTML =
        "Time Left: " + timeLeft + "s";

        if (timeLeft == 0) {

            clearInterval(timer);

            feedback.innerHTML =
            "⏰ Time Up! Focus on the next question.";

            disableButtons();
        }

    }, 1000);
}

// CHECK ANSWER
function checkAnswer(button) {

    clearInterval(timer);

    let selected =
    button.innerHTML;

    let correct =
    questions[currentQuestion].correct;

    if (selected == correct) {

        button.style.backgroundColor =
        "green";

        feedback.innerHTML =
        "✅ Excellent Work!";

        successSound.play();

        score++;

        showPopup();

    } else {

        button.style.backgroundColor =
        "red";

        feedback.innerHTML =
        "❌ Wrong Answer. Focus on the next question.";

        failSound.play();
    }

    scoreDisplay.innerHTML =
    "Score: " + score;

    disableButtons();
}

// POPUP
function showPopup() {

    popup.style.display = "block";

    setTimeout(function () {

        popup.style.display = "none";

    }, 1500);
}

// DISABLE BUTTONS
function disableButtons() {

    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
}

// RESET BUTTONS
function resetButtons() {

    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;

    btn1.style.backgroundColor = "blue";
    btn2.style.backgroundColor = "blue";
    btn3.style.backgroundColor = "blue";
    btn4.style.backgroundColor = "blue";

    feedback.innerHTML = "";
}

// NEXT BUTTON
nextBtn.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        let percentage =
        (score / questions.length) * 100;

        questionText.innerHTML =
        "🎓 Quiz Completed!";

        feedback.innerHTML =
        "Final Score: " +
        score +
        "/" +
        questions.length +
        " (" +
        percentage +
        "%)";

        document.querySelector(".buttons")
        .style.display = "none";

        nextBtn.style.display = "none";

        timerDisplay.style.display = "none";
    }
});

// BUTTON EVENTS
btn1.addEventListener("click",
function () {
    checkAnswer(btn1);
});

btn2.addEventListener("click",
function () {
    checkAnswer(btn2);
});

btn3.addEventListener("click",
function () {
    checkAnswer(btn3);
});

btn4.addEventListener("click",
function () {
    checkAnswer(btn4);
});