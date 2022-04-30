import { Component, ReactNode } from "react";
import "./App.scss";
import Login from "./login/Login";

class App extends Component {
  render(): ReactNode {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
