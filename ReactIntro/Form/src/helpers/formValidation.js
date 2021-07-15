export function isPassValid(password) {
  if (password && password.length < 3) {
    return false;
  }
  return true;
}
export function isNameValid(name) {
  if (name && name.length < 3) {
    return false;
  } else {
    return true;
  }
}
export function isFormFilled(formFields = {}) {
  return Object.values(formFields).every((el) => String(el).length);
}
export function isFormValid(formFields) {
  return (
    isFormFilled(formFields) &&
    isNameValid(formFields.pass) &&
    isPassValid(formFields.pass)
  );
}
