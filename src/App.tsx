import { Component, ReactNode } from "react";
import "./App.scss";
import Login from "./login/Login";
import Register from "./register/Register";
import { motion } from "framer-motion";

class App extends Component {
  state: { typeChosen: "login" | "register" | undefined } = {
    typeChosen: undefined,
  };

  render(): ReactNode {
    // const mystyle = {
    //   fontFamily: "Masque"
    // };
    const { typeChosen } = this.state;

    const getHoverStyles = (type: "login" | "register" | undefined): object => {
      return {
        scale: typeChosen !== type ? 1.5 : 1,
      };
    };

    return (
      <main>
        <motion.div
          className={`${
            typeChosen === "login"
              ? "active"
              : typeChosen
              ? "left"
              : "container"
          }`}
          onClick={() => this.setState({ typeChosen: "login" })}
          whileHover={getHoverStyles("login")}
        >
          {typeChosen === "login" ? (
            <Login />
          ) : typeChosen ? (
            <span className="button">
              <span className="material-icons">chevron_left</span> Login
            </span>
          ) : (
            //<img src={require('./images/login.png')} />
            // <span className="button" style={mystyle}>Login</span>
            <span className="button">Login</span>
          )}
        </motion.div>
        <motion.div
          className={`${
            typeChosen === "register"
              ? "active"
              : typeChosen
              ? "right"
              : "container"
          }`}
          onClick={() => this.setState({ typeChosen: "register" })}
          whileHover={getHoverStyles("register")}
        >
          {typeChosen === "register" ? (
            <Register />
          ) : typeChosen ? (
            <span className="button">
              Register <span className="material-icons">chevron_right</span>
            </span>
          ) : (
            //<img src={require('./images/register.png')} className="logo" />
            // <span className="button" style={mystyle}>Register</span>
            <span className="button">Register</span>
          )}
        </motion.div>
      </main>
    );
  }
}

export default App;
