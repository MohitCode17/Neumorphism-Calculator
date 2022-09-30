let result = document.getElementById('result');

function display(number) {
  // show button value in input area
  result.value += number;
};


function calculate() {
  let finalResult = result.value;
  let evaluateResult = eval(finalResult);
  result.value = evaluateResult;
}

function clearScreen() {
  result.value = '';
}

function del() {
  result.value = result.value.slice(0, -1);
}