import React from "react";
import Toggle from '../Toggle/index.jsx';
import "./style.scss";

export default class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <Toggle />
        <div className="todo-item__text">{this.props.text}</div>
      </div>
    );
  }
};
