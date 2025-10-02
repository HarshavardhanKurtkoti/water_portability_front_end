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
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Harshavardhan Kurtkoti',
          from_email: form.email,
          to_email: 'kurtkoti.harsha@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
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
    <section className="w-full page-wrap">
      <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-6 md:p-8 mt-8 text-left">
        <h1 className="text-slate-900 text-[2rem] mb-2 text-center">Contact</h1>
        <p className="text-slate-500 mb-6 text-center">Have feedback or a question? Send a note and I’ll get back soon.</p>
        {alert.show && (
          <div className={`mb-4 px-4 py-2 rounded-md text-center font-medium ${alert.type === 'success' ? 'bg-[#e0f7fa] text-[#2193b0]' : 'bg-[#fef2f2] text-[#b91c1c]'}`}>
            {alert.text}
          </div>
        )}
        <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="contact-input" placeholder="Harshavardhan Kurtkoti" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email address</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="contact-input" placeholder="kurtkoti.harsha@gmail.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Your message</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} className="contact-input" placeholder="Add your message here..." style={{ resize: 'vertical' }} />
          </div>
          <button type="submit" disabled={loading} className="btn-primary min-w-[180px] py-3 justify-self-start" style={{ cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          <div className="text-slate-500 text-xs">Your email is used only to respond. No marketing or storage.</div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
