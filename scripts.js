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
let equalUsed = false;

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
    {btn: document.querySelector("#btn9"), value: "9"},
    {btn: document.querySelector("#btnComma"), value: "."}
];
const operatorInput = [
    {btn: document.querySelector("#btnAdd"), value: "+"},
    {btn: document.querySelector("#btnSubtract"), value: "-"},
    {btn: document.querySelector("#btnMultiply"), value: "x"},
    {btn: document.querySelector("#btnDivide"), value: "/"}
];

const deleteInput = document.querySelector("#btnDelete");

numberInput.forEach((button) => button.btn.addEventListener("click", () => {
    if (equalUsed === true) {
        display.textContent = "";
        equalUsed = false;
    }
    display.textContent += button.value;
    if (operator === "") {
        numberFirst += button.value;
    } else {
        numberSecond += button.value; 
    }
}));

operatorInput.forEach((button) => button.btn.addEventListener("click", () => {
    if (equalUsed === true) {
        equalUsed = false;
    }
    if (operator === "" && numberFirst !== "") {
        display.textContent += button.value;
        operator = button.value;
    } else if (numberFirst === "" || numberSecond === "") {
        //do nothing
    } else {
        operate(parseFloat(numberFirst), parseFloat(numberSecond), operator);
        display.textContent += button.value;
        operator = button.value;
        }
}));

clearInput.addEventListener("click", () => {
    display.textContent = ""; 
    operator = "";
    numberFirst = "";
    numberSecond = "";
});

equalInput.addEventListener("click", () => {
    if (numberFirst !== "" && numberSecond !== "") {
        operate(parseFloat(numberFirst), parseFloat(numberSecond), operator);
        equalUsed = true;
    }
});

deleteInput.addEventListener("click", () => {
    if (display.textContent != ""){
        numberFirst = "";
        numberSecond = "";
        let deleteLast = display.textContent.slice(0, -1)
        display.textContent = deleteLast;
        let arrayFromDelete = deleteLast.split("")
        let operatorIndex = arrayFromDelete.findIndex(isOperator);
        if (operatorIndex > 0) {
            for (let i = 0; i < operatorIndex; i++){
                numberFirst += arrayFromDelete[i];
            }
            for (let j = operatorIndex + 1; j < arrayFromDelete.length; j++) {
                numberSecond += arrayFromDelete[j];
            }
            operator = arrayFromDelete[operatorIndex];
        } else {
            numberFirst = display.textContent;
            operator = "";
            numberSecond = "";
        }
    }
    
});

function operate (numOne, numTwo, op) {
    
    let result = () => {
    switch (op) {
        case "+": return add(numOne, numTwo); break;
        case "-": return subtract(numOne, numTwo); break;
        case "x": return multiply(numOne, numTwo); break;
        case "/": return divide(numOne, numTwo); break;
    }
    }
    numberFirst = (Math.round(result() *10) / 10).toString();
    operator = "";
    numberSecond = "";
    if (numberFirst == Infinity) {
        numberFirst = "";
        return display.textContent = "You doomed us all!";
    }
    return display.textContent = numberFirst;
}

function isOperator (element) {
    if (element === "+" ||
        element === "-" ||
        element === "x" ||
        element === "/" ){
            return true;
        } else {
            return false;
        }
}
