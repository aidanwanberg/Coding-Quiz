var quizQuestions = [
    {
        question: "Commonly used data types DO Not Include:",
        answers:[
            "1. strings",
            "2. booleans",
            "3. alerts",
            "4. numbers"
        ],
        correctAnswer: "3. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with ________.",
        answers:[
            "1. quotes",
            "2. curly brackets",
            "3. parenthesis",
            "4. square bracket"
        ],
        correctAnswer: "3. parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        answers:[
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above"
        ],
        correctAnswer: "4. all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers:[
            "1. commas",
            "2. curly brackets",
            "3. quotes",
            "4. parenthesis"
        ],
        correctAnswer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers:[
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log"
        ],
        correctAnswer: "4. console.log"
    },
];

var startButton = document.getElementById("start-button");
var quizTimeLeft = 75;
var quizTimer = document.getElementById("timerEl");
var mainMenu = document.getElementById("main-menu-section");
var quizQuestionNum = 0;
var currentQuestion = document.getElementById("current-question");
var currentAnswers = [];
var answerOptions = document.getElementById("answer-options");







var quizStart = function() {

    // starts countdown timer for the code quiz
    var quizTimer = setInterval(function() {
        if (quizTimeLeft < 1) {
            timerEl.textContent = "";
            clearInterval(quizTimer);
            // end quiz by calling a function, come back to this later
        }
        else {
            timerEl.textContent = "Time: " + quizTimeLeft;
            quizTimeLeft--;
        
        }
    }, 1000);

    mainMenu.style.display = "none";

    answerOptions.style.display = "flex";

    quiz();
}

// main quiz function that displays/loops through questions/answers
var quiz = function() {

    if (quizQuestionNum < quizQuestions.length) {

        currentQuestion.textContent = quizQuestions[quizQuestionNum].question;

        currentAnswers = quizQuestions[quizQuestionNum].answers;

        for (i = 0; i < currentAnswers.length; i++) {
            
            var answerButton = document.createElement("button");
            answerButton.textContent = currentAnswers[i];
            answerButton.setAttribute("data-value", currentAnswers[i]);
            document.getElementById("answer-options").appendChild(answerButton);
            
            answerButton.onclick = checkAnswer;

        }

        return

    }
    //  end quiz
}

var checkAnswer = function() {

    if (this.getAttribute("data-value") === quizQuestions[quizQuestionNum].correctAnswer) {
    
    }

    else {
        quizTimeLeft = quizTimeLeft - 10;
    }

    quizQuestionNum++;

    quiz();
}




startButton.addEventListener("click", quizStart);

