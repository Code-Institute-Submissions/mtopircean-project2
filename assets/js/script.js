//Wait for DOM to finish loading before running form
//Get button and input areas and add event listeners to them

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

function calculateAnswer() {

}

function generateRandom() {
    
}
//** reset the values in the area where user inputs rating values for each option

function resetUserArea() {
    //** used a querySelectorAll to be able to select multiple classes for mass reset
    let dropOptions = document.querySelectorAll(".drop-option-one, .drop-option-two, .drop-option-three");
    for (let dropOption of dropOptions) {
        dropOption.selectedIndex = "";
    }
    console.log("User reseted the score for his options")
}

function printPageAsPDF() {
    window.print();
    console.log("User has printed the page")
}