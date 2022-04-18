import "./App.css";
import React, { useState } from "react";

function App() {
  const [num, inputNum] = useState("");
  const [operator1, inputOperator] = useState("");
  const [operation, inputOperation] = useState("");
  const [result, setResult] = useState("");

  function setNumber(e) {
    inputNum(num + e.target.value);
    setResult("");
  }

  function eraseNumber(e) {
    inputNum("");
    setResult("");
    inputOperation("");
  }

  function setOperation(e) {
    inputOperation(e.target.value);

    inputOperator(num);
    inputNum("");
  }

  function calculate() {
    inputNum("");

    if (operation === "") {
      setResult("Selecione uma operação!");
    } else if (operation === "+") {
      setResult(Number(operator1) + Number(num));
    } else if (operation === "-") {
      setResult(Number(operator1) - Number(num));
    } else if (operation === "*") {
      setResult(Number(operator1) * Number(num));
    } else if (operation === "/") {
      setResult(Number(operator1) / Number(num));
    }

    inputOperation("");
  }

  return (
    <main>
      <div className="mheader">
        <h1>Calculadora React</h1>
      </div>
      <div className="inputs">
        <p id="operator">{num}</p>
      </div>
      <div className="allButtons">
        <div className="numberButtons">
          <button id="c" onClick={eraseNumber}>
            C
          </button>
          <button id="num1" onClick={setNumber} value={1}>
            1
          </button>
          <button id="num2" onClick={setNumber} value={2}>
            2
          </button>
          <button id="num3" onClick={setNumber} value={3}>
            3
          </button>
          <button id="num4" onClick={setNumber} value={4}>
            4
          </button>
          <button id="num5" onClick={setNumber} value={5}>
            5
          </button>
          <button id="num6" onClick={setNumber} value={6}>
            6
          </button>
          <button id="num7" onClick={setNumber} value={7}>
            7
          </button>
          <button id="num8" onClick={setNumber} value={8}>
            8
          </button>
          <button id="num9" onClick={setNumber} value={9}>
            9
          </button>
          <button id="num0" onClick={setNumber} value={0}>
            0
          </button>
        </div>
        <div className="operationButtons">
          <button id="addition" onClick={setOperation} value="+">
            +
          </button>
          <button id="subtraction" onClick={setOperation} value="-">
            -
          </button>
          <button id="multiplication" onClick={setOperation} value="*">
            x
          </button>
          <button id="division" onClick={setOperation} value="/">
            /
          </button>
          <button id="equal" onClick={calculate}>
            =
          </button>
        </div>
      </div>

      <div className="results">
        <div className="rheader">
          <h2>Resultado é</h2>
        </div>
        <div className="content">{result}</div>
      </div>
    </main>
  );
}

export default App;
