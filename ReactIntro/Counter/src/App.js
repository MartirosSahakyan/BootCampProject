import React from "react";
import CounterButton from "./components/counterButton";
import CountInput from "./components/countInput";

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      count: localStorage.getItem('count')?+localStorage.getItem('count'):0,
      max: Infinity,
      min: 0,
      step: 1,
    };
    
  }
  componentDidUpdate(){
    localStorage.setItem('count', this.state.count)
  }
  handleIncreaseClick = () => {
    let count = this.state.count;
    let max = Number(this.state.max);
    let step = Number(this.state.step);    
    if (count + step  <= max) {      
      this.setState((prevState) => ({
        count: prevState.count + Number(this.state.step),
      }));
    }
  };
  handleDecreaseClick = () => {
    let count = this.state.count;
    let min = Number(this.state.min);
    let step = Number(this.state.step);

    if (count - step >= min) {
      this.setState((prevState) => ({
        count: prevState.count - Number(this.state.step),
      }));
    }
  };
  handleResetClick = () => {
    this.setState({
      count: 0,
    });
  };

  handleMaxInputValue = (e) => {
    this.setState({
      max: e.target.value,
    });
  };
  handleMinInputValue = (e) => {
    this.setState({
      min: e.target.value,
    });
  };
  handleStepInputValue = (e) => {
    this.setState({
      step: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <CountInput
          label="Max Value"
          handleInputValue={this.handleMaxInputValue}
        />
        <CountInput
          label="Min Value"
          handleInputValue={this.handleMinInputValue}
        />
        <CountInput 
        label="Step" 
        handleInputValue={this.handleStepInputValue} 
        />

        <h2>COUNT:: {this.state.count }</h2>

        <CounterButton
          handleClick={this.handleIncreaseClick}
          btnValue="Increase"
        />
        <CounterButton
          disabled={!this.state.count}
          handleClick={this.handleDecreaseClick}
          btnValue="Decrease"
        />
        <CounterButton 
        handleClick={this.handleResetClick} 
        btnValue="Reset" 
        s/>
      </div>
    );
  }
}

export default App;
