import emailjs from '@emailjs/browser';
import { useState } from 'react';
import '../../styles/contact.css';

export const contactRef = { current: null };

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    message: '',
  });
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Service ID depuis .env
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID depuis .env
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message envoyé avec succès ✅');
          setFormData({ name: '', lastname: '', message: '' });
        },
        error => {
          console.error('Erreur', error);
          alert('Une erreur est survenue ❌');
        }
      );
  };
  return (
    <>
      <section className="contact-me">
        <h2 ref={contactRef}>Contact Me</h2>
        <div className="container-contact-me">
          <form className="formContact" onSubmit={handleSubmit}>
            <label htmlFor="name">First Name : </label>
            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} />
            <label htmlFor="lastname"> Last Name : </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              required
              value={formData.lastname}
              onChange={handleChange}
            />
            <label htmlFor="message"> Message : </label>
            <textarea name="message" id="message" required value={formData.message} onChange={handleChange} />
            <button type="submit" className="sendbtn">
              {' '}
              Send{' '}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactMe;
