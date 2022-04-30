import { FormEvent } from "react";
import { FormValidResult, FormValues } from "../types/form-type";

export function checkEmailOrUsername(value: string): FormValidResult {
  if (!value) return { type: "empty", isValid: false };
  if (value.includes("@")) {
    return checkEmail(value);
  }
  return checkMinLength(value);
}

export function checkEmail(value: string): FormValidResult {
  if (!value) return { type: "empty", isValid: false };
  const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  return { type: "email", isValid: regex.test(value) };
}

export function checkMinLength(value: string): FormValidResult {
  const length = value.length;
  return { type: length === 0 ? "empty" : "length", isValid: length >= 6 };
}

export function verifyPassword(
  value: string,
  firstPasswordState?: FormValues
): { type: "empty" | "mismatch"; isValid: boolean } {
  if (!value) return { type: "empty", isValid: false };
  if (value.length < 6) return { type: "mismatch", isValid: false };
  if (firstPasswordState && firstPasswordState.value !== value)
    return { type: "mismatch", isValid: false };
  return { type: "empty", isValid: true };
}

export function checkName(value: string | null): FormValidResult {
  return { type: "empty", isValid: !!value };
}

/**
 * @deprecated
 * @param ev
 * @returns
 */
export function getFormData(ev: FormEvent<HTMLFormElement>) {
  ev.preventDefault();
  const formData = Object.fromEntries(
    new FormData(ev.target as HTMLFormElement)
  );
  return formData;
}
