export type FormType = {
  [formKey: string]: {
    value: string;
    error: boolean;
    errorType: "length" | "email" | "empty";
  };
};
