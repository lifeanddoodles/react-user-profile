export default function registerValidation(values) {
  let errors = {};
  // Email Errors
  if (!values.email) {
    errors.email = 'Required Email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Password Errors
  if (!values.password) {
    errors.password = 'Required Password';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
  // Password Confirmation Errors
  if (!values.password2) {
    errors.password2 = 'Required Password';
  } else if (values.password2.length < 6) {
    errors.password2 = 'Password must be at least 6 characters';
  } else if (errors.password2 !== errors.password) {
    errors.password2 = 'Confirmed password does not match';
  }

  // Address Errors
  // if (!values.address) {
  //   errors.address = 'Required Address';
  // } else if (errors.address.length < 10) {
  //   errors.address = 'Must be a valid address';
  // }

  // Birthday Errors
  // if (!values.birthday) {
  //   errors.birthday = 'Required Birthday';
  // } else if (!/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.test(values.birthday)) {
  //   errors.birthday = 'Invalid date format';
  // }

  return errors;
}

export function loginValidation(values) {
  let errors = {};
  // Email Errors
  if (!values.email) {
    errors.email = 'Required Email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Password Errors
  if (!values.password) {
    errors.password = 'Required Password';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
}
