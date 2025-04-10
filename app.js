let AC = document.querySelector("#btn1");
let divide = document.querySelector("#btn2");
let deleteBtn = document.querySelector("#btn3");
let seven = document.querySelector("#btn4");
let eight = document.querySelector("#btn5");
let nine = document.querySelector("#btn6");
let multiply = document.querySelector("#btn7");
let four = document.querySelector("#btn8");
let five = document.querySelector("#btn9");
let six = document.querySelector("#btn10");
let minus = document.querySelector("#btn11");
let one = document.querySelector("#btn12");
let two = document.querySelector("#btn13");
let three = document.querySelector("#btn14");
let plus = document.querySelector("#btn15");
let zero = document.querySelector("#btn16");
let dot = document.querySelector("#btn17");
let equal = document.querySelector("#btn18");

let calcshower = document.querySelector(".calc__top");
let calculatorAns = "";

zero.addEventListener("click", () => {
  if (calculatorAns !== "0") {
    calculatorAns += "0";
    calcshower.innerHTML = calculatorAns;
  }
});

one.addEventListener("click", () => {
  calculatorAns += "1";
  calcshower.innerHTML = calculatorAns;
});

two.addEventListener("click", () => {
  calculatorAns += "2";
  calcshower.innerHTML = calculatorAns;
});

three.addEventListener("click", () => {
  calculatorAns += "3";
  calcshower.innerHTML = calculatorAns;
});

four.addEventListener("click", () => {
  calculatorAns += "4";
  calcshower.innerHTML = calculatorAns;
});

five.addEventListener("click", () => {
  calculatorAns += "5";
  calcshower.innerHTML = calculatorAns;
});

six.addEventListener("click", () => {
  calculatorAns += "6";
  calcshower.innerHTML = calculatorAns;
});

seven.addEventListener("click", () => {
  calculatorAns += "7";
  calcshower.innerHTML = calculatorAns;
});

eight.addEventListener("click", () => {
  calculatorAns += "8";
  calcshower.innerHTML = calculatorAns;
});

nine.addEventListener("click", () => {
  calculatorAns += "9";
  calcshower.innerHTML = calculatorAns;
});

AC.addEventListener("click", () => {
  calculatorAns = "";
  calcshower.innerHTML = calculatorAns;
});

divide.addEventListener("click", () => {
  if (calculatorAns.match(/[\+\-\*\/]/)) {
    calculatorAns = eval(calculatorAns);
    calculatorAns += "/";
    calcshower.innerHTML = calculatorAns;
  } else {
    calculatorAns += "/";
    calcshower.innerHTML = calculatorAns;
  }
});

multiply.addEventListener("click", () => {
  if (calculatorAns.match(/[\+\-\*\/]/)) {
    calculatorAns = eval(calculatorAns);
    calculatorAns += "*";
    calcshower.innerHTML = calculatorAns;
  } else {
    calculatorAns += "*";
    calcshower.innerHTML = calculatorAns;
  }
});

minus.addEventListener("click", () => {
  if (calculatorAns.match(/[\+\-\*\/]/)) {
    calculatorAns = eval(calculatorAns);
    calculatorAns += "-";
    calcshower.innerHTML = calculatorAns;
  } else {
    calculatorAns += "-";
    calcshower.innerHTML = calculatorAns;
  }
});

plus.addEventListener("click", () => {
  if (calculatorAns.match(/[\+\-\*\/]/)) {
    calculatorAns = eval(calculatorAns);
    calculatorAns += "+";
  } else {
    calculatorAns += "+";
  }
  calcshower.innerHTML = calculatorAns;
});

dot.addEventListener("click", () => {
  if (calculatorAns === "") return;

  const lastNum = calculatorAns.split(/[\+\-\*\/]/).pop();

  if (!lastNum.includes(".")) {
    calculatorAns += ".";
    calcshower.innerHTML = calculatorAns;
  }
  
});

deleteBtn.addEventListener("click", () => {
    calculatorAns = calculatorAns.slice(0, -1); 
    calcshower.innerHTML = calculatorAns;
  });
  

equal.addEventListener("click", () => {
  calculatorAns = eval(calculatorAns);
  calcshower.innerHTML = calculatorAns;
  calcshower.innerHTML = calculatorAns;
});
