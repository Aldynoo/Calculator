const input = document.querySelector("input");

const btn = document.getElementById("num");
btn.addEventListener("click", () => {
    let clickedButton = input.value;
    clickedButton = parseFloat(clickedButton);
});

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

function calculate () {

}

calculate(a,b);