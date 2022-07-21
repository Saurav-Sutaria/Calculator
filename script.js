let screenEl = document.querySelector(".screen");
let currNum = "";
let stackNum = [];
let stackOp = [];
function push(a) {
  screenEl.textContent += a;
  currNum += a;
}
function backspace() {
  let str = screenEl.textContent;
  if (str.length > 0) {
    str = str.substring(0, str.length - 1);
    currNum = str;
    screenEl.textContent = str;
  }
}
function clearScreen() {
  screenEl.textContent = "";
  stackNum = [];
  stackOp = [];
  currNum = "";
}
function pushOp(a) {
  screenEl.textContent += a;
  if (currNum.length != 0) {
    stackNum.push(currNum);
  }
  currNum = "";
  stackOp.push(a);
}
function findAnswer() {
  stackNum.push(currNum);
  console.log(stackNum);
  currNum = "";
  let num1 = 0;
  let num2 = 0;
  let result = 0;
  while (stackNum.length != 1) {
    num1 = stackNum.shift();
    num2 = stackNum.shift();
    let operation = stackOp.shift();
    switch (operation) {
      case "+":
        result = Number(num1) + Number(num2);
        stackNum.unshift(result);
        break;
      case "-":
        result = Number(num1) - Number(num2);
        stackNum.unshift(result);
        break;
      case "*":
        result = Number(num1) * Number(num2);
        stackNum.unshift(result);
        break;
      case "/":
        result = Number(num1) / Number(num2);
        stackNum.unshift(result);
        break;
    }
  }
  console.log(stackNum);
  screenEl.textContent = result;
}
