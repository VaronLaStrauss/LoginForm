export function checkEmailOrUsername(value: string) {
  if (value.includes("@")) {
    const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    return regex.test(value);
  }
  return value.length > 6;
}

export function checkPasswordLength(value: string) {
  return value.length > 6;
}

export function checkName(value: string | null) {
  return value !== null;
}
