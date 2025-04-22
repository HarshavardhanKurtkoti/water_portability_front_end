import { useState, useRef } from 'react'
import './App.css'
import Contact from './Contact.jsx'

function NavBar({ setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = (page) => (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
    setMenuOpen(false); // close menu on link click
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">💧 Water Portability</div>
      <button
        className="navbar-hamburger"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className="bar" style={{background:'#111', display:'block', width:'22px', height:'3.5px', margin:'4px 0', borderRadius:'2px'}}></span>
        <span className="bar" style={{background:'#111', display:'block', width:'22px', height:'3.5px', margin:'4px 0', borderRadius:'2px'}}></span>
        <span className="bar" style={{background:'#111', display:'block', width:'22px', height:'3.5px', margin:'4px 0', borderRadius:'2px'}}></span>
      </button>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#" onClick={handleNavClick('home')}>Home</a></li>
        <li><a href="#checker" onClick={handleNavClick('checker')}>Checker</a></li>
        <li><a href="#about" onClick={handleNavClick('about')}>About</a></li>
        <li><a href="#contact" onClick={handleNavClick('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}

function Home({ onCheck }) {
  const handleCheck = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onCheck();
  };
  return (
    <div className="home-page">
      <h1>Welcome to the Water Portability Checker</h1>
      <p>
        Unsure if your water is safe to drink? Our tool uses advanced machine learning to instantly analyze your water's chemical properties and tell you if it's portable (safe for drinking).
      </p>
      <div style={{margin: '1.2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto'}}>
        <div style={{
          background: '#e6fbff',
          borderRadius: '18px',
          padding: '1.2rem 1.5rem',
          boxShadow: '0 2px 8px #b2ebf233',
          width: '100%',
          maxWidth: 480,
          margin: '0 auto',
          textAlign: 'left',
          boxSizing: 'border-box',
        }}>
          <ol style={{margin: 0, paddingLeft: '1.2em', color: '#222', fontSize: '1.08rem', fontWeight: 500, wordBreak: 'break-word'}}>
            <li>Fast, accurate water safety checks</li>
            <li>Simple, user-friendly interface</li>
            <li>Powered by real-world data and AI</li>
          </ol>
        </div>
      </div>
      <p style={{marginTop: '1.5rem', fontWeight: 500}}>
        Just click below, enter your water's details, and get your result instantly!
      </p>
      <button className="check-btn" onClick={handleCheck} style={{marginTop: '2.2rem', fontSize: '1.15rem', padding: '0.8rem 2.2rem', borderRadius: '8px', background: 'linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)', color: '#fff', fontWeight: 'bold', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(33, 147, 176, 0.10)'}}>Let's Check</button>
    </div>
  );
}

function About({ setCurrentPage }) {
  return (
    <div className="about-page">
      {/* Visual/Icon at the top */}
      <div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>💧</div>
      <h1>About This Project</h1>
      <p>
        The Water Portability Checker is a web application designed to help users quickly assess the safety of water for drinking purposes. By inputting various chemical parameters, users can instantly find out if their water sample is considered portable (safe for drinking).
      </p>
      {/* How it works section */}
      <h2 style={{ marginTop: '2rem', color: '#2193b0' }}>How It Works</h2>
      <ol style={{ textAlign: 'left', maxWidth: 420, margin: '1.2rem auto', background: '#e3f6fd', borderRadius: 12, padding: '1rem 1.5rem', boxShadow: '0 2px 8px #b2ebf233' }}>
        <li>Enter water quality parameters (pH, Hardness, Solids, etc.).</li>
        <li>Your data is securely sent to a backend machine learning model trained on real-world datasets.</li>
        <li>You receive an instant prediction on water portability.</li>
      </ol>
      {/* Technologies Used section with badges/icons */}
      <h2 style={{ marginTop: '2rem', color: '#2193b0' }}>Technologies Used</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.7rem', margin: '1.2rem 0' }}>
        <span style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 8, padding: '0.4rem 0.9rem', boxShadow: '0 1px 4px #b2ebf255', fontWeight: 500 }}><span style={{ fontSize: '1.3em', marginRight: 6 }}>💻</span>React</span>
        <span style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 8, padding: '0.4rem 0.9rem', boxShadow: '0 1px 4px #b2ebf255', fontWeight: 500 }}><span style={{ fontSize: '1.3em', marginRight: 6 }}>⚡</span>Vite</span>
        <span style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 8, padding: '0.4rem 0.9rem', boxShadow: '0 1px 4px #b2ebf255', fontWeight: 500 }}><span style={{ fontSize: '1.3em', marginRight: 6 }}>🎨</span>Custom CSS</span>
        <span style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 8, padding: '0.4rem 0.9rem', boxShadow: '0 1px 4px #b2ebf255', fontWeight: 500 }}><span style={{ fontSize: '1.3em', marginRight: 6 }}>🐍</span>Python FastAPI (backend)</span>
      </div>
      {/* Open source/contribution mention */}
      <div style={{ margin: '1.5rem 0', fontSize: '1.05rem', color: '#2193b0', fontWeight: 500 }}>
        This project is <a href="https://github.com/HarshavardhanKurtkoti/water_portability_front_end" target="_blank" rel="noopener noreferrer" style={{ color: '#2193b0', textDecoration: 'underline' }}>open source</a>. Contributions are welcome!
      </div>
      {/* Backend API link */}
      <div style={{ margin: '1.2rem 0', fontSize: '1.05rem' }}>
        Backend API: <a href="https://water-portability-0n5s.onrender.com/docs" target="_blank" rel="noopener noreferrer">API Docs</a>
      </div>
      {/* Contact/Feedback link with buttons */}
      <div style={{ margin: '1.2rem 0', fontSize: '1.05rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          style={{ background: 'linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: 6, padding: '0.6rem 1.4rem', fontSize: '1rem', cursor: 'pointer' }}
          onClick={() => { if (typeof setCurrentPage === 'function') setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          Contact Form
        </button>
        <button
          style={{ background: '#fff', color: '#2193b0', fontWeight: 'bold', border: '1.5px solid #2193b0', borderRadius: 6, padding: '0.6rem 1.4rem', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5em' }}
          onClick={() => {
            navigator.clipboard.writeText('harshavardhankurtkoti@gmail.com');
            alert('Email copied to clipboard!');
          }}
        >
          <span>📋</span> harshavardhankurtkoti@gmail.com
        </button>
      </div>
      {/* Disclaimer */}
      <div style={{ margin: '1.5rem 0', background: '#fffbe6', color: '#b26a00', borderRadius: 8, padding: '0.8rem 1.2rem', fontSize: '0.98rem', boxShadow: '0 1px 4px #b2ebf233' }}>
        <strong>Disclaimer:</strong> This tool provides predictions based on a machine learning model and public datasets. It is not a substitute for certified laboratory testing. Always consult local authorities for critical water safety decisions.
      </div>
      <p style={{ marginTop: '2rem', fontWeight: 500, textAlign: 'center' }}>
        <strong>Created by Harshavardhan Kurtkoti.</strong>
      </p>
      <p style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <button
          style={{ background: 'linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: 6, padding: '0.6rem 1.4rem', fontSize: '1rem', cursor: 'pointer' }}
          onClick={() => window.open('https://portflio-website-azure.vercel.app/', '_blank', 'noopener,noreferrer')}
        >
          Click for Portfolio
        </button>
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>💧 Water Portability Checker &copy; 2025 Harshavardhan. All rights reserved.</span>
        <span className="footer-divider">|</span>
        <a href="https://portflio-website-azure.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
      </div>
    </footer>
  );
}

function App() {
  const [form, setForm] = useState({
    ph: '',
    Hardness: '',
    Solids: '',
    Chloramines: '',
    Sulfate: '',
    Conductivity: '',
    Organic_carbon: '',
    Trihalomethanes: '',
    Turbidity: ''
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [showWaitDialog, setShowWaitDialog] = useState(false);
  const loaderTimeout = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    setShowWaitDialog(false);
    if (loaderTimeout.current) clearTimeout(loaderTimeout.current);
    loaderTimeout.current = setTimeout(() => {
      setShowWaitDialog(true);
    }, 5000);
    try {
      const response = await fetch('https://water-portability-0n5s.onrender.com/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ph: parseFloat(form.ph),
          Hardness: parseFloat(form.Hardness),
          Solids: parseFloat(form.Solids),
          Chloramines: parseFloat(form.Chloramines),
          Sulfate: parseFloat(form.Sulfate),
          Conductivity: parseFloat(form.Conductivity),
          Organic_carbon: parseFloat(form.Organic_carbon),
          Trihalomethanes: parseFloat(form.Trihalomethanes),
          Turbidity: parseFloat(form.Turbidity)
        })
      });
      if (!response.ok) throw new Error('API error');
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Failed to check water portability.');
    } finally {
      setLoading(false);
      setShowWaitDialog(false);
      if (loaderTimeout.current) clearTimeout(loaderTimeout.current);
    }
  };

  return (
    <div className="container app-background">
      <NavBar setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && <Home onCheck={() => setCurrentPage('checker')} />}
      {currentPage === 'about' && <About setCurrentPage={setCurrentPage} />}
      {currentPage === 'checker' && (
        <>
          <h1>Water Portability Checker</h1>
          <form onSubmit={handleSubmit} className="water-form">
            {Array.from({ length: Math.ceil(Object.keys(form).length / 2) }).map((_, rowIdx) => (
              <div className="form-row" key={rowIdx}>
                {[0, 1].map((colIdx) => {
                  const idx = rowIdx * 2 + colIdx;
                  const key = Object.keys(form)[idx];
                  if (!key) return null;
                  return (
                    <div key={key} className="form-group">
                      <label htmlFor={key}>{key.replace('_', ' ')}:</label>
                      <input
                        type="number"
                        step="any"
                        id={key}
                        name={key}
                        value={form[key]}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  );
                })}
              </div>
            ))}
            {loading ? (
              <>
                <div className="loader"></div>
                {showWaitDialog && (
                  <dialog open style={{padding:'1.5rem 2.5rem', borderRadius:'16px', border:'none', fontSize:'1.1rem', color:'#1a2a33', background:'#fff', boxShadow:'0 2px 16px #2193b033', zIndex: 2000}}>
                    <strong>Please wait</strong><br/>
                    The backend hosted on Render is starting.<br/>
                    <span style={{fontSize:'0.98rem', color:'#888'}}>Delay due to free tier</span>
                  </dialog>
                )}
              </>
            ) : (
              <button type="submit">Check Portability</button>
            )}
          </form>
          {error && <p className="error">{error}</p>}
          {result && (
            <div className={`result ${result.prediction && result.prediction.toLowerCase() === 'potable' ? 'result-portable' : 'result-not-portable'}`}>
              <div className="result-icon">
                {result.prediction && result.prediction.toLowerCase() === 'potable' ? '🟢💧' : '⚠️'}
              </div>
              <h2>Result</h2>
              <div className="result-text" style={{ color: result.prediction && result.prediction.toLowerCase() === 'potable' ? '#2e7d32' : '#e57373' }}>
                Water is <strong>{result.prediction}</strong>
              </div>
            </div>
          )}
        </>
      )}
      {currentPage === 'contact' && <Contact />}
      <Footer />
    </div>
  );
}

export default App
