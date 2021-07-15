import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <form>
          <label>
            Name
            <input
              className="form-fields"
              type="text"
              placeholder="Your name.."
            />
          </label>
          <label>
            Password
            <input
              className="form-fields"
              type="password"
              placeholder="Your password.."
            />
          </label>
          <input type="checkbox" id="showPass" />
          <label for="showPass">show password</label>
          <br /> <br />
          <label for="country">Country</label>
          <select className="form-fields" id="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <label for="subject">Subject</label>
          <textarea
            className="form-fields"
            id="subject"
            placeholder="Write something.."
          ></textarea>
          <input className="form-submit" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
