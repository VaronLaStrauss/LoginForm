import { Component, FormEvent } from "react";
import { FormType, FormValidResult } from "../types/form-type";

// ! DO NOT TOUCH THIS FILE !
export abstract class FormComponent extends Component {
  controls: FormType = {};
  state: {
    controls: FormType;
    completed: boolean;
  } = { completed: false, controls: this.controls };
  abstract controlLength: number;

  markRender(
    key: string,
    value: string,
    { isValid, type: errorType }: FormValidResult
  ) {
    this.controls[key] = { value, error: !isValid, errorType };
    this.setState({ controls: this.controls });
  }

  get completed(): boolean {
    if (Object.keys(this.controls).length < this.controlLength) return false;
    let complete = true;
    for (let key in this.controls) {
      if (this.controls[key]?.error) {
        complete = false;
        break;
      }
    }

    return complete;
  }

  onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (this.completed) {
      const form = ev.target as HTMLFormElement;
      form.reset();
      this.setState({ completed: true });
    }
  }
}
