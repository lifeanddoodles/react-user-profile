import React, { useState } from 'react';
import fetch from 'node-fetch';

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

    const form = event.target;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) {
        throw new Error(response.status);
      }
      // const data = await response.json();
      const data = await response.text();
      // console.log(`Response: ${data}`);
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
