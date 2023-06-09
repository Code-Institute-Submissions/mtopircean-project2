//Wait for DOM to finish loading before running form
//Get button and input areas and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
      button.addEventListener("click", function () {
          if (this.getAttribute("id") === "calculate") {
              calculateAnswer();
          } else if (this.getAttribute("id") === "print") {
              printPageAsPDF();
          } else if (this.getAttribute("id") === "reset") {
              resetUserArea();
          } else if (this.getAttribute("id") === "random") {
              generateRandom();
          }
      });
  }
});

let dropdowns = document.querySelectorAll(".importance-drop, .drop-option-one, .drop-option-two, .drop-option-three");
for (let dropdown of dropdowns) {
  dropdown.addEventListener("change", calculateAnswer);
};

function calculateAnswer() {
  let dropdownCriteriaOne = document.getElementById("fimportance")
  let dropdownCriteriaTwo = document.getElementById("simportance")
  let dropdownCriteriaThree = document.getElementById("timportance")
  let dropdownCriteriaFour = document.getElementById("foimportance")
  let dropdownCriteriaFive = document.getElementById("fiimportance")

  let criteriaValueOne = dropdownCriteriaOne.value;
  let criteriaValueTwo = dropdownCriteriaTwo.value;
  let criteriaValueThree = dropdownCriteriaThree.value;
  let criteriaValueFour = dropdownCriteriaFour.value;
  let criteriaValueFive = dropdownCriteriaFive.value;

  let dropdownOptionOneOne = document.getElementById("fvalue1")
  let dropdownOptionOneTwo = document.getElementById("svalue1")
  let dropdownOptionOneThree = document.getElementById("tvalue1")
  let dropdownOptionOneFour = document.getElementById("fovalue1")
  let dropdownOptionOneFive = document.getElementById("fivalue1")

  let optionOneValueOne = dropdownOptionOneOne.value;
  let optionOneValueTwo = dropdownOptionOneTwo.value;
  let optionOneValueThree = dropdownOptionOneThree.value;
  let optionOneValueFour = dropdownOptionOneFour.value;
  let optionOneValueFive = dropdownOptionOneFive.value;

  let dropdownOptionTwoOne = document.getElementById("fvalue2")
  let dropdownOptionTwoTwo = document.getElementById("svalue2")
  let dropdownOptionTwoThree = document.getElementById("tvalue2")
  let dropdownOptionTwoFour = document.getElementById("fovalue2")
  let dropdownOptionTwoFive = document.getElementById("fivalue2")

  let optionTwoValueOne = dropdownOptionTwoOne.value;
  let optionTwoValueTwo = dropdownOptionTwoTwo.value;
  let optionTwoValueThree = dropdownOptionTwoThree.value;
  let optionTwoValueFour = dropdownOptionTwoFour.value;
  let optionTwoValueFive = dropdownOptionTwoFive.value;

  let dropdownOptionThreeOne = document.getElementById("fvalue3")
  let dropdownOptionThreeTwo = document.getElementById("svalue3")
  let dropdownOptionThreeThree = document.getElementById("tvalue3")
  let dropdownOptionThreeFour = document.getElementById("fovalue3")
  let dropdownOptionThreeFive = document.getElementById("fivalue3")

  let optionThreeValueOne = dropdownOptionThreeOne.value;
  let optionThreeValueTwo = dropdownOptionThreeTwo.value;
  let optionThreeValueThree = dropdownOptionThreeThree.value;
  let optionThreeValueFour = dropdownOptionThreeFour.value;
  let optionThreeValueFive = dropdownOptionThreeFive.value;

  let scoreOptionOne = (criteriaValueOne * dropdownOptionOneOne + criteriaValueTwo * dropdownOptionOneTwo + criteriaValueTwo * dropdownOptionOneThree + criteriaValueFour * dropdownOptionOneFour + criteriaValueFive * dropdownOptionOneFive) / 5;
  let scoreOptionTwo = (criteriaValueOne * dropdownOptionTwoOne + criteriaValueTwo * dropdownOptionTwoTwo + criteriaValueTwo * dropdownOptionTwoThree + criteriaValueFour * dropdownOptionTwoFour + criteriaValueFive * dropdownOptionTwoFive) / 5;
  let scoreOptionThree=(criteriaValueOne * dropdownOptionThreeOne + criteriaValueTwo * dropdownOptionThreeTwo + criteriaValueTwo * dropdownOptionThreeThree + criteriaValueFour * dropdownOptionThreeFour + criteriaValueFive * dropdownOptionThreeFive) / 5;

  let resultArea = document.getElementById("result-area");
  let recommendation = "";
  if (scoreOptionOne > scoreOptionTwo && scoreOptionOne > scoreOptionThree) {
    recommendation = "Option One";
  } else if (scoreOptionTwo > scoreOptionOne && scoreOptionTwo > scoreOptionThree) {
    recommendation = "Option Two";
  } else if (scoreOptionThree > scoreOptionOne && scoreOptionThree > scoreOptionTwo) {
    recommendation = "Option Three";
  } else {
    recommendation = "Options have equal scores";
  }
  resultArea.textContent = "Based on the information you have provided, the recommendation is to proceed with " + recommendation;
}

function generateRandom() {
  let resultArea = document.getElementById("result-area");
  let options = document.querySelectorAll(".option-label");
  console.log(options); // Log the retrieved options
  let randomIndex = Math.floor(Math.random() * options.length);
  let randomOption = options[randomIndex].textContent;
  console.log(randomOption); // Log the random option
  resultArea.textContent = "This is the option returned by your random selection: " + randomOption;
}


function resetUserArea() {
  let dropOptions = document.querySelectorAll(
      ".drop-option-one, .drop-option-two, .drop-option-three"
  );
  for (let dropOption of dropOptions) {
      dropOption.selectedIndex = "";
  }
  console.log("User resetted the score for his options");
}

function printPageAsPDF() {
  window.print();
  console.log("User has printed the page");
}

//*About modal

let modalAbout = document.getElementById("header-about-modal");
let modalTriggerAbout = document.getElementById("header-about");
let modalCloseAbout = document.getElementById("modal-close-about");

modalTriggerAbout.onclick = function() {
modalAbout.style.display = "block";
};

modalCloseAbout.onclick = function() {
modalAbout.style.display = "none";
};

//*How to modal

let modalHow = document.getElementById("header-how-modal");
let modalTriggerHow = document.getElementById("header-how");
let modalCloseHow = document.getElementById("modal-close-how");

modalTriggerHow.onclick = function() {
modalHow.style.display = "block";
};

modalCloseHow.onclick = function() {
modalHow.style.display = "none";
};

//*Generate answer in modal for Calculate

let submitModal = document.getElementById("submit-modal");
let buttonSubmit = document.getElementById("calculate");
let closeSubmit = document.querySelector(".submit-close");

buttonSubmit.onclick = function() {
  submitModal.style.display = "block";
}

closeSubmit.onclick = function() {
  submitModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalAbout) {
    modalAbout.style.display = "none";
  }
  if (event.target == modalHow) {
    modalHow.style.display = "none";
  }
  if (event.target == submitModal) {
    submitModal.style.display = "none";
  }
}