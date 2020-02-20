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
    errors.password2 = 'Required Password Confirmation';
  } else if (values.password2.length < 6) {
    errors.password2 = 'Password must be at least 6 characters';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Confirmed password does not match';
  }

  // Phone Errors
  if (!values.phone) {
    errors.phone = 'Required Phone';
  } else if (typeof values.phone === 'string') {
    errors.phone = 'Must provide a valid phone number';
  } else if (values.phone.length < 10) {
    errors.phone = 'Phone number must contain 10-15 characters';
  } else if (values.phone.length > 15) {
    errors.phone = 'Phone number must contain 10-15 characters';
  }

  // Address Errors
  if (!values.address) {
    errors.address = 'Required Address';
  } else if (typeof values.address === 'string') {
    errors.address = 'Must provide a valid phone number';
  } else if (errors.address.length < 10) {
    errors.address = 'Must be a valid address';
  }

  // Birthday Errors
  if (!values.birthday) {
    errors.birthday = 'Required Birthday';
  } else if (!/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.test(values.birthday)) {
    errors.birthday = 'Invalid date format';
  }

  // Security Questions Errors
  if (!values.security_answer_1) {
    errors.security_answer_1 = 'Required. Please type an answer.';
  }
  if (!values.security_answer_2) {
    errors.security_answer_2 = 'Required. Please type an answer.';
  }
  if (!values.security_answer_3) {
    errors.security_answer_3 = 'Required. Please type an answer.';
  }

  // Security Answers Errors
  if (!values.security_question_1) {
    errors.security_question_1 = 'Required. Please Choose a Question';
  }
  if (!values.security_question_2) {
    errors.security_question_2 = 'Required. Please Choose a Question';
  }
  if (!values.security_question_3) {
    errors.security_question_3 = 'Required. Please Choose a Question';
  }

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
