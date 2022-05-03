import React from "react";
import { render } from "react-dom";

function Hello(props) {
  return (
    <div>
      <h1>Bonjour {props.name}</h1>
      <p>Vous avez {props.age} ans</p>
    </div>
  );
}

const html = (
  <div>
    <Hello name="Afaf" age={26} />
    <Hello name="David" age={28} />
  </div>
);

const div = document.querySelector("#root");

render(html, div);
