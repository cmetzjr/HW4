$(document).ready(function () {
    //array of quiz questions
    var questions = [{
            questionNum: 1,
            question: "Commonly used data types DO NOT include:",
            answer1: "1. strings",
            answer2: "2. booleans",
            answer3: "3. alerts",
            answer4: "4. numbers",
            correctAnswer: "3. alerts"
        },
        {
            questionNum: 2,
            question: "The conditions in an if/else statement is enclosed within ______:",
            answer1: "1. quotes",
            answer2: "2. curly brackets",
            answer3: "3. parenthesis",
            answer4: "4. square brackets",
            correctAnswer: "3. parenthesis"
        },
        {
            questionNum: 3,
            question: "Arrays in JavaScript can be used to store ______:",
            answer1: "1. numbers and strings",
            answer2: "2. other arrays",
            answer3: "3. booleans",
            answer4: "4. all of the above",
            correctAnswer: "4. all of the above"
        },
        {
            questionNum: 4,
            question: "String values must be enclosed within ______ when being assigned to variables.",
            answer1: "1. commas",
            answer2: "2. curly brackets",
            answer3: "3. quotes",
            answer4: "4. parentheses",
            correctAnswer: "3. quotes"
        },
        {
            questionNum: 5,
            question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            answer1: "1. JavaScript",
            answer2: "2. terminal/bash",
            answer3: "3. for loops",
            answer4: "4. console.log",
            correctAnswer: "4. console.log"
        }
    ]
    console.log(questions);

    //
    //60-sec countdown timer
    //
    var displayTimeLeft = $("#display-time-left");
    var timer = 60;

    function countdown() {
        if (timer <= 0) {
            clearInterval(timer = 0)
        }
        displayTimeLeft.text(timer);
        timer--;
    };

    //
    //quiz section
    //

    //grab the page sections
    var startArea = $("#start-area");
    var startBtn = $("#start-btn");
    var questionArea = $("#question-area");
    var answerBtn = $("#answer-btn");

    //when the start button is clicked, hide the start area, display the question area, and start the countdown
    startBtn.click(function () {
        startArea.hide();
        questionArea.removeClass("d-none");
        setInterval(countdown, 1000);
    });

    //grab the question area and answer buttons
    // var questionArea = $("#question-area")
    var questionText = $("#question-text")
    var answerBtn1 = $("#answer-btn-1")
    var answerBtn2 = $("#answer-btn-2")
    var answerBtn3 = $("#answer-btn-3")
    var answerBtn4 = $("#answer-btn-4")

    //create loop to iterate through questions and answers
    for (i = 0; i < questions.length; i++) {

        var q = $("<p>").text(questions[i].question).addClass("mt-4 font-weight-bold").attr("id", "question-text");
        var a1 = $("<button>").text(questions[i].answer1).addClass("btn btn-quiz d-block mt-1").attr("type", "button").attr("id", "answer-btn").attr("type", "button");
        var a2 = $("<button>").text(questions[i].answer2).addClass("btn btn-quiz d-block mt-1").attr("type", "button").attr("id", "answer-btn").attr("type", "button");
        var a3 = $("<button>").text(questions[i].answer3).addClass("btn btn-quiz d-block mt-1").attr("type", "button").attr("id", "answer-btn").attr("type", "button");
        var a4 = $("<button>").text(questions[i].answer4).addClass("btn btn-quiz d-block mt-1").attr("type", "button").attr("id", "answer-btn").attr("type", "button");

        $("#question-area").append(q, a1, a2, a3, a4);




        // questionText.text(questions[i].question);
        // answerBtn1.text(questions[i].answer1);
        // answerBtn2.text(questions[i].answer2);
        // answerBtn3.text(questions[i].answer3);
        // answerBtn4.text(questions[i].answer4);


        //check if the button clicked is === correctAnswer; if yes, move to the next object in the array, else decrement time by 5000ms
        // if (correc) {

        // }



    } //end for loop



    //close ready method
});