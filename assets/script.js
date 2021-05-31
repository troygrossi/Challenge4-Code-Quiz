// question prototype to hold question answers and correct answer index
var QuestionPrototype = function (
  question,
  answer1,
  answer2,
  answer3,
  answer4,
  correct
) {
  this.question = question;
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.answer4 = answer4;
  this.correctAnswer = correct;
};

// initializing each question and their answers into an object
var question1 = new QuestionPrototype(
  "Inside which HTML element do we put the JavaScript?",
  "<javascript>",
  "<js>",
  "<script>",
  "<scripting>",
  3
);
var question2 = new QuestionPrototype(
  "What is the correct JavaScript syntax to write 'Hello World'?",
  "response.write('Hello World')",
  "'Hello World'",
  "document.write('Hello World')",
  "'Hello World')",
  3
);
var question3 = new QuestionPrototype(
  "What is the correct syntax for referring to an external script called 'xxx.js'?",
  "<script src='xxx.js'>",
  "<script name='xxx.js'>",
  "<script href='xxx.js'>",
  "<script value='xxx.js'>",
  1
);
var question4 = new QuestionPrototype(
  "How do you write 'Hello World' in an alert box?",
  "alert('Hello World')",
  "msgBox('Hello World')",
  "alertBox='Hello World'",
  "alertBox('Hello World')",
  1
);
var question5 = new QuestionPrototype(
  "How do you create a function?",
  "function:myFunction()",
  "function=myFunction()",
  "function myFunction()",
  "myFunction():function",
  3
);
var question6 = new QuestionPrototype(
  "How do you call a function named 'myFunction'?",
  "call myFunction()",
  "myFunction()",
  "call function myFunction",
  "Call.myFunction()",
  2
);
var question7 = new QuestionPrototype(
  "Which of the following is a valid JavaScript variable name?",
  "0123",
  "37AB",
  "BR549",
  "Tax Rate",
  3
);
var question8 = new QuestionPrototype(
  "In JavaScript, 17%5 is:",
  "the name of a variable",
  "2",
  "3",
  "the same as 17/5",
  2
);
var question9 = new QuestionPrototype(
  "An if statement must have:",
  "the word then in it",
  "the <then-statement> on a separate line",
  "a semicolon at the end of it",
  "all of the above",
  3
);
var question10 = new QuestionPrototype(
  "Which of the following is not a suitable assignment statement?",
  "wages = hours * rate",
  "class = 'College Algebra'",
  "score = 92.8",
  "length * width = area",
  4
);

// an array of all the questions for easier indexing
var questions = [
  "",
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
];
// Done initializing QA objects

// get elements to stor Q&A text
var startEl = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var answer1El = document.querySelector("#button-first");
var answer2El = document.querySelector("#button-second");
var answer3El = document.querySelector("#button-third");
var answer4El = document.querySelector("#button-fourth");
var correctEl = document.querySelector(".grade");

var userPick = 0;
var count = 1;
var wrong = 0;
var right = 0;
var answerClicked = function () {
  console.log("test");
  questionEl.textContent = questions[count].question;
  answer1El.firstElementChild.textContent = questions[count].answer1;
  answer2El.firstElementChild.textContent = questions[count].answer2;
  answer3El.firstElementChild.textContent = questions[count].answer3;
  answer4El.firstElementChild.textContent = questions[count].answer4;
  if (count != 1) {
    if (userPick === questions[count].correctAnswer) {
      correctEl.textContent = "Correct!";
      right++;
    } else {
      correctEl.textContent = "Wrong!";
      wrong++;
    }
  }
  console.log(userPick, questions[count].correctAnswer);
  count++;
  if (count === count.length + 1) {
    endQuiz();
  }
};

var chooseAnswer1 = function () {
  userPick = 1;
  answerClicked();
};
var chooseAnswer2 = function () {
  userPick = 2;
  answerClicked();
};
var chooseAnswer3 = function () {
  userPick = 3;
  answerClicked();
};
var chooseAnswer4 = function () {
  userPick = 4;
  answerClicked();
};
var endQuiz = function () {};
var startQuiz = function () {
  startEl.remove();
  answerClicked();
};

if (answer1El || answer2El || answer3El || answer4El) {
  answer1El.addEventListener("click", chooseAnswer1);
  answer2El.addEventListener("click", chooseAnswer2);
  answer3El.addEventListener("click", chooseAnswer3);
  answer4El.addEventListener("click", chooseAnswer4);
}
if (start) {
  start.addEventListener("click", startQuiz);
}
