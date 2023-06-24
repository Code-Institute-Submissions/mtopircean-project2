/**
* Get button, input areas and add event listeners to them and confirms DOM is loaded.
* Defines the different functions that will run associated with various IDs under a click event.
* Took inspiration in defining the structure from the LovaMath project.
*/
document.addEventListener("DOMContentLoaded", function () {
  let buttons = [...document.getElementsByTagName("button")];
  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
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
  });
});

/**
* Pull all elements with the specific class mentioned in the first code line in a single variable.
* It then iterates over them, adding an event listener to listen to a change and trigger the calculateAnswer function.
*/
let dropdowns = document.querySelectorAll(".importance-drop, .drop-option-one, .drop-option-two, .drop-option-three");
for (let dropdown of dropdowns) {
  dropdown.addEventListener("change", calculateAnswer);
}

/**
* Function calculateAnswer is structured to perform the following steps:
* - Pull the criteria data in order to validate that data is present in those fields.
* - Pull the importance value for each criterion to determine data presence and use it in calculations.
* - Pull the options scoring for each option the user wants to compare to validate data presence and use it in calculation.
* - Return an alert message as part of a Modal if all mandatory fields are not filled in.
* - Perform calculations to determine an average of all importance criteria values multiplied by each option's score.
* - Compare the three options, with C being optional, and in case of missing values being filled in, taking the value of 0 in the comparison in order to make it irrelevant.
* - Return the result in a text format combining different elements of the function.
*/
function calculateAnswer() {

  let nameFirstOption = document.getElementById("option1").value;
  let nameSecondOption = document.getElementById("option2").value;
  let nameThirdOption = document.getElementById("option3").value;
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

  // Check if any of the fields required from the user are empty.
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
    resultArea.textContent = "Ups.... You forgot to fill in one of the mandatory fields. Please recheck again " +
      "that you have filled in all boxes including the Criteria Name Definition and all Drop Down values, then click again on CALCULATE ANSWER";
    return;
  }
  // Calculates scores
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
  //Checks if Option 3 has any empty fields in order to either calculate or determine a 0 result and rule out of the analysis
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
  // Performs the relevant calculations in order to determine recommended option
  let resultArea = document.getElementById("result-area");
  let recommendation = "";
  if (scoreOptionOne > scoreOptionTwo && scoreOptionOne > scoreOptionThree) {
    recommendation = "Option A-" + nameFirstOption + ".";
  } else if (scoreOptionTwo > scoreOptionOne && scoreOptionTwo > scoreOptionThree) {
    recommendation = "Option B-" + nameSecondOption + ".";
  } else if (scoreOptionThree > scoreOptionOne && scoreOptionThree > scoreOptionTwo) {
    recommendation = "Option C-" + nameThirdOption + ".";
  } else if (scoreOptionOne === scoreOptionTwo && scoreOptionOne > scoreOptionThree) {
    recommendation = "Option A-" + nameFirstOption + " " + "and" + " " + "Option B-" + nameSecondOption + " " + "have highest but equal scores.";
  } else if (scoreOptionTwo === scoreOptionThree && scoreOptionTwo > scoreOptionOne) {
    recommendation = "Option B-" + nameSecondOption + " " + "and" + " " + "Option C-" + nameThirdOption + " " + "have highest but equal scores.";
  } else if (scoreOptionOne === scoreOptionThree && scoreOptionOne > scoreOptionTwo) {
    recommendation = "Option A-" + nameFirstOption + " " + "and" + " " + "Option C-" + nameThirdOption + " " + "have highest but equal scores.";
  } else if (scoreOptionOne === scoreOptionTwo && scoreOptionOne === scoreOptionThree) {
    recommendation = "All options are equal. You can use the Generate Random button for lucky guess.";
  }
  //Verifies if Option C has missing fields and returns 2 levels of message in a modal, one based on empty fields in Option C and one based on Option C having full data populated. 
  if (scoreOptionThree === 0 && (
    dropdownCriteriaOne === "" || dropdownOptionThreeOne === "" ||
    dropdownCriteriaTwo === "" || dropdownOptionThreeTwo === "" ||
    dropdownCriteriaThree === "" || dropdownOptionThreeThree === "" ||
    dropdownCriteriaFour === "" || dropdownOptionThreeFour === "" ||
    dropdownCriteriaFive === "" || dropdownOptionThreeFive === ""
  )) {
    resultArea.textContent = "Based on the information you have provided, the result is: " + recommendation +
      "\n" + "You have not filled in all of the fields in Option C dropdown area which have caused for the result of this option not to be taken into consideration.";
  } else {
    resultArea.textContent = "Based on the information you have provided, the result is: " + recommendation;
  }
}

/* 
* Function created to generate a random option recommendation based on a "coin-flip" principle.
* It selects a random option from the available options and displays it in a modal.
*/
function generateRandom() {

  let resultArea = document.getElementById("random-result-area");
  let options = document.querySelectorAll(".option-label");
  let randomIndex = Math.floor(Math.random() * options.length);
  let randomOption = options[randomIndex].textContent;
  resultArea.textContent = "This is the option returned by your random selection: " + randomOption;

}

/*
* Function to reset the scoring values of each option inputted by the user in the relevant drop-downs.
* It will not reset the criteria importance score as it is considered as firm and most relevant for each option the user wants to compare.
* It resets the drop-down options to their original placeholder text, which is set as an empty value.
*/
function resetUserArea() {

  let dropOptions = document.querySelectorAll(
    ".drop-option-one, .drop-option-two, .drop-option-three"
  );
  for (let dropOption of dropOptions) {
    dropOption.selectedIndex = "";
  }

}

/* 
* Function to open a print page for the user to print the current page as a PDF. PDF is mentioned mostly to guide user in a sustainable direction.
*/
function printPageAsPDF() {

  window.print();

}

/*
* Following section is created in order to capture the different modals opening in the page.
* Majority of the functions will return a modal in order to capture their result or provide alerts.
* It was established by taking inspiration in a code format found on w3schools and adapted to my code and application.
* Decision was taken to remove the option to close modal when clicking outside of the box. If this would have been enabled, modals would automatically close when clicking
the print button.
* Principle of functionality is to pull html relevant data, define the modal that contains the text, including the close element, define open and close triggers.
*/
// About modal - opens the description of the page and tool created
let modalAbout = document.getElementById("header-about-modal");
let modalTriggerAbout = document.getElementById("header-about");
let modalCloseAbout = document.getElementById("modal-close-about");

modalTriggerAbout.onclick = function () {
  closeModal();
  modalAbout.style.display = "block";
};
modalCloseAbout.onclick = function () {
  modalAbout.style.display = "none";
};

// How to modal
let modalHow = document.getElementById("header-how-modal");
let modalTriggerHow = document.getElementById("header-how");
let modalCloseHow = document.getElementById("modal-close-how");

modalTriggerHow.onclick = function () {
  closeModal();
  modalHow.style.display = "block";
};
modalCloseHow.onclick = function () {
  modalHow.style.display = "none";
};

// Modal for calculateAnswer function
let submitModal = document.getElementById("submit-modal");
let buttonSubmit = document.getElementById("calculate");
let closeSubmit = document.querySelector(".submit-close");

buttonSubmit.onclick = function () {
  closeModal();
  submitModal.style.display = "block";
};
closeSubmit.onclick = function () {
  submitModal.style.display = "none";
};

//Modal for generateRandom function
let randomModal = document.getElementById("random-modal");
let buttonRandom = document.getElementById("random");
let closeRandom = document.querySelector(".random-close");

buttonRandom.onclick = function () {
  closeModal();
  randomModal.style.display = "block";
};
closeRandom.onclick = function () {
  randomModal.style.display = "none";
};

/*
* Functioned defined with the purpose to close a modal when another is triggered.
*/

function closeModal() {
  let modals = document.querySelectorAll(".about-modal, .how-modal, .s-modal, .r-modal");
  for (let i = 0; i < modals.length; i++) {
    modals[i].style.display = "none";
  }
}