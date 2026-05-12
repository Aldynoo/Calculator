const input = document.querySelector("input");

const btns = document.querySelectorAll(".num");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    input.value += button.textContent;
	});
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

calculate();
