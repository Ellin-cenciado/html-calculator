const buttons = document.getElementsByClassName("button");
const operators = document.getElementsByClassName("op-button");

let input = "";
const result = document.getElementById("final-result");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    handleInput(buttons[i].id);
  });
}

for (let k = 0; k < operators.length; k++) {
  operators[k].addEventListener("click", () => {
    parseInt(input);
    let keyPressed = operators[k].innerHTML;

    if (keyPressed == "=") {
      evaluate(input);
      return;
    }
    if (keyPressed == "C") {
      clearInput(input);
      return;
    } else {
      handleInput(operators[k].innerHTML);
    }
  });
}

function evaluate(numbers) {
  let result = JSON.stringify(eval(numbers));
  console.log("the result is: ", result);
  document.getElementById("final-result").innerHTML = result;
  input = "";
}

function clearInput(numbers) {
  input = "";
  document.getElementById('final-result').innerHTML = input;
  console.log("cleared input");
}

function handleInput(x) {
  input += x;
  document.getElementById("final-result").innerText = input;
  console.log(input);
}
