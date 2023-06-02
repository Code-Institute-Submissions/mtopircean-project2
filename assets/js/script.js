//Wait for DOM to finish loading before running form
//Get button and input areas and add event listeners to them

let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                calculateAnswer();
            } else if (this.getAttribute("data-type") === "print") {
                printPageAsPDF();
            } else if (this.getAttribute("data-type") === "reset") {
                resetUserArea();
            }
        });
    }
    function calculateAnswer() {

    }

    function generateRandom() {


    }

    function generateTextAnswer() {

    }
//** reset the values in the area where user inputs rating values for each option

    function resetUserArea() {
        let userInputOptions = document.getElementsByClassName("text-input-option");
        for (let inputOption of userInputOptions) {
            inputOption.value = "";
    }
}

    function printPageAsPDF() {
        window.print();
    }