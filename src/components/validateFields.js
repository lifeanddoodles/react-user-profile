export default function validateFields(values) {
  let errors = {};
  // Email Errors
  if (!values.email) {
    errors.email = 'Required Email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Email Address
  if (!values.address) {
    errors.address = 'Required Address';
  } else if (errors.address.length < 10) {
    errors.address = 'Must be a valid address';
  }

  // Birthday Errors
  if (!values.birthday) {
    errors.birthday = 'Required Birthday';
  } else if (!/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.test(values.birthday)) {
    errors.birthday = 'Invalid date format';
  }

  // Password Errors
  // if (!values.password) {
  //   errors.password = "Required Password";
  // } else if (values.password.length < 6) {
  //   errors.password = "Password must be at least 6 characters";
  // }
  return errors;
}
