function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculateResult() {
    let displayValue = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(displayValue);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function changeSign() {
    let displayValue = document.getElementById("display").value;
    if (displayValue) {
        document.getElementById("display").value = displayValue.charAt(0) === '-' ? displayValue.slice(1) : '-' + displayValue;
    }
}
