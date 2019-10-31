import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Who am I !?</h1>
      <p>ニックネーム:some</p>
      <h2>コメント</h2>
      <p>勉強中です。</p>
      <h2>hobby</h2>
      <p>釣り</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
