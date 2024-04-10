function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

let numberFirst = "";
let numberSecond = "";
let operator = "";

let display = document.querySelector("#display");

const equalInput = document.querySelector("#btnEqual");
const clearInput = document.querySelector("#btnClear");
const numberInput = [
    {btn: document.querySelector("#btn0"), value: "0"},
    {btn: document.querySelector("#btn1"), value: "1"},
    {btn: document.querySelector("#btn2"), value: "2"},
    {btn: document.querySelector("#btn3"), value: "3"},
    {btn: document.querySelector("#btn4"), value: "4"},
    {btn: document.querySelector("#btn5"), value: "5"},
    {btn: document.querySelector("#btn6"), value: "6"},
    {btn: document.querySelector("#btn7"), value: "7"},
    {btn: document.querySelector("#btn8"), value: "8"},
    {btn: document.querySelector("#btn9"), value: "9"}
];
const operatorInput = [
    {btn: document.querySelector("#btnAdd"), value: " + "},
    {btn: document.querySelector("#btnSubtract"), value: " - "},
    {btn: document.querySelector("#btnMultiply"), value: " x "},
    {btn: document.querySelector("#btnDivide"), value: " / "}
];

numberInput.forEach((button) => button.btn.addEventListener("click", () => {
    display.textContent += button.value;
    if (operator === "") {
        numberFirst += button.value;
    } else {
        numberSecond += button.value; 
    }
}));

operatorInput.forEach((button) => button.btn.addEventListener("click", () => {
    display.textContent += button.value;
    operator = button.value;
}));

clearInput.addEventListener("click", () => {
    display.textContent = ""; 
    operator = "";
    numberFirst = "";
    numberSecond = "";
});

equalInput.addEventListener("click", () => {
    operate(parseFloat(numberFirst), parseFloat(numberSecond), operator);
});

function operate (numOne, numTwo, operator) {
    
    let result = () => {
    switch (operator) {
        case " + ": return add(numOne, numTwo); break;
        case " - ": return subtract(numOne, numTwo); break;
        case " x ": return multiply(numOne, numTwo); break;
        case " / ": return divide(numOne, numTwo); break;
    }
    }
    numberFirst = result();
    operator = "";
    numberSecond = "";
    return display.textContent = numberFirst;
}
