const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Replacing % with the modulus operation
        let expression = display.value.replace(/%/g, '/100*');
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

function remove() {
    display.value = display.value.slice(0, -1);
}

