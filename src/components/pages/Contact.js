import React, { useState } from 'react';
import { } from './Contact.css';
import { validateEmail } from '../../utils/helpers.js';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function Contact() {
     const [formState, setFormState] = useState({ name: '', email: '', message: '' });
     const [userMessage, setUserMessage] = useState('');
     const { name, email, message } = formState;

     const handleInputChange = (e) => {
          const { target } = e;
          const inputType = target.name;
          const inputValue = target.value;
          if (inputType === 'email') {
               if (!validateEmail(inputValue)) {
                    setUserMessage('Please enter a valid email address.');
               } else {
                    setUserMessage('');
               }
          } else {
               if (!inputValue.length) {
                    setUserMessage(`${inputType} is required`);
               } else {
                    setUserMessage('');
               }
          }
          if (!userMessage) {
               setFormState({ ...formState, [inputType]: inputValue });
          }
     }

     const handleFormSubmit = (e) => {
          e.preventDefault();
          setUserMessage(`Thank you for your message. We will be in contact soon.`);
     };

     return (
          <Container className="d-flex justify-content-center">
               <Card className="mb-3 bg-dark rounded-corners cardwidth">
                    <div className="formalign">
                         <div className="text-warning contactstyle">Contact Me!</div>
                         {
                              userMessage && (
                                   <span className="error-text text-warning">{userMessage}</span>
                              )
                         }
                         <form className="form">
                              <input
                                   name="Name"
                                   defaultValue={name}
                                   type="text"
                                   onBlur={handleInputChange}
                                   placeholder="Name"
                              />
                              <input
                                   name="email"
                                   defaultValue={email}
                                   type="email"
                                   onBlur={handleInputChange}
                                   placeholder="Email"
                              />
                              <textarea
                                   name="Message"
                                   defaultValue={message}
                                   type="text"
                                   onBlur={handleInputChange}
                                   rows="4"
                                   placeholder="Message"
                              />
                              <p />
                              <button className="btn btn-warning"
                                   type="button"
                                   onClick={handleFormSubmit}>Submit
                              </button>

                         </form>
                    </div>
               </Card>
          </Container>
     );
}
export default Contact;
