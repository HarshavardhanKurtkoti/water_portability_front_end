import { useState } from 'react'
import './App.css'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">💧 Water Portability</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#checker">Checker</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
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
      <NavBar />
      <h1>Water Portability Checker</h1>
      <form onSubmit={handleSubmit} className="water-form">
        {Object.keys(form).map((key) => (
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
        ))}
        {loading ? (
          <div className="loader"></div>
        ) : (
          <button type="submit">Check Portability</button>
        )}
      </form>
      {error && <p className="error">{error}</p>}
      {result && (
        <div className="result">
          <h2>Result</h2>
          <p>
            Water is <strong>{result.prediction}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default App
