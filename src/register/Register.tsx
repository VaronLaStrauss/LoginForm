import { Component, ReactNode } from "react";
import {
  checkEmailOrUsername,
  checkName,
  checkPasswordLength,
  onSubmit,
  verifyPassword,
} from "../shared/functions/field-validation";
import "./Register.scss";

export default class Register extends Component {
  state: {
    [formKey: string]: {
      value: string;
      error: boolean;
      errorType: "length" | "email" | "empty" | "mismatch";
    };
  } = {};

  render(): ReactNode {
    return (
      <form className="login" onSubmit={onSubmit}>
        <h1>Register</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          onChange={({ target: { value } }) => {
            const { isValid, type: errorType } = checkName(value);
            this.setState({ firstName: { value, error: !isValid, errorType } });
          }}
        />
        {this.state.firstName?.error &&
          this.state.firstName?.errorType === "empty" && (
            <span className="error">
              Please enter your first name so we can get to know you personally.
            </span>
          )}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          onChange={({ target: { value } }) => {
            const { isValid, type: errorType } = checkName(value);
            console.log(errorType);

            this.setState({ lastName: { value, error: !isValid, errorType } });
          }}
        />
        {this.state.lastName?.error &&
          this.state.lastName?.errorType === "empty" && (
            <span className="error">
              Please tell us your last name so we'll know how to address you in
              formal occassions.
            </span>
          )}

        <label htmlFor="register_username">Username</label>
        <input
          type="text"
          id="register_username"
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
        <label htmlFor="register_password">Password</label>
        <input
          type="password"
          id="register_password"
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
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          onChange={({ target: { value } }) => {
            const { isValid, type: errorType } = verifyPassword(
              value,
              this.state.password
            );
            this.setState({
              confirmPassword: { value, error: !isValid, errorType },
            });
          }}
        />
        {this.state.confirmPassword?.error &&
          this.state.confirmPassword?.errorType === "mismatch" && (
            <span className="error">Your passwords don't match.</span>
          )}
        {this.state.confirmPassword?.error &&
          this.state.confirmPassword?.errorType === "length" && (
            <span className="error">
              Maybe we can try to make the password a bit longer?
            </span>
          )}
        {this.state.confirmPassword?.error &&
          this.state.confirmPassword?.errorType === "empty" && (
            <span className="error">Please enter a password.</span>
          )}
        <button type="submit">Register</button>
      </form>
    );
  }
}
