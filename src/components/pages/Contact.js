import React , { useState } from 'react';
import '../../styles/Contact.css';

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
    <div className='container contact-me'>
      <p>Hello {name}, Please fill out this form if you are interested in hiring me.</p>
      <form className="form form-me">
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
      <p>You can also find me on these platforms</p>
      <div class="row my-links">
        <h3 id="contactMe">Contact Me</h3>
        <p class='col-4'>
          <a href="mailto: nandodavila94@gmail.com">
            <img 
              src="https://www.pngplay.com/wp-content/uploads/6/Email-Logo-Transparent-Background.png" 
              alt="email" 
              className="contactMe" 
              width="50px"
            />
          </a>
        </p>
        <p class="col-4">
          <a href="https://www.linkedin.com/in/nando-davila-154650217/">
            <img 
              src="data:image/png;base64,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"
              alt="LinkedIn" 
              className="contactMe" 
              width="50px"
            />
          </a>
        </p>
        <p class="col-4">
          <a href="https://github.com/nandodavila">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0Uu0auB-_30X62d-vUYM-jhN4TkqPqgv6A&usqp=CAU"
              alt="GitHub" 
              className="contactMe" 
              width="50px"
            />
          </a>
        </p>
      </div>
    </div>
  );
};