//Event Listeners
document.querySelector("button").addEventListener("click", gradeQuiz);

//Global variables
var score = 0;
//local storage - total attempts
var attempts = localStorage.getItem("total_attempts");
//local storage - socre array
if (!localStorage.getItem("scores")) {
    localStorage.setItem("scores", JSON.stringify([]));
}
var scores = JSON.parse(localStorage.getItem("scores"));

displayQ4Choices();
displayQ8Choices();

//Functions
function displayQ4Choices() {
  let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Delaware"];
  q4ChoicesArray = _.shuffle(q4ChoicesArray);
  for(let i = 0; i < q4ChoicesArray.length; i++) {
    if(q4ChoicesArray[i] == "Rhode Island") {
      document.querySelector("#q4Choices").innerHTML += `<input type="radio" name="q4" id="${q4ChoicesArray[i]}" value="${q4ChoicesArray[i]}">  <label class="text-primary" for="${q4ChoicesArray[i]}">${q4ChoicesArray[i]}</label>`;
    }
    else {
      document.querySelector("#q4Choices").innerHTML += `<input type="radio" name="q4" id="${q4ChoicesArray[i]}" value="${q4ChoicesArray[i]}">  <label for="${q4ChoicesArray[i]}">${q4ChoicesArray[i]}</label>`;
    }
  }
}//displayQ4Choices

function displayQ8Choices() {
  let q8ChoicesArray = ["California", "Arizona", "Alaska", "Utah"];
  q8ChoicesArray = _.shuffle(q8ChoicesArray);
  for(let i = 0; i < q8ChoicesArray.length; i++) {
    if(q8ChoicesArray[i] == "California") {
      document.querySelector("#q8Choices").innerHTML += ` <input type="radio" name="q8" id="${q8ChoicesArray[i]}" value="${q8ChoicesArray[i]}">  <label class="text-primary" for="${q8ChoicesArray[i]}"> ${q8ChoicesArray[i]}</label>`;
    } 
    else {
      document.querySelector("#q8Choices").innerHTML += ` <input type="radio" name="q8" id="${q8ChoicesArray[i]}" value="${q8ChoicesArray[i]}">  <label for="${q8ChoicesArray[i]}"> ${q8ChoicesArray[i]}</label>`;
    }
  }
}//displayQ8Choices

function isFormValid() {
  let isValid = true;
  if(document.querySelector("#q1").value == "") {
    isValid = false;
    document.querySelector("#validationFdbk").innerHTML = "Question 1 was not answered";
  }
  return isValid;
}//isFormValid

function rightAnswer(index) {
  document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/checkmark.png' alt='Checkmark'>";
  document.querySelector(`#q${index}Feedback`).innerHTML = "Correct!";
  document.querySelector(`#q${index}Feedback`).className = "bg-success text-white";
  score += 10;
}//rightAnswer

function wrongAnswer(index) {
  document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/xmark.png' alt='xmark'>";
  document.querySelector(`#q${index}Feedback`).innerHTML = "Incorrect";
  document.querySelector(`#q${index}Feedback`).className = "bg-warning text-white";
}//wrongAnswer

function gradeQuiz() {
  console.log("Grading quiz...");
  document.querySelector("#validationFdbk").innerHTML = "";  //reset validation feedback
  if(!isFormValid()) {
    return;
  }

  //variables
  score = 0;
  let q1Response = document.querySelector("#q1").value.toLowerCase();
  let q2Response = document.querySelector("#q2").value;
  let q4Response = document.querySelector("input[name=q4]:checked").value;
  let q5Response = document.querySelector("#q5").value.toLowerCase();
  let q6Response = document.querySelector("#q6").value;
  let q8Response = document.querySelector("input[name=q8]:checked").value;
  let q9Response = document.querySelector("#q9").value.toLowerCase();
  let q10Response = document.querySelector("#q10").value;

  //Grading question 1
  if(q1Response == "sacramento") {
    rightAnswer(1);
  }
  else {
    wrongAnswer(1);
  }

  //Grading question 2
  if(q2Response == "mo") {
    rightAnswer(2);
  }
  else {
    wrongAnswer(2);
  }

  //Grading question 3
  if(document.querySelector("#Jefferson").checked && document.querySelector("#Roosevelt").checked && !document.querySelector("#Jackson").checked && !document.querySelector("#Franklin").checked) {
    rightAnswer(3);
  }
  else {
    wrongAnswer(3);
  }

  //Grading question 4
  if(q4Response == "Rhode Island") {
    rightAnswer(4);
  }
  else {
    wrongAnswer(4)
  }

  //Grading question 5
  if(q5Response == "florida") {
    rightAnswer(5);
  }
  else {
    wrongAnswer(5);
  }

  //Grading question 6
  if(q6Response == "sd") {
    rightAnswer(6);
  }
  else {
    wrongAnswer(6);
  }

  //Grading question 7
  if(document.querySelector("#Idaho").checked && document.querySelector("#Wyoming").checked && document.querySelector("#Montana").checked && !document.querySelector("#Colorado").checked && !document.querySelector("#Nebraska").checked && !document.querySelector("#Nevada").checked) {
    rightAnswer(7);
  }
  else {
    wrongAnswer(7);
  }

  //Grading question 8
  if(q8Response == "California") {
    rightAnswer(8);
  }
  else {
    wrongAnswer(8)
  }

  //Grading question 9
  if(q9Response == "alaska") {
    rightAnswer(9);
  }
  else {
    wrongAnswer(9);
  }

  //Grading question 10
  if(q10Response == "co") {
    rightAnswer(10);
  }
  else {
    wrongAnswer(10);
  }
  
  //Congratulatory message
  if(score >= 80) {
    document.querySelector("#congradMessage").innerHTML = "Congratulations! You passed the quiz!";
    document.querySelector("#congradMessage").className = "bg-success text-dark";
    document.querySelector("#totalScore").innerHTML = `Total Score: ${score}`;
    document.querySelector("#totalScore").className = "text-success";
  }
  else {
    document.querySelector("#congradMessage").innerHTML = "Oops, you didn't make it this time. Look closer, answers are provided";
    document.querySelector("#congradMessage").className = "bg-danger text-dark";
    document.querySelector("#totalScore").innerHTML = `Total Score: ${score}`;
    document.querySelector("#totalScore").className = "text-danger";
  }

  //Display total attempts
  document.querySelector("#totalAttempts").innerHTML = `Total Attempts: ${++attempts}`;
  localStorage.setItem("total_attempts", attempts);

  //Display past scores
  scores.push(score);
  localStorage.setItem("scores", JSON.stringify(scores));  //update local storage
  document.querySelector("#pastScores").innerHTML = "";
  for(let i = 0; i < scores.length; i++) {
    if(scores[i] >= 80) {
      document.querySelector("#pastScores").innerHTML += `<p class="text-success">Attempt ${i+1}: ${scores[i]}</p>`;
    }
    else {
      document.querySelector("#pastScores").innerHTML += `<p class="text-danger">Attempt ${i+1}: ${scores[i]}</p>`;
    }
  }
  
}//gradeQuiz