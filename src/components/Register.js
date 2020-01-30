import React, { Fragment, useState } from 'react';
import useFormValidation from './useFromValidation';
import validateFields from './validateFields';

const INITIAL_STATE = {
  photo: '',
  email: '',
  phone: '',
  address: '',
  birthday: '',
  security_questions: []
};

export default function Register() {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors
  } = useFormValidation(INITIAL_STATE, validateFields);

  return (
    <Fragment>
      <h1>Register</h1>
      <form action='' className='form user-profile' onSubmit={handleSubmit}>
        <p>All fields are required.</p>
        <h2 className='form__section'>User Details</h2>
        <div className='form__group'>
          <label htmlFor='photo'>Photo</label>
          <div className='input user-profile__avatar'>
            <input
              type='file'
              name='photo'
              id='photo'
              accept='.jpg, .jpeg, .png'
              className='user-profile__avatar-upload'
              required
              onChange={handleChange}
            />
            <img
              src={values.photo}
              alt={values.photo !== '' ? 'Preview' : ''}
              width='150'
              height='150'
            />
          </div>
        </div>
        <div className='form__group'>
          <label htmlFor='phone'>Phone Number</label>
          <input
            type='tel'
            name='phone'
            id='phone'
            value={values.phone}
            required
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className='form__group'>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            name='address'
            id='address'
            value={values.address}
            minLength='10'
            required
            pattern='/^[a-zA-Z\s\d\/]*\d[a-zA-Z\s\d\/]*$/'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.address && (
            <p className='message message--error'>{errors.address}</p>
          )}
        </div>
        <div className='form__group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={values.email}
            required
            placeholder='name@domain.com'
            pattern='/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && (
            <p className='message message--error'>{errors.email}</p>
          )}
        </div>
        <div className='form__group'>
          <label htmlFor='birthday'>Birthday (MM/DD/YYYY)</label>
          <input
            type='date'
            name='birthday'
            id='birthday'
            value={values.birthday}
            required
            placeholder='mm-dd-yyyy'
            pattern='/^\d{1,2}\/\d{1,2}\/\d{4}$/'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.birthday && (
            <p className='message message--error'>{errors.birthday}</p>
          )}
        </div>
        <h2 className='form__section'>Security Questions</h2>
        <p>
          These questions will help us verify your identity should you forget
          your password. Choose three questions below.
        </p>
        <div className='form__group'>
          <label htmlFor='' name='security-question-1'>
            Security question 1
          </label>
          <select
            name='security-question-1'
            id='security-question-1'
            disabled
            defaultValue='0'
            required
          >
            <option value=''>Select your option</option>
          </select>
        </div>
        <div className='form__group'>
          <label htmlFor='' name='security-question-2'>
            Security question 2
          </label>
          <select
            name='security-question-2'
            id='security-question-2'
            disabled
            defaultValue='0'
            required
          >
            <option value=''>Select your option</option>
          </select>
        </div>
        <div className='form__group'>
          <label htmlFor='' name='security-question-3'>
            Security question 3
          </label>
          <select
            name='security-question-3'
            id='security-question-3'
            disabled
            defaultValue='0'
            required
          >
            <option value='0'>Select your option</option>
          </select>
        </div>
        <button className='button--accent' type='submit'>
          Create Account
        </button>
      </form>
    </Fragment>
  );
}
