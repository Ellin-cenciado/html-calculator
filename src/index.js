import React from "react";
import ReactDOM from "react-dom/client";
import { solve } from "./solve.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
let input = "";

function handleClick(e) {
  if (e.target.id === "equal") {
    input = solve(input);
    document.getElementById("final-result").innerText = input;
  } else if (e.target.id === "clear") {
    input = ""; 
    document.getElementById("final-result").innerText = "";
  } else {
    input += e.target.id;
    document.getElementById("final-result").innerHTML += e.target.attributes.value.value;
    console.log(input);
  }
}

root.render(
  <>
    <div id="calculator">
      <div id="result" className="result">
        Resultado
        <div id="final-result"></div>
      </div>
      <div id="button-set">
        <div
          id="clear"
          className="op-button"
          value="clear"
          onClick={handleClick}
        >
          C
        </div>
        <div id="modulus" className="op-button" value="%" onClick={handleClick}>
          %
        </div>
        <div id="divide" className="op-button" value="/" onClick={handleClick}>
          /
        </div>
        <div id="multiply" className="op-button" value="*" onClick={handleClick}>
          *
        </div>
        <div id="7" className="button" value="7" onClick={handleClick}>
          7
        </div>
        <div id="8" className="button" value="8" onClick={handleClick}>
          8
        </div>
        <div id="9" className="button" value="9" onClick={handleClick}>
          9
        </div>
        <div
          id="substract"
          className="op-button"
          value="-"
          onClick={handleClick}
        >
          -
        </div>
        <div id="4" className="button" value="4" onClick={handleClick}>
          4
        </div>
        <div id="5" className="button" value="5" onClick={handleClick}>
          5
        </div>
        <div id="6" className="button" value="6" onClick={handleClick}>
          6
        </div>
        <div id="add" className="op-button" value="+" onClick={handleClick}>
          +
        </div>
        <div id="1" className="button" value="1" onClick={handleClick}>
          1
        </div>
        <div id="2" className="button" value="2" onClick={handleClick}>
          2
        </div>
        <div id="3" className="button" value="3" onClick={handleClick}>
          3
        </div>
        
        <div id="0" className="button" value="0" onClick={handleClick}>
          0
        </div>
        <div id="equal" className="op-button" value="=" onClick={handleClick}>
          =
        </div>
        
      </div>
    </div>
  </>
);

//To do, add "value" to divs so that it's easier to solve and display the input in "result"
