import React from 'react';
import { useState } from 'react';
import './Contact.css';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //here is how we are implementing the logic to handle the form submission
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
             //here we are adding a css class name to style this box
            className="contact-input"
            
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
             //here we are adding a css class name to style this box
            className="contact-input"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <input
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            //here we are adding a css class name to style this box
            className="contact-input"
            
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

