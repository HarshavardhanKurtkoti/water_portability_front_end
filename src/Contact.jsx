import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, text: '', type: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ show: false, text: '', type: '' });
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Harshavardhan Kurtkoti',
          from_email: form.email,
          to_email: 'kurtkoti.harsha@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          setAlert({ show: true, text: 'Thank you for your message 😃', type: 'success' });
          setTimeout(() => {
            setAlert({ show: false, text: '', type: '' });
            setForm({ name: '', email: '', message: '' });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          setAlert({ show: true, text: "I didn't receive your message 😢", type: 'danger' });
        },
      );
  };

  return (
    <section style={{ width: '100%' }}>
      <div className="water-form" style={{ margin: '2.5rem auto 0 auto', maxWidth: 480, color: '#1a2a33' }}>
        <h1 style={{ color: '#2193b0', marginBottom: '1.2rem', fontSize: '2em', textAlign: 'center' }}>Contact Me</h1>
        <p style={{ color: '#808080', marginBottom: 24, textAlign: 'center' }}>I would love to hear from you! Please fill out the form below to reach out.</p>
        {alert.show && (
          <div style={{ margin: '1rem auto', padding: '0.8rem 1.2rem', borderRadius: 8, background: alert.type === 'success' ? '#e0f7fa' : '#fff6f6', color: alert.type === 'success' ? '#2193b0' : '#e57373', fontWeight: 500, maxWidth: 400, textAlign: 'center' }}>
            {alert.text}
          </div>
        )}
        <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', width: '100%' }}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="contact-input"
              placeholder="ie: Harshavardhan Kurtkoti"
              style={{ fontSize: '1rem' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="contact-input"
              placeholder="ie: kurtkoti.harsha@gmail.com"
              style={{ fontSize: '1rem' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your message:</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="contact-input"
              placeholder="Add your message here..."
              style={{ fontSize: '1rem', resize: 'vertical' }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{ background: 'linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: 6, padding: '0.7rem 0', fontSize: '1.1rem', cursor: loading ? 'not-allowed' : 'pointer', minWidth: 180, marginTop: 8 }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
