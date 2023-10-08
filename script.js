// Get elements
const resultElement = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let currentInput = "";

// Add click event listeners to buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (value === "=") {
            calculate();
        } else if (value === "C") {
            clear();
        } else {
            currentInput += value;
            updateDisplay();
        }
    });
});

// Function to update the display
function updateDisplay() {
    resultElement.value = currentInput;
}

// Function to clear the calculator
function clear() {
    currentInput = "";
    updateDisplay();
}

// Function to perform calculations
function calculate() {
    try {
        currentInput = eval(currentInput);
        updateDisplay();
    } catch (error) {
        currentInput = "Error";
        updateDisplay();
    }
}
