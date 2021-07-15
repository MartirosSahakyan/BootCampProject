import React from "react";
import "./App.css";

const cities = ["Hrazdan", "Gyumri", "Erevan", "Vanadzor", "Gavar"];
function isFormFilled(formFields = {}) {
  return Object.values(formFields).every((el) => String(el).length);
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      pass: "",
      city: "Erevan",
      subject: "",
      isPassShown: false,
    };
  }

  handleFormSubmit = (evt, state) => {
    // console.log(isFormFilled(this.state));
    if (isFormFilled(state)) {
      console.log(this.state);
    }
    evt.preventDefault();
  };

  handleName = ({ target: { value } }) => {
    this.setState({
      name: value,
    });
  };
  handlePassword = ({ target: { value } }) => {
    this.setState({
      pass: value,
    });
  };
  handlePassShow = () => {
    this.setState({
      isPassShown: !this.state.isPassShown,
    });
  };
  handleSubject = ({ target: { value } }) => {
    this.setState({
      subject: value,
    });
  };
  handleCity = ({ target: { value } }) => {
    this.setState({
      city: value,
    });
  };

  render() {
    const { isPassShown, city } = this.state;

    return (
      <div className="App">
        <div className="form-container">
          <form onSubmit={(evt) => this.handleFormSubmit(evt, this.state)}>
            <label>
              Name
              <input
                // required
                className="form-fields"
                type="text"
                placeholder="Your name.."
                onChange={this.handleName}
              />
            </label>
            <label>
              Password
              <input
                // required
                className="form-fields"
                type={isPassShown ? "text" : "password"}
                placeholder="Your password.."
                onChange={this.handlePassword}
              />
            </label>
            <label>
              <input onChange={this.handlePassShow} type="checkbox" />
              show password
            </label>
            <br /> <br />
            <label>
              Country
              <select
                onChange={this.handleCity}
                className="form-fields"
                value={city}
              >
                {cities.map((city, index) => {
                  return (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  );
                })}
              </select>
            </label>
            <label>
              Subject
              <textarea
                className="form-fields"
                placeholder="Write something.."
                onChange={this.handleSubject}
              ></textarea>
            </label>
            <input
              disabled={!isFormFilled(this.state)}
              className={
                isFormFilled(this.state)
                  ? "form-submit"
                  : "disable_form-submit"
              }
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
