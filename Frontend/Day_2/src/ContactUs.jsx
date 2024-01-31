import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div id="contact-us" className="container">
      <h2>Contact Us</h2>
      <p>
        If you have any questions or inquiries, feel free to reach out to us. We are here
        to assist you!
      </p>
      <div>
        <strong>Email:</strong> info@university.edu
      </div>
      <div>
        <strong>Phone:</strong> +1 (555) 123-4567
      </div>

      <h3>Send us a Message</h3>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
