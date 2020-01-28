import React, { useEffect, useState } from 'react';

export default function UserProfile() {
  const handleChange = event => {
    console.log(`${event.target.name}: ${event.target.value}`);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Submitted`);
  };

  return (
    <div id='content' className='content'>
      <main>
        <h1>Register</h1>
        <form action='' className='form user-profile' onSubmit={handleSubmit}>
          <p>All fields are required.</p>
          <h2 className='form__section'>User Details</h2>
          <div className='form__group'>
            <label htmlFor='avatar'>Photo</label>
            <input
              type='image'
              name='avatar'
              src='https://via.placeholder.com/150'
              alt=''
              className='user-profile__avatar'
              required
            />
          </div>
          <div className='form__group'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='tel'
              name='phone'
              id='phone'
              required
              onChange={handleChange}
            />
          </div>
          <div className='form__group'>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              name='address'
              id='address'
              required
              onChange={handleChange}
            />
          </div>
          <div className='form__group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              required
              onChange={handleChange}
            />
          </div>
          <div className='form__group'>
            <label htmlFor='birthday'>Birthday</label>
            <input
              type='date'
              name='birthday'
              id='birthday'
              required
              onChange={handleChange}
            />
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
      </main>
    </div>
  );
}
