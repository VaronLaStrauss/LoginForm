import { Component, ReactNode } from "react";
import "./App.scss";
import Login from "./login/Login";
import Register from "./register/Register";
import logo from './images/WALLeBayola w Text.png';

class App extends Component {
  render(): ReactNode {
      // TODO: you can change the layout of this page
      // TODO: design this page as transitionable:
      // * move left to see login, move right to see register
      // TODO: design as responsive and mobile friendly
    return (<>
      <div className="socialmedia">
        <h1 className="caption">Connect with people on their wall around the world.</h1>
        <h2 className="invite">Join <i>WALLeBayola</i> today.</h2>
      </div>
      <div className="App">
        <Login />
          <div className="strike">
            <span className="or">OR</span>
          </div>
        <Register />
      </div>
      </>);
  }
}

export default App;
