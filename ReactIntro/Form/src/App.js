import React from "react";
import "./App.css";

const cities = ["Hrazdan", "Gyumri", "Erevan", "Vanadzor", "Gavar"];
function updateLocalStorage({name, pass, city,subject}) {
  localStorage.setItem('name',name)
  localStorage.setItem('pass',pass)
  localStorage.setItem('city',city)
  localStorage.setItem('subject',subject)
}
function isFormFilled(formFields = {}) {
  return Object.values(formFields).every((el) => String(el).length);
}
function isFormValid(formFields) {
  return isFormFilled(formFields) && isNameValid(formFields.pass)  && isPassValid(formFields.pass)
}
function isPassValid(password) {
  if (password && password.length < 3) {
    return false;
  }
  return true;
}
function isNameValid(name) {
    if (name && name.length < 3) {
      return false;
    }else{
      return true 
    }
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
    if (isFormValid(state)) {
      updateLocalStorage(state)
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
            <label>
              Name
              <input
                className="form-fields"
                type="text"
                placeholder="Your name.."
                onChange={this.handleName}
              />
            </label>
            {!isNameValid(name) && <p className="error">enter correct name</p>}
            <label>
              Password
              <input
                className="form-fields"
                type={isPassShown ? "text" : "password"}
                placeholder="Your password.."
                onChange={this.handlePassword}
              />
            </label>
            {!isPassValid(pass) && <p className="error">enter correct password</p>}

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
              disabled={!isFormValid(this.state)}
              className={
                isFormValid(this.state) ? "form-submit enable-btn" : "form-submit disable-btn"
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
