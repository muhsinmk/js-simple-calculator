const screen = document.getElementById("screen");

//* Click Fn
function btnClick (value) {
  screen.value += value;
};

//* Clear Screen Fn
function clearScreen () {
  screen.value = "";
};

//* Result Fn
function findResult (){
  let result = eval (screen.value);
  screen.value = result;
};