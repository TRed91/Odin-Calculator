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

let numberFirst = 0;
let numberSecond = 0;
let operator;

let display = document.querySelector("#display");

let numberInput = [
    {num: document.querySelector("#btn1"), value: 1},
    {num: document.querySelector("#btn2"), value: 2},
    {num: document.querySelector("#btn3"), value: 3},
    {num: document.querySelector("#btn4"), value: 4},
    {num: document.querySelector("#btn5"), value: 5},
    {num: document.querySelector("#btn6"), value: 6},
    {num: document.querySelector("#btn7"), value: 7},
    {num: document.querySelector("#btn8"), value: 8},
    {num: document.querySelector("#btn9"), value: 9},
];

numberInput.forEach((btn) => btn.num.addEventListener("click", () => {
    display.textContent += btn.value;
}));

let operatorInput = [
    {operator: document.querySelector("#btnAdd"), value: "+"},
    {operator: document.querySelector("#btnSubtract"), value: "-"},
    {operator: document.querySelector("#btnMultiply"), value: "x"},
    {operator: document.querySelector("#btnDivide"), value: "/"}
];

operatorInput.forEach((btn) => btn.operator.addEventListener("click", () => {
    display.textContent += btn.value;
}));

let clearInput = document.querySelector("#btnClear")
clearInput.addEventListener("click", () => display.textContent = "");