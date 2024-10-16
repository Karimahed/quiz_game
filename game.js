// Sample questions (replace these with your own questions)
const questions = [
    {
        question: "سبونج هو من يسكن البحر وحبه الناس",
        answer: true,
    },
    {
        question: "كريم عم حمزة",
        answer: true,
    },
    {
        question: "عبود بكره اشي اسمه اعلام ودول",
        answer: false,
    },
    {
        question: "حيدر عم حمزة ",
        answer: false,
    },
    {
        question: "انا فضيلة اقر اني حرجع ارسم",
        answer: true,
    },
    {
        question: "سليمان بحب الحلوة الي بالجوال ",
        answer: true,
    },
    {
        question: "عبود بيقدر يلاقي دولة بحرف الw",
        answer: false,
    },
    {
        question: "قنبلة الجيل الي بتلعب عالي يشيل",
        answer: true,
    },
    {
        question: "حيدر هو الي قال مدحوشة بالعباية",
        answer: false,
    },
    {
        question: "كريم صار يمون",
        answer: true,
    }
];

let currentQuestionIndex = 0;
let score = 0;

// DOM elements
const questionText = document.getElementById("questionText");
const resultDiv = document.getElementById("result");
const trueButton = document.getElementById("trueButton");
const falseButton = document.getElementById("falseButton");
const continueButton = document.getElementById("continueButton");
const backgroundAudio = document.getElementById("backgroundAudio");

// Start playing background music
backgroundAudio.play();

// Load the first question
loadQuestion();

// Function to load the current question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    resultDiv.style.display = 'none'; // Hide result

    // Play the sound for a new question
    document.getElementById('newQuestionSound').play();
}

// Check answer
function checkAnswer(isTrue) {
    const currentQuestion = questions[currentQuestionIndex];

    if (isTrue === currentQuestion.answer) {
        score++;
        document.getElementById('correctSound').play(); // Play correct answer sound
        resultDiv.textContent = "Correct!";
    } else {
        document.getElementById('wrongSound').play(); // Play wrong answer sound
        resultDiv.textContent = "Wrong! Try again.";
        return; // Allow retrying the same question
    }

    currentQuestionIndex++;
    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
    resultDiv.style.display = 'block';
}

// End quiz
function endQuiz() {
    questionText.textContent = "Quiz Finished! Your score: " + score;
    trueButton.style.display = 'none';
    falseButton.style.display = 'none';
    continueButton.style.display = 'block'; // Show continue button
}

// Event listeners
trueButton.addEventListener("click", () => checkAnswer(true));
falseButton.addEventListener("click", () => checkAnswer(false));
continueButton.addEventListener("click", () => {
    window.location.href = "congratulations.html"; // Redirect to the congratulations page
});
