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
    const { typeChosen } = this.state;

    const getHoverStyles = (type: "login" | "register" | undefined): object => {
      return {
        scale: typeChosen !== type ? 1.5 : 1,
      };
    };

    return (
      <main>
        <motion.div
          className={`container ${typeChosen === "login" ? "active" : ""}`}
          onClick={() => this.setState({ typeChosen: "login" })}
          whileHover={getHoverStyles("login")}
        >
          {typeChosen === "login" ? (
            <Login />
          ) : typeChosen ? (
            <>
              <span className="material-icons">chevron_left</span> Login
            </>
          ) : (
            "Login"
          )}
        </motion.div>
        <motion.div
          className={`container ${typeChosen === "register" ? "active" : ""}`}
          onClick={() => this.setState({ typeChosen: "register" })}
          whileHover={getHoverStyles("register")}
        >
          {typeChosen === "register" ? (
            <Register />
          ) : typeChosen ? (
            <>
              Register <span className="material-icons">chevron_right</span>
            </>
          ) : (
            "Register"
          )}
        </motion.div>
      </main>
    );
  }
}

export default App;
