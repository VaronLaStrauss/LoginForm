import { Component, ReactNode } from "react";
import "./App.scss";
import Login from "./login/Login";
import Register from "./register/Register";

class App extends Component {
  render(): ReactNode {
    return (
      <div className="App">
        <Login />
        <Register />
      </div>
    );
  }
}

export default App;
