'use client'

import React, { useState } from 'react';
import './contactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <header className='contact-form-header'>
        <h1 className='main-header'>LET'S CONNECT</h1>
      </header>
      <div className='contact-form-info'>
        <div className='contact-form-info-element'>
          <img width="50" height="50" src="https://img.icons8.com/ios/50/address--v1.png" alt="address--v1"/>
          <p>
            Address
          </p>
          <p style={{ fontSize: '16px' }}>Air University, Islamabad, Pakistan</p>
        </div>
        <div className='contact-form-info-element'>
          <img width="50" height="50" src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1"/>
          <p>
            Phone Number
          </p>
          <p>+92 (333) 456-7890</p>
        </div>
        <div className='contact-form-info-element'>
          <img width="50" height="50" src="https://img.icons8.com/ios/50/fax.png" alt="fax"/>
          <p>
            Fax
          </p>
          <p>+92 (333) 456-7890</p>
        </div>
        <div className='contact-form-info-element'>
          <img width="50" height="50" src="https://img.icons8.com/ios/50/new-post--v1.png" alt="new-post--v1"/>
          <p>
            Email
          </p>
          <p>contact@example.com</p>
        </div>
      </div>

      <div className='contact-form-body'>
        <div className='contact-from-input'>
          <h2 className='contact-form-body-head'>GET FREE CAREER EVALUATION TODAY</h2>
          <h6 className='contact-form-body-dialogue'>AVAILABLE 24 HOURS!</h6>
          <form className="colorful-form">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name:</label>
              <input required placeholder="Enter your name" className="form-input" type="text" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email:</label>
              <input required placeholder="Enter your email" className="form-input" name="email" id="email" type="email" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message:</label>
              <textarea required placeholder="Enter your message" className="form-input" name="message" id="message" ></textarea>
            </div>
            <button className="form-button" type="submit">Submit</button>
          </form>
        </div>
        <div className='contact-form-location'>
          <h2 className='contact-form-body-head'>WE ARE HERE</h2>
          <h6 className='contact-form-body-dialogue'>MON-FRI 8:30AM- 5PM / PHONES ARE OPEN 24/7</h6>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.8111050880366!2d73.02207907494038!3d33.71383643552472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe5967d48243%3A0xcb2c90c562c4687e!2sAir%20University!5e0!3m2!1sen!2s!4v1697555385372!5m2!1sen!2s"
            title="Google Map of Air University"
            width="400"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
