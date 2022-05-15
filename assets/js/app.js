let currentQuestion = 0;
let answeredCorrect = 0;
let percentage;

// this functions loads the questions from questions file and creates a form for them in the index file
function loadQuestion() {
    return `<div> <fieldset>
        <legend class="question">${questions[currentQuestion].question}</legend>
        <input type="radio" name="exercise-question" class="exercise-question" id="answer1-1" tabindex="0" value="a">
        <label for="answer1-1">${questions[currentQuestion].answers.a}</label>
        <br>
        <input type="radio" name="exercise-question" class="exercise-question" id="answer1-2" tabindex="1" value="b">
        <label for="answer1-2">${questions[currentQuestion].answers.b}</label>
        <br>
        <input type="radio" name="exercise-question" class="exercise-question" id="answer1-3" tabindex="2" value="c">
        <label for="answer1-3">${questions[currentQuestion].answers.c}</label><br>
        <input type="radio" name="exercise-question" class="exercise-question" id="answer1-4" tabindex="3" value="d">
        <label for="answer1-4">${questions[currentQuestion].answers.d}</label>
        <button class = "submitAnswer" type="submit">Submit Answer</button><br>
        <p>Question ${currentQuestion + 1} of ${questions.length}</p>
        <p>${answeredCorrect} of ${questions.length} correct</p>
      </fieldset>
      </div>` ;
}
// function for start button and load questions
function startQuiz() {
    $('.signup-form').on('click', '.submitStart', function (event) {
        event.preventDefault();

        $(".signup-form").html(loadQuestion);
    });
}

