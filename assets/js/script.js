//Wait for DOM to finish loading before running form
//Get button and input areas and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {

  console.log("DOM content loaded.");

  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function () {

      console.log("Button clicked: " + this.getAttribute("id"));

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
}

function calculateAnswer() {
  console.log("Calculating answer.");

  let inputFirstCriteriaName = document.getElementById("fcriteria").value;
  let inputSecondCriteriaName = document.getElementById("scriteria").value;
  let inputThirdCriteriaName = document.getElementById("tcriteria").value;
  let inputFourthCriteriaName = document.getElementById("focriteria").value;
  let inputFifthCriteriaName = document.getElementById("ficriteria").value;

  let dropdownCriteriaOne = (document.getElementById("fimportance").value);
  let dropdownCriteriaTwo = (document.getElementById("simportance").value);
  let dropdownCriteriaThree = (document.getElementById("timportance").value);
  let dropdownCriteriaFour = (document.getElementById("foimportance").value);
  let dropdownCriteriaFive = (document.getElementById("fiimportance").value);

  let dropdownOptionOneOne = (document.getElementById("fvalue1").value);
  let dropdownOptionOneTwo = (document.getElementById("svalue1").value);
  let dropdownOptionOneThree = (document.getElementById("tvalue1").value);
  let dropdownOptionOneFour = (document.getElementById("fovalue1").value);
  let dropdownOptionOneFive = (document.getElementById("fivalue1").value);

  let dropdownOptionTwoOne = (document.getElementById("fvalue2").value);
  let dropdownOptionTwoTwo = (document.getElementById("svalue2").value);
  let dropdownOptionTwoThree = (document.getElementById("tvalue2").value);
  let dropdownOptionTwoFour = (document.getElementById("fovalue2").value);
  let dropdownOptionTwoFive = (document.getElementById("fivalue2").value);

  let dropdownOptionThreeOne = (document.getElementById("fvalue3").value);
  let dropdownOptionThreeTwo = (document.getElementById("svalue3").value);
  let dropdownOptionThreeThree = (document.getElementById("tvalue3").value);
  let dropdownOptionThreeFour = (document.getElementById("fovalue3").value);
  let dropdownOptionThreeFive = (document.getElementById("fivalue3").value);

  // Check if any dropdown is empty
  if (
    inputFirstCriteriaName === "" ||
    inputSecondCriteriaName === "" ||
    inputThirdCriteriaName === "" ||
    inputFourthCriteriaName === "" ||
    inputFifthCriteriaName === "" ||
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
    dropdownOptionTwoFive === ""
  ) {
    let resultArea = document.getElementById("result-area");
    resultArea.textContent = "Ups.... You forgot to fill in one of the mandatory fields. Please recheck again that you have filled in all boxes including the Criteria Name Definition and all Drop Down values, then click again on CALCULATE ANSWER";
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
  let scoreOptionThree;
  if (
    dropdownCriteriaOne === "" || dropdownOptionThreeOne === "" ||
    dropdownCriteriaTwo === "" || dropdownOptionThreeTwo === "" ||
    dropdownCriteriaThree === "" || dropdownOptionThreeThree === "" ||
    dropdownCriteriaFour === "" || dropdownOptionThreeFour === "" ||
    dropdownCriteriaFive === "" || dropdownOptionThreeFive === ""
  ) {
    scoreOptionThree = 0;
  } else {
    scoreOptionThree = (
      (dropdownCriteriaOne * dropdownOptionThreeOne +
        dropdownCriteriaTwo * dropdownOptionThreeTwo +
        dropdownCriteriaThree * dropdownOptionThreeThree +
        dropdownCriteriaFour * dropdownOptionThreeFour +
        dropdownCriteriaFive * dropdownOptionThreeFive) /
      5
    );
  }

  let resultArea = document.getElementById("result-area");
  let recommendation = "";

  if (scoreOptionOne > scoreOptionTwo && scoreOptionOne > scoreOptionThree) {
    recommendation = "Option A.";
  } else if (scoreOptionTwo > scoreOptionOne && scoreOptionTwo > scoreOptionThree) {
    recommendation = "Option B.";
  } else if (scoreOptionThree > scoreOptionOne && scoreOptionThree > scoreOptionTwo) {
    recommendation = "Option C.";
  } else if (scoreOptionOne === scoreOptionTwo && scoreOptionOne > scoreOptionThree) {
    recommendation = "Options A and B have highest but equal scores.";
  } else if (scoreOptionTwo === scoreOptionThree && scoreOptionTwo > scoreOptionOne) {
    recommendation = "Options B and C have highest but equal scores.";
  } else if (scoreOptionOne === scoreOptionThree && scoreOptionOne > scoreOptionTwo) {
    recommendation = "Options A and C have highest but equal scores.";
  } else if (scoreOptionOne === scoreOptionTwo && scoreOptionOne === scoreOptionThree) {
    recommendation = "All options are equal. You can use the Generate Random button for lucky guess.";
  }

  if (scoreOptionThree === 0 && (
    dropdownCriteriaOne === "" || dropdownOptionThreeOne === "" ||
    dropdownCriteriaTwo === "" || dropdownOptionThreeTwo === "" ||
    dropdownCriteriaThree === "" || dropdownOptionThreeThree === "" ||
    dropdownCriteriaFour === "" || dropdownOptionThreeFour === "" ||
    dropdownCriteriaFive === "" || dropdownOptionThreeFive === ""
  )) {
    resultArea.textContent = "Based on the information you have provided, the result is: " + recommendation + "\n" + "You have not filled in all of the fields in Option C dropdown area which have caused for the result of this option not to be taken into consideration.";
  } else {
    resultArea.textContent = "Based on the information you have provided, the result is: " + recommendation;
  }

  console.log("Score Option One: " + scoreOptionOne);
  console.log("Score Option Two: " + scoreOptionTwo);
  console.log("Score Option Three: " + scoreOptionThree);

  console.log(recommendation);
}

function generateRandom() {

  console.log("Generating random.");

  let resultArea = document.getElementById("random-result-area");
  let options = document.querySelectorAll(".option-label");
  console.log(options); // Log the retrieved options
  let randomIndex = Math.floor(Math.random() * options.length);
  let randomOption = options[randomIndex].textContent;
  console.log(randomOption); // Log the random option
  resultArea.textContent = "This is the option returned by your random selection: " + randomOption;

  console.log("Random generated.");

}


function resetUserArea() {

  console.log("Resetting user area.");

  let dropOptions = document.querySelectorAll(
    ".drop-option-one, .drop-option-two, .drop-option-three"
  );
  for (let dropOption of dropOptions) {
    dropOption.selectedIndex = "";
  }

  console.log("User area resetted.");

}

function printPageAsPDF() {

  console.log("Printing page as PDF.");
  window.print();
}



//* About modal

let modalAbout = document.getElementById("header-about-modal");
let modalTriggerAbout = document.getElementById("header-about");
let modalCloseAbout = document.getElementById("modal-close-about");

modalTriggerAbout.onclick = function () {
  console.log("Opening modal: modalAbout");
  closeModal();
  modalAbout.style.display = "block";
};

modalCloseAbout.onclick = function () {
  console.log("Closing modal: modalAbout");
  modalAbout.style.display = "none";
};

//* How to modal

let modalHow = document.getElementById("header-how-modal");
let modalTriggerHow = document.getElementById("header-how");
let modalCloseHow = document.getElementById("modal-close-how");

modalTriggerHow.onclick = function () {
  console.log("Opening modal: modalHow");
  closeModal();
  modalHow.style.display = "block";
};

modalCloseHow.onclick = function () {
  console.log("Closing modal: modalHow");
  modalHow.style.display = "none";
};

//* Generate answer in modal for Calculate

let submitModal = document.getElementById("submit-modal");
let buttonSubmit = document.getElementById("calculate");
let closeSubmit = document.querySelector(".submit-close");

buttonSubmit.onclick = function () {
  console.log("Opening modal: submitModal");
  closeModal();
  submitModal.style.display = "block";
};

closeSubmit.onclick = function () {
  console.log("Closing modal: submitModal");
  submitModal.style.display = "none";
};

//* Generate answer in modal for Random

let randomModal = document.getElementById("random-modal");
let buttonRandom = document.getElementById("random");
let closeRandom = document.querySelector(".random-close");

buttonRandom.onclick = function () {
  console.log("Opening modal: randomModal");
  closeModal();
  randomModal.style.display = "block";
};

closeRandom.onclick = function () {
  console.log("Closing modal: randomModal");
  randomModal.style.display = "none";
};

window.onclick = function (event) {
  console.log(event)
  if (event.target == modalAbout) {
    ;
    modalAbout.style.display = "none";
    console.log("Clicked outside modal and closed modalAbout");
  }
  if (event.target == modalHow) {
    modalHow.style.display = "none";
    console.log("Clicked outside modal and closed modalHow");
  }
  if (event.target == submitModal) {
    submitModal.style.display = "none";
    console.log("Clicked outside modal and closed submitModal");
  }
  if (event.target == randomModal) {
    randomModal.style.display = "none";
    console.log("Clicked outside modal and closed randomModal");
  }
};

function closeModal() {
  let modals = document.querySelectorAll(".about-modal, .how-modal, .s-modal, .r-modal");
  for (let i = 0; i < modals.length; i++) {
    modals[i].style.display = "none";
  }
}