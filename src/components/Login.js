import React, { Fragment, useState } from 'react';
import useFormValidation, {
  questions
} from '../../backend/utils/useFormValidation';
import loginValidation from '../../backend/utils/validation';

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
  } = useFormValidation(INITIAL_STATE, loginValidation);

  return (
    <Fragment>
      <h1>Login</h1>
      <form
        action='http://localhost:5000/users/login'
        className='form user-profile'
        method='POST'
        onSubmit={handleSubmit}
      >
        <p>Login to view your profile. All fields are required.</p>
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
          Log In
        </button>
      </form>
    </Fragment>
  );
}
