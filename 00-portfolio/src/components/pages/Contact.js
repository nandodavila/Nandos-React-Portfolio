import React , { useState } from 'react';

import { checkMessage, validateEmail } from '../../utils/helper';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;

    }
    if (!checkMessage(message)) {
      setErrorMessage(
        `Message can not be blank`
      );
      return;
    }
    alert(`Hello ${name}, you message has been sent!(Not really tho)`);

    setName('');
    setMessage('');
    setEmail('');
  };


  return (
    <div className='container'>
      <p>Hello {name}</p>
      <form className="form">
      <input
        className='form-control'
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          className='form-control'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          className='form-control'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
          rows="3"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};