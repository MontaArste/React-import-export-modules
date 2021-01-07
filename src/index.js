import React from "react";
import ReactDOM from "react-dom";
import { add, substract, divide, multiplay } from "./calculator";
//import * as Calculator from "./calculator";

ReactDOM.render(
  <ul>
    <li>{add(1, 5)}</li>
    <li>{substract(1, 5)}</li>
    <li>{multiplay(1, 5)}</li>
    <li>{divide(1, 5)}</li>
  </ul>,
  document.getElementById("root")
);
//<li>{Calculator.add(1, 5)}</li>
