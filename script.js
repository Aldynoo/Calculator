const input = document.querySelector("input");

const btns = document.querySelectorAll(".num");
const clearBtn = document.querySelector(".eraseAll")

btns.forEach((button) => {
  button.addEventListener("click", () => {
    input.value += button.textContent;
	});
});

clearBtn.addEventListener("click", () => {
  clearAll();
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

function clearAll () {
  input.value = "";
}

function clearPrevious() {
  
}

calculate();
