import React, { Fragment, useState } from 'react';
import useFormValidation, { questions } from './useFormValidation';
import validateFields from './validateFields';

const INITIAL_STATE = {
  email: '',
  password: ''
};

export default function Login() {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors
  } = useFormValidation(INITIAL_STATE, validateFields);

  return (
    <Fragment>
      <h1>Login</h1>
      <form className='form user-profile' onSubmit={handleSubmit}>
        <p>All fields are required.</p>
        <div className='form__group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={values.email}
            required
            placeholder='name@domain.com'
            pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && (
            <p className='message message--error'>{errors.email}</p>
          )}
        </div>
        <div className='form__group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            minLength='6'
            maxLength='20'
            value={values.password}
            required
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Fill Your Password'
          />
          {errors.password && (
            <p className='message message--error'>{errors.password}</p>
          )}
        </div>
        <button className='button--accent' type='submit'>
          Create Account
        </button>
      </form>
    </Fragment>
  );
}
