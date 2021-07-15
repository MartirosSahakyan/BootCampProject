import React from "react";
import { ErrorNotify } from "./form-components/errorNotify";
import { FormInput } from "./form-components/form-input";
import { FormTextarea } from "./form-components/form-textarea";
import "./form.css";
import { cities } from "../../data/cities";
import { isFormValid, isNameValid, isPassValid } from "../../helpers/formValidation";
import { updateLocalStorage } from "../../helpers/localStorage";


class Form extends React.Component {
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
    if (isFormValid(state)) {
      updateLocalStorage(state);
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
    const { isPassShown, city, name, pass } = this.state;

    return (
      <div className="App">
        <div className="form-container">
          <form onSubmit={(evt) => this.handleFormSubmit(evt, this.state)}>
            <FormInput
              handleInput={this.handleName}
              type="text"
              placeholder="Your name.."
              label="Name"
            />
            {!isNameValid(name) && (
              <ErrorNotify message="insert more then 3 letter" />
            )}
            <FormInput
              handleInput={this.handlePassword}
              type={isPassShown ? "text" : "password"}
              placeholder="Your password.."
              label="Password"
            />
            {!isPassValid(pass) && (
              <ErrorNotify message="insert more then 3 letter" />
            )}
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
            <FormTextarea
              label="Subject"
              placeholder="Write something.."
              handleTextarea={this.handleSubject}
            />
            <input
              disabled={!isFormValid(this.state)}
              className={
                isFormValid(this.state)
                  ? "form-submit enable-btn"
                  : "form-submit disable-btn"
              }
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
