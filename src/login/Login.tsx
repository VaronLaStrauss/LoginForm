import { ReactNode } from "react";
import { FormComponent } from "../shared/class/form-class";
import {
  checkEmailOrUsername,
  checkMinLength,
} from "../shared/functions/field-validation";
import "./Login.scss";
import logo from "../images/WALLeBayola w Text.png";

export default class Login extends FormComponent {
  controlLength = 2;
  render(): ReactNode {
    // TODO: Change to bootstrap classes
    return (
      <div className="container-fluid">
        <div className="div-logo">
          <img src={logo} className="img-fluid" />
        </div>
        <form className="login" onSubmit={this.onSubmit.bind(this)}>

          <h1><i>Login</i></h1>
          <br></br>
          <label htmlFor="login_username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="login_username"
            className="form-control"
            name="username"
            onChange={({ target: { value } }) => {
              this.markRender("username", value, checkEmailOrUsername(value));
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
          <label htmlFor="login_password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="login_password"
            name="password"
            className="form-control"
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
          <br></br>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!this.completed}
          >
            Sign In
          </button>
          {this.state.completed && (
            <span className="success">
              Welcome back {this.controls.username?.value}!
            </span>
          )}
        </form>
      </div>
    );
  }
}
