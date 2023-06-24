//Get button and input areas and add event listeners to them and confirms DOM is loaded

document.addEventListener("DOMContentLoaded", function () {

  console.log("DOM content loaded.");

  /*Retrieves all id button from the html under a single variable buttons
  It also defines the different functions that will run associated to various id`s under a click event*/

  // Took inspiration in defining the structure from LovaMath project 


  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function () {

      //Logs a message to the console log that a specific button was clicked, when it was clicked

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

/*Pull all elements with the specific class mention in the first code line into a single variable
Iterates over them adding an event listener to listen to a change and trigger the calculateAnswer function*/

let dropdowns = document.querySelectorAll(".importance-drop, .drop-option-one, .drop-option-two, .drop-option-three");
for (let dropdown of dropdowns) {
  dropdown.addEventListener("change", calculateAnswer);
}

/* Function calculateAnswer is structured in order:
* Pull the criteria data in order to validate that data is present in those fields.
* Pull the importance value for each of the criteria in order to determine data presence and also to use in calculation.
* Pull the options scoring for each of the options user wants to compare in order to validate data presence and to use in calculation.
* Returns an alert message part of a Modal if all mandatory fields are not filled in.
* For Option C,  it will consider it`s calculated value as 0, will make it part of the comparison to A and B,
but will highlight that data is not filled in completely, in essence always making it irrelevant due to it`s 0 value.
* Will operate a calculation in order to determine an average of all of the importance criteria values multiplied by each options score.
It will then compare the 3 options, with C being optional(with the comment above)
* Will return the result in a modal window when Calculate Answer button is clicked.
*/

function calculateAnswer() {

  //Logs the beginning of the function.

  console.log("Calculating answer.");

  //Pulls required data for function to operate.

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
  )
  //Returns an error message to the user when trying to operate the function that not all required fields are filled in.
  {
    let resultArea = document.getElementById("result-area");
    resultArea.textContent = "Ups.... You forgot to fill in one of the mandatory fields. Please recheck again " +
      "that you have filled in all boxes including the Criteria Name Definition and all Drop Down values, then click again on CALCULATE ANSWER";
    return;
  }

  // Performs the relevant calculations in order to determine the score of each of the 3 Options.

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

  /* 
  * Verifies if Option C has missing fields and returns 2 levels of message in a modal, one based on empty fields in Option C
  and one based on Option C having full data populated. 
  */

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
  // Logs the score of Option A
  console.log("Score Option One: " + scoreOptionOne);
  // Logs the score of Option B
  console.log("Score Option Two: " + scoreOptionTwo);
  // Logs the score of Option C
  console.log("Score Option Three: " + scoreOptionThree);

  //Logs the final recommendation based on the operations performed, and the end of the function
  console.log(recommendation);
}

/* 
* Purpose of the function is to pull the labels of each of the 3 Options(A,B,C) and make a recommendation
* Function will generate an answer even if no values are added to the user input area.
* Result is then returned in a Modal.
* Once closed, and retriggered, the function will restart.
* Inspiration for defining randomIndex is taken from stackOverflow website and adapted to my code needs.
*/

function generateRandom() {

  // Logs the beginning of the function.

  console.log("Generating random.");

  // Pulls the relevant areas of interest in the HTML in different variables.

  let resultArea = document.getElementById("random-result-area");
  let options = document.querySelectorAll(".option-label");

  // Defines the variable which calculates and stores the index position of the randomOption.

  let randomIndex = Math.floor(Math.random() * options.length);

  // Pulls the text data of the randomOption present at the variable above.

  let randomOption = options[randomIndex].textContent;

  // Logs the randomOption.

  console.log(randomOption);

  // Presents the randomOption with a relevant text in a Modal.

  resultArea.textContent = "This is the option returned by your random selection: " + randomOption;

  // Confirms the execution of the function.

  console.log("Random generated.");

}

/*
* Function created in order to reset the scoring values of each of the Options inputted by user in the relevant drop downs.
* It will not reset the criteria importance score as it is considered as firm for each option the user wants to compare.
* The function will pull all drop down options in a single variable and when Reset button is clicked, will return them to their
original placeholder text, which is an empty value.
*/

function resetUserArea() {

  //Marks the start of the function.

  console.log("Resetting user area.");

  // Pulls the drop down values into a single variable

  let dropOptions = document.querySelectorAll(
    ".drop-option-one, .drop-option-two, .drop-option-three"
  );

  // Returns values to their initial empty state

  for (let dropOption of dropOptions) {
    dropOption.selectedIndex = "";
  }

  // Logs out a confirmation that the drop down option values are now reset

  console.log("The score of the option values was reset.");

}

/* 
* Functions purpose is to open a print page in which the user can open a print as pdf option to store it`s result.
* There are 2 console logs to confirm the initiation of the function and execution.
*/

function printPageAsPDF() {

  console.log("Print page will open.");

  // Opens the print page.
  window.print();

  console.log("Printing page was opened.");
}

/*
* Following section is created in order to capture the different modals opening in the page.
* Majority of the functions will return a modal in order to capture their result or provide alerts.
* It was established by taking inspiration in a code format found on w3schools and adapted to my code and application.
* Decision was taken to remove the option to close modal when clicking outside of the box for the reason that we need to have
the print option available for user to print the page. If this would have been enabled, modals would automatically close when clicking
the print button.
*/

// About modal - opens the description of the page and tool created

// Pulls into variables all relevant html areas for function operation

// Defines the overall About modal which contains all the text including the close element

let modalAbout = document.getElementById("header-about-modal");

// Defines the trigger element to open the modal

let modalTriggerAbout = document.getElementById("header-about");

// Defines the trigger element to close the modal

let modalCloseAbout = document.getElementById("modal-close-about");

// Defines opening functionality and relevant log message to confirm operation. Console log is used for debugging purpose.

modalTriggerAbout.onclick = function () {
  console.log("Opening modal: modalAbout");
  closeModal();
  modalAbout.style.display = "block";
};

// Defines closing functionality and relevant log message to confirm operation. Console log is used for debugging purpose.

modalCloseAbout.onclick = function () {
  console.log("Closing modal: modalAbout");
  modalAbout.style.display = "none";
};

// How to modal

// Defines the overall How to modal which contains all the text including the close element

let modalHow = document.getElementById("header-how-modal");

// Defines the trigger element to open the modal

let modalTriggerHow = document.getElementById("header-how");

// Defines the trigger element to close the modal

let modalCloseHow = document.getElementById("modal-close-how");


// Defines opening functionality and relevant log message to confirm operation. Console log is used for debugging purpose.

modalTriggerHow.onclick = function () {
  console.log("Opening modal: modalHow");
  closeModal();
  modalHow.style.display = "block";
};

// Defines closing functionality and relevant log message to confirm operation. Console log is used for debugging purpose.

modalCloseHow.onclick = function () {
  console.log("Closing modal: modalHow");
  modalHow.style.display = "none";
};

// Modal for calculateAnswer function

// Defines the overall How to modal which contains all the text including the close element

let submitModal = document.getElementById("submit-modal");

// Defines the trigger element to open the modal

let buttonSubmit = document.getElementById("calculate");

// Defines the trigger element to close the modal

let closeSubmit = document.querySelector(".submit-close");

// Defines opening functionality and relevant log message to confirm operation. Console log is used for debugging purpose.

buttonSubmit.onclick = function () {
  console.log("Opening modal: submitModal");
  closeModal();
  submitModal.style.display = "block";
};

// Defines closing functionality and relevant log message to confirm operation. Console log is used for debugging purpose.

closeSubmit.onclick = function () {
  console.log("Closing modal: submitModal");
  submitModal.style.display = "none";
};

// // Modal for generateRandom function

// Defines the overall How to modal which contains all the text including the close element

let randomModal = document.getElementById("random-modal");

// Defines the trigger element to open the modal

let buttonRandom = document.getElementById("random");

// Defines the trigger element to close the modal

let closeRandom = document.querySelector(".random-close");

// Defines opening functionality and relevant log message to confirm operation. Console log is used for debugging purpose.

buttonRandom.onclick = function () {
  console.log("Opening modal: randomModal");
  closeModal();
  randomModal.style.display = "block";
};

// Defines closing functionality and relevant log message to confirm operation. Console log is used for debugging purpose.

closeRandom.onclick = function () {
  console.log("Closing modal: randomModal");
  randomModal.style.display = "none";
};

/*
* Functioned defined with the purpose to close a modal when another is triggered.
* Function pulls all modals into 1 variable.
* It then iterates through them and sets their display property to none
*/

function closeModal() {
  let modals = document.querySelectorAll(".about-modal, .how-modal, .s-modal, .r-modal");
  for (let i = 0; i < modals.length; i++) {
    modals[i].style.display = "none";
  }
}