let p = document.querySelectorAll("p");
let h1 = document.querySelector("p");
let parrafito = document.querySelector(".parrafito");
let pid = document.getElementById("pid");
let input = document.querySelector("input");

let firstValue = 0;
let secondValue = 0;
let firstResult;
let finalResult = 0;

console.log({
  p,
  h1,
  parrafito,
  pid,
  input,
});

input.onchange = function (e) {
  
  addInRealTime(input.value)
};

const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
btn.addEventListener("click", sumInputValues);

//this is a function that sum 2 values and clear the third value, btw, at the beginning, the third value was the first lol
function sumInputValues(event) {
  firstValue = Number(input1.value);
  secondValue = Number(input1.value);
  firstResult = firstValue + secondValue;
  input.value=null;
  pResult.innerText = "Resultado: " + firstResult;
}

//this allow sum or subtract if u put a negative number, but only if the first calculate was done
function addInRealTime(number) {
  if (!firstResult) {
    return;
  }
  finalResult = firstResult + Number(number);
  pResult.innerText = "Resultado: " + finalResult;
}