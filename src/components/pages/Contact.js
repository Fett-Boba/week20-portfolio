import React, { useState } from 'react';
import './Contact.css';
// import { checkPassword, validateEmail } from '../../utils/helpers.js';
import { validateEmail } from '../../utils/helpers.js';

function Contact() {
     const [email, setEmail] = useState('');
     const [name, setName] = useState('');
     //const [password, setPassword] = useState('');
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
          if (!validateEmail(email) || !name || !message) {
               setErrorMessage('Email, name, or message is invalid');
               return;
          }
          // if (!checkPassword(password)) {
          //      setErrorMessage(
          //           `Choose a more secure password for the account: ${name}`
          //      );
          //      return;
          // }
          alert(`Hello ${name}`);
          setName('');
          setEmail('');
          setMessage('');
     };

     return (
          <div>
               <p>Hello {name}</p>
               <form className="form">
                    <input
                         value={name}
                         name="name"
                         onChange={handleInputChange}
                         type="text"
                         placeholder="name"
                    />
                    <input
                         value={email}
                         name="email"
                         onChange={handleInputChange}
                         type="email"
                         placeholder="email"
                    />
                    <input
                         value={message}
                         name="message"
                         onChange={handleInputChange}
                         type="text"
                         placeholder="message"
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
}
export default Contact;
