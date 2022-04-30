export type FormType = {
  [formKey: string]: FormValues;
};

type ErrorTypes = "length" | "email" | "empty" | "mismatch";

export type FormValues = {
  value: string;
  error: boolean;
  errorType: ErrorTypes;
};

export type FormValidResult = {
  type: ErrorTypes;
  isValid: boolean;
};
