import { Component, ReactNode } from "react";
import "./App.scss";
import Login from "./login/Login";
import Register from "./register/Register";

class App extends Component {
  render(): ReactNode {
    return (
      // TODO: you can change the layout of this page
      // TODO: design this page as transitionable:
      // * move left to see login, move right to see register
      // TODO: design as responsive and mobile friendly
      <div className="App">
        <Login />
        <Register />
      </div>
    );
  }
}

export default App;
