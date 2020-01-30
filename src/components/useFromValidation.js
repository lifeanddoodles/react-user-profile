import React, { useState } from 'react';

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
