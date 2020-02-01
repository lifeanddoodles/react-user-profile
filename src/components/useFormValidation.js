import React, { useState } from 'react';
import fetch from 'node-fetch';

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

  const handleSubmit = async event => {
    event.preventDefault();
    const formEl = event.target;
    // console.log(formEl);
    // let formData = new FormData();
    let formData = new FormData(formEl);
    // formData.append('username', 'Groucho');
    // console.log(`FormData: ${formData}`);
    // for (var i = 0; i < formEl.length; ++i) {
    //   formData.append(formEl[i].name, formEl[i].value);
    // }
    // for (var [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    // const params = new URLSearchParams([...new FormData(formEl).entries()]);
    // console.log(params.json());
    const { email, password, password2 } = values;
    // console.log(email);

    try {
      const response = await fetch('http://localhost:5000/users/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, password2 }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.text();
      // const data = await response.json();
      console.log(`Response: ${data}`);
    } catch (error) {
      console.log(error);
    }
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
