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
  let dropdownCriteriaOne = document.getElementById("fimportance").value;
  let dropdownCriteriaTwo = document.getElementById("simportance").value;
  let dropdownCriteriaThree = document.getElementById("timportance").value;
  let dropdownCriteriaFour = document.getElementById("foimportance").value;
  let dropdownCriteriaFive = document.getElementById("fiimportance").value;

  let dropdownOptionOneOne = document.getElementById("fvalue1").value;
  let dropdownOptionOneTwo = document.getElementById("svalue1").value;
  let dropdownOptionOneThree = document.getElementById("tvalue1").value;
  let dropdownOptionOneFour = document.getElementById("fovalue1").value;
  let dropdownOptionOneFive = document.getElementById("fivalue1").value;

  let dropdownOptionTwoOne = document.getElementById("fvalue2").value;
  let dropdownOptionTwoTwo = document.getElementById("svalue2").value;
  let dropdownOptionTwoThree = document.getElementById("tvalue2").value;
  let dropdownOptionTwoFour = document.getElementById("fovalue2").value;
  let dropdownOptionTwoFive = document.getElementById("fivalue2").value;

  let dropdownOptionThreeOne = document.getElementById("fvalue3").value;
  let dropdownOptionThreeTwo = document.getElementById("svalue3").value;
  let dropdownOptionThreeThree = document.getElementById("tvalue3").value;
  let dropdownOptionThreeFour = document.getElementById("fovalue3").value;
  let dropdownOptionThreeFive = document.getElementById("fivalue3").value;

  // Check if any dropdown is empty
  if (
    dropdownCriteriaOne === "" ||
    dropdownCriteriaTwo === "" ||
    dropdownCriteriaThree === "" ||
    dropdownCriteriaFour === "" ||
    dropdownCriteriaFive === "" ||
    dropdownOptionOneOne === "" ||
    dropdownOptionOneTwo === "" ||
    dropdownOptionOneThree === "" ||
    dropdownOptionOneFour === "" ||
    dropdownOptionOneFive === "" ||
    dropdownOptionTwoOne === "" ||
    dropdownOptionTwoTwo === "" ||
    dropdownOptionTwoThree === "" ||
    dropdownOptionTwoFour === "" ||
    dropdownOptionTwoFive === "" ||
    dropdownOptionThreeOne === "" ||
    dropdownOptionThreeTwo === "" ||
    dropdownOptionThreeThree === "" ||
    dropdownOptionThreeFour === "" ||
    dropdownOptionThreeFive === ""
  ) {
    let resultArea = document.getElementById("result-area");
    resultArea.textContent = "Ups.... You forgot to fill in one of the mandatory fields. Please recheck your criteria importance values and your options scores and click on CALCULATE ANSWER";
    return;
  }

  let scoreOptionOne =
    (dropdownCriteriaOne * dropdownOptionOneOne +
      dropdownCriteriaTwo * dropdownOptionOneTwo +
      dropdownCriteriaThree * dropdownOptionOneThree +
      dropdownCriteriaFour * dropdownOptionOneFour +
      dropdownCriteriaFive * dropdownOptionOneFive) /
    5;

  let scoreOptionTwo =
    (dropdownCriteriaOne * dropdownOptionTwoOne +
      dropdownCriteriaTwo * dropdownOptionTwoTwo +
      dropdownCriteriaThree * dropdownOptionTwoThree +
      dropdownCriteriaFour * dropdownOptionTwoFour +
      dropdownCriteriaFive * dropdownOptionTwoFive) /
    5;

  let scoreOptionThree =
    (dropdownCriteriaOne * dropdownOptionThreeOne +
      dropdownCriteriaTwo * dropdownOptionThreeTwo +
      dropdownCriteriaThree * dropdownOptionThreeThree +
      dropdownCriteriaFour * dropdownOptionThreeFour +
      dropdownCriteriaFive * dropdownOptionThreeFive) /
     5;

  let resultArea = document.getElementById("result-area");
  let recommendation = "";

  if (scoreOptionOne > scoreOptionTwo && scoreOptionOne > scoreOptionThree) {
    recommendation = "Option One";
  } else if (scoreOptionTwo > scoreOptionOne && scoreOptionTwo > scoreOptionThree) {
    recommendation = "Option Two";
  } else if (scoreOptionThree > scoreOptionOne && scoreOptionThree > scoreOptionTwo) {
    recommendation = "Option Three";
  } else if (scoreOptionOne === scoreOptionTwo && scoreOptionOne === scoreOptionThree) {
    recommendation = "Options have equal scores";
  } else {
    recommendation = "There is no clear recommendation";
  }

  resultArea.textContent =
    "Based on the information you have provided, the recommendation is to proceed with " +
    recommendation;
}

function generateRandom() {
  let resultArea = document.getElementById("random-result-area");
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

//*Generate answer in modal for Random

let randomModal = document.getElementById("random-modal");
let buttonRandom = document.getElementById("random");
let closeRandom = document.querySelector(".random-close");

buttonRandom.onclick = function() {
  randomModal.style.display = "block";
}

closeRandom.onclick = function() {
  randomModal.style.display = "none";
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
  if (event.target == randomModal) {
    randomModal.style.display = "none";
  }
}