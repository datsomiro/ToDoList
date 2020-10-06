import React from "react";
import "./style.scss";

export default class Toggle extends React.Component {
  state = {
    toggle: 'check',
  }
  
  handleToggle = () => {
    if (this.state.toggle === 'check') {
      this.setState({toggle: 'cross'});
    } else if (this.state.toggle === 'cross') {
      this.setState({toggle: 'question'});
    } else {
      this.setState({toggle: 'check'});
    }
  }

  render() {
    return (
      <button 
        className={`toggle toggle--${this.state.toggle}`}
        onClick={this.handleToggle}
      ></button>
    );
  }
};
