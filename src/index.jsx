import React from "react";
import ReactDOM from "react-dom";
import TodoItem from "./TodoItem/index.jsx";
import "./style.scss";
import "./index.html";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <TodoItem text="Take out the trash" />
        <TodoItem text="Buy vegetables" />
        <TodoItem text="Pay the bills" />
      </div>
    );
  }
}

const appElm = document.querySelector("#app");
ReactDOM.render(<App />, appElm);
