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

function calculateAnswer() {
    // Your calculateAnswer function implementation
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