import { FormEvent } from "react";

export function checkEmailOrUsername(value: string | null): {
  type: "email" | "length" | "empty";
  isValid: boolean;
} {
  if (!value) return { type: "empty", isValid: false };
  if (value.includes("@")) {
    const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    return { type: "email", isValid: regex.test(value) };
  }
  return { type: "length", isValid: value.length >= 6 };
}

export function checkPasswordLength(value: string): {
  type: "length" | "empty";
  isValid: boolean;
} {
  const length = value.length;
  return { type: length === 0 ? "empty" : "length", isValid: length >= 6 };
}

export function verifyPassword(
  value: string,
  firstPasswordState?: {
    value: string;
    error: boolean;
    errorType: "length" | "email" | "empty" | "mismatch";
  }
): { type: "empty" | "mismatch"; isValid: boolean } {
  if (!value) return { type: "empty", isValid: false };
  if (value.length < 6) return { type: "mismatch", isValid: false };
  if (firstPasswordState && firstPasswordState.value !== value)
    return { type: "mismatch", isValid: false };
  return { type: "empty", isValid: true };
}

export function checkName(value: string | null): {
  type: "empty";
  isValid: boolean;
} {
  return { type: "empty", isValid: !!value };
}

export function onSubmit(ev: FormEvent<HTMLFormElement>) {
  ev.preventDefault();
  const formData = Object.fromEntries(
    new FormData(ev.target as HTMLFormElement)
  );
  console.log(formData);
}
