import { useState } from 'react'
import './App.css'

function NavBar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">💧 Water Portability</div>
      <ul className="navbar-links">
        <li><a href="#" onClick={e => { e.preventDefault(); setCurrentPage('home'); }}>Home</a></li>
        <li><a href="#checker" onClick={e => { e.preventDefault(); setCurrentPage('checker'); }}>Checker</a></li>
        <li><a href="#about" onClick={e => { e.preventDefault(); setCurrentPage('about'); }}>About</a></li>
      </ul>
    </nav>
  );
}

function Home({ onCheck }) {
  return (
    <div className="home-page">
      <h1>Welcome to the Water Portability Checker</h1>
      <p>
        Unsure if your water is safe to drink? Our tool uses advanced machine learning to instantly analyze your water's chemical properties and tell you if it's portable (safe for drinking).
      </p>
      <div style={{margin: '1.2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto'}}>
        <div style={{display: 'flex', alignItems: 'center'}}><span style={{minWidth: '2.2em', display: 'inline-block'}}>✔️</span>Fast, accurate water safety checks</div>
        <div style={{display: 'flex', alignItems: 'center'}}><span style={{minWidth: '2.2em', display: 'inline-block'}}>✔️</span>Simple, user-friendly interface</div>
        <div style={{display: 'flex', alignItems: 'center'}}><span style={{minWidth: '2.2em', display: 'inline-block'}}>✔️</span>Powered by real-world data and AI</div>
        <div style={{display: 'flex', alignItems: 'center'}}><span style={{minWidth: '2.2em', display: 'inline-block'}}>✔️</span>No sign-up required</div>
      </div>
      <p style={{marginTop: '1.5rem', fontWeight: 500}}>
        Just click below, enter your water's details, and get your result instantly!
      </p>
      <button className="check-btn" onClick={onCheck} style={{marginTop: '2.2rem', fontSize: '1.15rem', padding: '0.8rem 2.2rem', borderRadius: '8px', background: 'linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)', color: '#fff', fontWeight: 'bold', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(33, 147, 176, 0.10)'}}>Let's Check</button>
    </div>
  );
}

function About() {
  return (
    <div className="about-page">
      <h1>About This Project</h1>
      <p>
        The Water Portability Checker is a web application designed to help users quickly assess the safety of water for drinking purposes. By inputting various chemical parameters, users can instantly find out if their water sample is considered portable (safe for drinking).
      </p>
      <div style={{margin: '1.2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto'}}>
        <div style={{display: 'flex', alignItems: 'center'}}><span style={{minWidth: '2.2em', display: 'inline-block'}}></span>Input water quality parameters such as pH, Hardness, Solids, and more.</div>
        <div style={{display: 'flex', alignItems: 'center'}}><span style={{minWidth: '2.2em', display: 'inline-block'}}></span>The app sends your data to a backend machine learning model trained on real-world water quality datasets.</div>
        <div style={{display: 'flex', alignItems: 'center'}}><span style={{minWidth: '2.2em', display: 'inline-block'}}></span>You receive an instant prediction on water portability.</div>
      </div>
      <h2 style={{marginTop: '2rem', color: '#2193b0'}}>Technologies Used</h2>
      <div style={{margin: '1.2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto'}}>
        <div style={{display: 'flex', alignItems: 'center'}}><span style={{minWidth: '2.2em', display: 'inline-block'}}>💻</span>React (frontend)</div>
        <div style={{display: 'flex', alignItems: 'center'}}><span style={{minWidth: '2.2em', display: 'inline-block'}}>⚡</span>Vite (build tool)</div>
        <div style={{display: 'flex', alignItems: 'center'}}><span style={{minWidth: '2.2em', display: 'inline-block'}}>🎨</span>Custom CSS for UI</div>
        <div style={{display: 'flex', alignItems: 'center'}}><span style={{minWidth: '2.2em', display: 'inline-block'}}>🐍</span>Python FastAPI backend </div>
      </div>
      <p style={{marginTop: '2rem', fontWeight: 500, textAlign: 'center'}}>
        <strong>Created by Harshavardhan Kurtkoti.</strong>
      </p>
      <p style={{marginTop: '1.5rem', textAlign: 'center'}}>
        Click for Portfolio: <a href="https://portflio-website-azure.vercel.app/" target="_blank" rel="noopener noreferrer">Link</a>
      </p>
    </div>
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
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
    }
  };

  return (
    <div className="container app-background">
      <NavBar setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && <Home onCheck={() => setCurrentPage('checker')} />}
      {currentPage === 'about' && <About />}
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
              <div className="loader"></div>
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
    </div>
  );
}

export default App
