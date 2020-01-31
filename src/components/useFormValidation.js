import React, { useState } from 'react';

export const questions = [
  'What was your childhood nickname?',
  'In what city did you meet your spouse/significant other?',
  'What is the name of your favorite childhood friend?',
  'What street did you live on in third grade?',
  'What is your oldest sibling’s birthday month and year? (e.g., January 1900)',
  'What is the middle name of your youngest child?',
  "What is your oldest sibling's middle name?",
  'What school did you attend for sixth grade?',
  'What was your childhood phone number including area code? (e.g., 000-000-0000)',
  "What is your oldest cousin's first and last name?"
];

function useFormValidation(initialState, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Submitted`);
  };

  return {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors
  };
}

export default useFormValidation;
