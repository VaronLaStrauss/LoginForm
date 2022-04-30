import { Component, ReactNode } from "react";
import {
  checkEmailOrUsername,
  checkPasswordLength,
} from "../shared/functions/field-validation";
import "./Login.scss";

export default class Login extends Component {
  state: {
    [formKey: string]: {
      value: string;
      error: boolean;
      errorType: "length" | "email" | "empty";
    };
  } = {};
  render(): ReactNode {
    return (
      <form className="login">
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={({ target: { value } }) => {
            const { isValid, type: errorType } = checkEmailOrUsername(value);
            this.setState({ username: { value, error: !isValid, errorType } });
          }}
        />
        {this.state.username?.error &&
          this.state.username?.errorType !== "empty" && (
            <span className="error">
              Your username doesn't look right.{" "}
              {this.state.username?.errorType === "length" &&
                "It should be at least 6 characters long."}
              {this.state.username?.errorType === "email" &&
                "It should be a valid email address."}
            </span>
          )}
        {this.state.username?.error &&
          this.state.username?.errorType === "empty" && (
            <span className="error">Please enter a username.</span>
          )}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={({ target: { value } }) => {
            const { isValid, type: errorType } = checkPasswordLength(value);
            this.setState({ password: { value, error: !isValid, errorType } });
          }}
        />
        {this.state.password?.error &&
          this.state.password?.errorType === "length" && (
            <span className="error">
              Maybe we can try to make the password a bit longer?
            </span>
          )}
        {this.state.password?.error &&
          this.state.password?.errorType === "empty" && (
            <span className="error">Please enter a password.</span>
          )}
        <button type="submit">Login</button>
      </form>
    );
  }
}
