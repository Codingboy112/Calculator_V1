let btnAC = document.querySelector("#btn1");
let btndivide = document.querySelector("#btn2");
let btndeleteBtn = document.querySelector("#btn3");
let btnseven = document.querySelector("#btn4");
let btneight = document.querySelector("#btn5");
let btnnine = document.querySelector("#btn6");
let btnmultiply = document.querySelector("#btn7");
let btnfour = document.querySelector("#btn8");
let btnfive = document.querySelector("#btn9");
let btnsix = document.querySelector("#btn10");
let btnminus = document.querySelector("#btn11");
let btnone = document.querySelector("#btn12");
let btntwo = document.querySelector("#btn13");
let btnthree = document.querySelector("#btn14");
let btnplus = document.querySelector("#btn15");
let btnzero = document.querySelector("#btn16");
let btndot = document.querySelector("#btn17");
let btnequal = document.querySelector("#btn18");
let fatherButtons = document.querySelector(".calc__bottom");

let calcshower = document.querySelector(".calc__top");
let calculatorAns = "";

function zero() {
  if (calculatorAns !== "0") {
    calculatorAns += "0";
    calcshower.innerHTML = calculatorAns;
  }
}

function one() {
  calculatorAns += "1";
  calcshower.innerHTML = calculatorAns;
}

function two() {
  calculatorAns += "2";
  calcshower.innerHTML = calculatorAns;
}

function three() {
  calculatorAns += "3";
  calcshower.innerHTML = calculatorAns;
}

function four() {
  calculatorAns += "4";
  calcshower.innerHTML = calculatorAns;
}

function five() {
  calculatorAns += "5";
  calcshower.innerHTML = calculatorAns;
}

function six() {
  calculatorAns += "6";
  calcshower.innerHTML = calculatorAns;
}

function seven() {
  calculatorAns += "7";
  calcshower.innerHTML = calculatorAns;
}

function eight() {
  calculatorAns += "8";
  calcshower.innerHTML = calculatorAns;
}

function nine() {
  calculatorAns += "9";
  calcshower.innerHTML = calculatorAns;
}

function AC() {
  calculatorAns = "";
  calcshower.innerHTML = calculatorAns;
}

function divide() {
  if (calculatorAns.match(/[\+\-\*\/]/)) {
    calculatorAns = eval(calculatorAns);
    calculatorAns += "/";
    calcshower.innerHTML = calculatorAns;
  } else {
    calculatorAns += "/";
    calcshower.innerHTML = calculatorAns;
  }
}

function multiply() {
  if (calculatorAns.match(/[\+\-\*\/]/)) {
    calculatorAns = eval(calculatorAns);
    calculatorAns += "*";
    calcshower.innerHTML = calculatorAns;
  } else {
    calculatorAns += "*";
    calcshower.innerHTML = calculatorAns;
  }
}

function minus() {
  if (calculatorAns.match(/[\+\-\*\/]/)) {
    calculatorAns = eval(calculatorAns);
    calculatorAns += "-";
    calcshower.innerHTML = calculatorAns;
  } else {
    calculatorAns += "-";
    calcshower.innerHTML = calculatorAns;
  }
}

function plus() {
  if (calculatorAns.match(/[\+\-\*\/]/)) {
    calculatorAns = eval(calculatorAns);
    calculatorAns += "+";
  } else {
    calculatorAns += "+";
  }
  calcshower.innerHTML = calculatorAns;
}

function dot() {
  if (calculatorAns === "") return;

  const lastNum = calculatorAns.split(/[\+\-\*\/]/).pop();

  if (!lastNum.includes(".")) {
    calculatorAns += ".";
    calcshower.innerHTML = calculatorAns;
  }
}

function deleteBtn() {
  calculatorAns = calculatorAns.slice(0, -1);
  calcshower.innerHTML = calculatorAns;
}

function equal() {
  calculatorAns = eval(calculatorAns);
  calcshower.innerHTML = calculatorAns;
  calcshower.innerHTML = calculatorAns;
}

btnzero.addEventListener("click", zero);
btnone.addEventListener("click", one);
btntwo.addEventListener("click", two);
btnthree.addEventListener("click", three);
btnfour.addEventListener("click", four);
btnfive.addEventListener("click", five);
btnsix.addEventListener("click", six);
btnseven.addEventListener("click", seven);
btneight.addEventListener("click", eight);
btnnine.addEventListener("click", nine);
btnAC.addEventListener("click", AC);
btndivide.addEventListener("click", divide);
btndeleteBtn.addEventListener("click", deleteBtn);
btnmultiply.addEventListener("click", multiply);
btnminus.addEventListener("click", minus);
btnplus.addEventListener("click", plus);
btnequal.addEventListener("click", equal);
btndot.addEventListener("click", dot);

document.addEventListener("keydown", (event) => {
  if (event.key === "0") {
    zero();
  } else if (event.key === "1") {
    one();
  } else if (event.key === "2") {
    two();
  } else if (event.key === "3") {
    three();
  } else if (event.key === "4") {
    four();
  } else if (event.key === "5") {
    five();
  } else if (event.key === "6") {
    six();
  } else if (event.key === "7") {
    seven();
  } else if (event.key === "8") {
    eight();
  } else if (event.key === "9") {
    nine();
  } else if (event.key === "/") {
    divide();
  } else if (event.key === "+") {
    plus();
  } else if (event.key === "-") {
    minus();
  } else if (event.key === "*") {
    multiply();
  } else if (event.key === ".") {
    dot();
  } else if (event.key === "Backspace") {
    deleteBtn();
  } else if (event.key === "Enter") {
    equal();
  }
});