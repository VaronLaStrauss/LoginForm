import { Component } from "react";
import { FormType, FormValidResult } from "../types/form-type";

export abstract class Form extends Component {
  controls: FormType = {};

  state: {
    controls: FormType;
    completed: boolean;
  } = { completed: false, controls: this.controls };

  markRender(
    key: string,
    value: string,
    { isValid, type: errorType }: FormValidResult
  ) {
    this.controls[key] = { value, error: !isValid, errorType };
    this.setState({ controls: this.controls });
  }

  get completed(): boolean {
    let complete = true;
    for (let key in this.controls) {
      if (this.controls[key].error) {
        complete = false;
        break;
      }
    }
    return complete;
  }

  onSubmit() {
    if (this.completed) {
      this.setState({ completed: true });
    }
  }
}
