import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
