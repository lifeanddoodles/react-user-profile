import React, { Fragment, useState } from 'react';
import useFormValidation, { questions } from '../helpers/useFormValidation';
import registerValidation from '../helpers/validation';

const INITIAL_STATE = {
  email: '',
  password: '',
  password2: '',
  photo: '',
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
  } = useFormValidation(INITIAL_STATE, registerValidation);

  const [selectedQuestions, setQuestions] = useState({});

  const options = questions.map((question, index) => {
    const isDisabled = Object.values(selectedQuestions).includes(question);

    return (
      <option disabled={isDisabled} value={question} key={index}>
        {question}
      </option>
    );
  });

  const selectQuestion = e => {
    const { name, value } = e.target;
    setQuestions({
      ...selectedQuestions,
      [name]: value
    });
  };

  return (
    <Fragment>
      <h1>Register</h1>
      <form
        action='http://localhost:5000/users/register'
        className='form user-profile'
        method='POST'
        onSubmit={handleSubmit}
      >
        <p>All fields are required.</p>
        <div className='form__section'>
          <h2 className='form__section-title'>User Credentials</h2>
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
              placeholder='Create Password'
            />
            {errors.password && (
              <p className='message message--error'>{errors.password}</p>
            )}
          </div>
          <div className='form__group'>
            <label htmlFor='password2'>Confirm Password</label>
            <input
              type='password'
              name='password2'
              id='password2'
              minLength='6'
              maxLength='20'
              value={values.password2}
              required
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Confirm Password'
            />
            {errors.password2 && (
              <p className='message message--error'>{errors.password2}</p>
            )}
          </div>
        </div>
        <div className='form__section'>
          <h2 className='form__section-title'>User Details</h2>
          {/* <div className='form__group'>
            <label htmlFor='photo'>Photo</label>
            <div className='input user-profile__avatar'>
              <input
                type='file'
                name='photo'
                id='photo'
                accept='.jpg, .jpeg, .png'
                className='user-profile__avatar-upload'
                // required
                onChange={handleChange}
              />
              <img
                src={values.photo}
                alt={values.photo !== '' ? 'Preview' : ''}
                width='150'
                height='150'
              />
            </div>
          </div> */}
          <div className='form__group'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='tel'
              name='phone'
              id='phone'
              value={values.phone}
              minLength='10'
              maxLength='15'
              required
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {/* <div className='form__group'>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              name='address'
              id='address'
              value={values.address}
              minLength='10'
              // required
              pattern='/^[a-zA-Z\s\d\/]*\d[a-zA-Z\s\d\/]*$/'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.address && (
              <p className='message message--error'>{errors.address}</p>
            )}
          </div>
          <div className='form__group'>
            <label htmlFor='birthday'>Birthday (MM/DD/YYYY)</label>
            <input
              type='date'
              name='birthday'
              id='birthday'
              value={values.birthday}
              // required
              placeholder='mm-dd-yyyy'
              pattern='/^\d{1,2}\/\d{1,2}\/\d{4}$/'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.birthday && (
              <p className='message message--error'>{errors.birthday}</p>
            )}
          </div>
        </div>
        <div className='form__section'>
          <h2 className='form__section-title'>Security Questions</h2>
          <p>
            These questions will help us verify your identity should you forget
            your password. Choose three questions below.
          </p>
          <div className='form__group'>
            <label htmlFor='security_question_1' name='security_question_1'>
              Security question 1
            </label>
            <select
              name='security_question_1'
              id='security_question_1'
              onChange={selectQuestion}
            >
              <option value=''>Select a question</option>
              {options}
            </select>
          </div>
          <div className='form__group'>
            <label htmlFor='security_question_2' name='security_question_2'>
              Security question 2
            </label>
            <select
              name='security_question_2'
              id='security_question_2'
              onChange={selectQuestion}
            >
              <option value=''>Select a question</option>
              {options}
            </select>
          </div>
          <div className='form__group'>
            <label htmlFor='security_question_3' name='security_question_3'>
              Security question 3
            </label>
            <select
              name='security_question_3'
              id='security_question_3'
              onChange={selectQuestion}
            >
              <option value=''>Select a question</option>
              {options}
            </select>
          </div> */}
        </div>
        <button className='button--accent' type='submit'>
          Create Account
        </button>
      </form>
    </Fragment>
  );
}
