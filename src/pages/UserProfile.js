import React from 'react';

export default function UserProfile() {
  return (
    <div id='content' className='content'>
      <main>
        <h1>User Profile</h1>
        <p>All fields are required.</p>

        <form action='' className='user-profile' method='POST'>
          <h2>User Details</h2>
          <label htmlFor='avatar'>Photo</label>
          <input
            type='image'
            name='avatar'
            src='https://via.placeholder.com/150'
            alt=''
          />
          <label htmlFor='phone'>Phone Number</label>
          <input type='tel' name='phone' id='phone' />
          <label htmlFor='address'>Address</label>
          <input type='text' name='address' id='address' />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
          <label htmlFor='birthday'>Birthday</label>
          <input type='date' name='birthday' id='birthday' />
          <h2>Security Questions</h2>
          <p>
            Select three questions below. These questions will help us verify
            your identity should you forget your password.
          </p>
          <label htmlFor='' name='security-question-1'>
            Security question 1
          </label>
          <select
            name='security-question-1'
            id='security-question-1'
            disabled
            defaultValue='0'
          >
            <option value=''>Select your option</option>
          </select>
          <label htmlFor='' name='security-question-2'>
            Security question 2
          </label>
          <select
            name='security-question-2'
            id='security-question-2'
            disabled
            defaultValue='0'
          >
            <option value=''>Select your option</option>
          </select>
          <label htmlFor='' name='security-question-3'>
            Security question 3
          </label>
          <select
            name='security-question-3'
            id='security-question-3'
            disabled
            defaultValue='0'
          >
            <option value='0'>Select your option</option>
          </select>
        </form>
      </main>
    </div>
  );
}
