import { Component, ReactNode } from "react";
import "./Login.scss";

export default class Login extends Component {
  render(): ReactNode {
    return (
      <form className="login">
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}
