import { Component, ReactNode } from "react";
import {
  checkEmailOrUsername,
  checkPasswordLength,
  onSubmit,
} from "../shared/functions/field-validation";
import { FormType } from "../shared/types/form-type";
import "./Login.scss";

export default class Login extends Component {
  controls: FormType = {};

  state: {
    controls: FormType;
    completed: boolean;
  } = { completed: false, controls: this.controls };

  render(): ReactNode {
    return (
      <form className="login" onSubmit={onSubmit}>
        <h1>Login</h1>
        <label htmlFor="login_username">Username</label>
        <input
          type="text"
          id="login_username"
          name="username"
          onChange={({ target: { value } }) => {
            const { isValid, type: errorType } = checkEmailOrUsername(value);
            this.controls.username = { value, error: !isValid, errorType };
            this.setState({ controls: this.controls });
          }}
        />
        {this.controls.username?.error &&
          this.controls.username?.errorType !== "empty" && (
            <span className="error">
              Your username doesn't look right.{" "}
              {this.controls.username?.errorType === "length" &&
                "It should be at least 6 characters long."}
              {this.controls.username?.errorType === "email" &&
                "It should be a valid email address."}
            </span>
          )}
        {this.controls.username?.error &&
          this.controls.username?.errorType === "empty" && (
            <span className="error">Please enter a username.</span>
          )}
        <label htmlFor="login_password">Password</label>
        <input
          type="password"
          id="login_password"
          name="password"
          onChange={({ target: { value } }) => {
            const { isValid, type: errorType } = checkPasswordLength(value);
            this.setState({ password: { value, error: !isValid, errorType } });
          }}
        />
        {this.controls.password?.error &&
          this.controls.password?.errorType === "length" && (
            <span className="error">
              Maybe we can try to make the password a bit longer?
            </span>
          )}
        {this.controls.password?.error &&
          this.controls.password?.errorType === "empty" && (
            <span className="error">Please enter a password.</span>
          )}
        <button type="submit">Login</button>
      </form>
    );
  }
}
