import React from 'react';
import { Form, redirect } from 'react-router-dom';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.description}>
          Have a question, feedback, or want to work together? Send me a message
          below.
        </p>

        <Form method="post" action="/contact" className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Enter Your Name
              <input
                type="text"
                name="name"
                placeholder="Enter your name..."
                required
                className={styles.input}
              />
            </label>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              Enter Your Email
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                required
                className={styles.input}
              />
            </label>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              Leave a message
              <textarea 
                name="message" 
                placeholder="Type your message here..."
                required 
                className={styles.textarea}
              />
            </label>
          </div>

          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;

export const contactAction = async ({request}) => {
  const data = await request.formData();

  const userDetails = {
    name: data.get('name'),
    email: data.get('email'),
    message: data.get('message')
  };

  console.log(userDetails);

  return redirect('/contact');
};