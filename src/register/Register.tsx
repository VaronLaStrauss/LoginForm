import { ReactNode } from "react";
import { FormComponent } from "../shared/class/form-class";
import {
  checkEmail,
  checkMinLength,
  checkName,
  verifyPassword,
} from "../shared/functions/field-validation";
import "./Register.scss";
import logo from '../images/WALLeBayola w Text.png';

export default class Register extends FormComponent {
  controlLength = 6;

  render(): ReactNode {
    // TODO: You're free to change the elements EXCEPT the form and inputs
    return (<>
      <div className="register-container-form">
        <form className="register" onSubmit={this.onSubmit.bind(this)}>
          <img src={logo} />
          <h1>Register</h1>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={({ target: { value } }) => {
              this.markRender("firstName", value, checkName(value));
            }}
          />
          {this.controls.firstName?.error &&
            this.controls.firstName?.errorType === "empty" && (
              <span className="error">
                Please enter your first name so we can get to know you personally.
              </span>
            )}
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={({ target: { value } }) => {
              this.markRender("lastName", value, checkName(value));
            }}
          />
          {this.controls.lastName?.error &&
            this.controls.lastName?.errorType === "empty" && (
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
              this.markRender("username", value, checkMinLength(value));
            }}
          />
          {this.controls.username?.error &&
            this.controls.username?.errorType !== "empty" && (
              <span className="error">
                Your username doesn't look right. It should be at least 6
                characters long.
                {this.controls.username?.errorType === "length" && ""}
                {this.controls.username?.errorType === "email" &&
                  "It should be a valid email address."}
              </span>
            )}
          {this.controls.username?.error &&
            this.controls.username?.errorType === "empty" && (
              <span className="error">Please enter a username.</span>
            )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={({ target: { value } }) => {
              this.markRender("email", value, checkEmail(value));
            }}
          />
          {this.controls.email?.error &&
            this.controls.email?.errorType === "email" && (
              <span className="error">
                Your email doesn't look right. It should be a valid email address.
              </span>
            )}
          {this.controls.email?.error &&
            this.controls.email?.errorType === "empty" && (
              <span className="error">Please enter your email address</span>
            )}
          <label htmlFor="register_password">Password</label>
          <input
            type="password"
            id="register_password"
            onChange={({ target: { value } }) => {
              this.markRender("password", value, checkMinLength(value));
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            onChange={({ target: { value } }) => {
              this.markRender(
                "confirmPassword",
                value,
                verifyPassword(value, this.controls.checkPassword)
              );
            }}
          />
          {this.controls.confirmPassword?.error &&
            this.controls.confirmPassword?.errorType === "mismatch" && (
              <span className="error">Your passwords don't match.</span>
            )}
          {this.controls.confirmPassword?.error &&
            this.controls.confirmPassword?.errorType === "length" && (
              <span className="error">
                Maybe we can try to make the password a bit longer?
              </span>
            )}
          {this.controls.confirmPassword?.error &&
            this.controls.confirmPassword?.errorType === "empty" && (
              <span className="error">Please enter a password.</span>
            )}
          {this.state.completed && (
            <span className="success">
              You're all set! You can now log in with your new account.
            </span>
          )}
          <br>
          </br>
          <button type="submit" disabled={!this.completed}>
            Register
          </button>
        </form>
        </div>
        </>);
  }
}
