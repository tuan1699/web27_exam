const num1 = document.querySelector(".number1");
const num2 = document.querySelector(".number2");
const answer = document.querySelector("#answer");
const message = document.querySelector(".message");
const resultDisplay = document.querySelector(".result");

let n1 = Math.floor(Math.random() * 1000);
let n2 = Math.floor(Math.random() * 1000);

num1.value = n1;
num2.value = n2;
let result = n1 + n2;
const check = () => {
  if (!answer.value == "") {
    if (result == answer.value) {
      resultDisplay.textContent = `Very Good! Your answer is correct :3`;
    } else {
      resultDisplay.textContent = `Correct answer is ${result}. Try again!!!`;
    }
  } else alert("Vui lòng nhập câu trả lời của bạn");
};

const next = () => {
  answer.value = "";
  n1 = Math.floor(Math.random() * 1000);
  n2 = Math.floor(Math.random() * 1000);

  num1.value = n1;
  num2.value = n2;
  result = n1 + n2;
  resultDisplay.textContent = "";
};
