import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Contact from './Contact.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

// Removed legacy NavBar (replaced with components/Header)

function Home({ onCheck }) {
  const handleCheck = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onCheck();
  };
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <h1 className="text-[2.4rem] md:text-[2.8rem] mt-10 mb-3 text-slate-900 tracking-tight font-extrabold">
        Welcome to the Water Potability Checker
      </h1>
      <p className="max-w-[720px] mx-auto text-slate-600 text-base md:text-lg">
        Unsure if your water is safe to drink? Our tool uses a machine learning model to instantly analyze your water’s chemical properties and estimate its potability (suitability for drinking).
      </p>

      {/* Feature grid */}
      <div className="mt-8 page-wrap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[{
            title: 'Instant checks',
            desc: 'Get a quick prediction in seconds—no signup needed.',
            icon: '⚡'
          },{
            title: 'AI-assisted',
            desc: 'Model trained on real-world data for informed estimates.',
            icon: '🤖'
          },{
            title: 'Privacy-friendly',
            desc: 'Inputs are sent only for calculation; nothing is stored.',
            icon: '🔒'
          }].map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-20% 0px -20% 0px' }} transition={{ delay: i*0.05, duration: 0.35 }}
              className="rounded-xl bg-white border border-slate-200 shadow-sm p-5 text-left hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-slate-900 mb-1">{f.title}</div>
              <div className="text-slate-600 text-sm leading-relaxed">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="mt-8 font-medium text-slate-700">Just click below, enter your water’s details, and get your potability result instantly!</p>
      <button className="btn-primary mt-6 text-[1.05rem] px-8 py-3" onClick={handleCheck}>Check Potability</button>
    </motion.div>
  );
}

function About({ setCurrentPage }) {
  return (
    <div className="about-page">
      <div style={{ fontSize: '3.2rem', marginBottom: '0.25rem' }}>💧</div>
      <h1 className="text-slate-900">About This Project</h1>
      <p className="text-slate-600 max-w-[720px] mx-auto">
        The Water Potability Checker helps you quickly assess whether a water sample is likely potable (safe to drink). Enter a few commonly measured parameters and get an instant AI-assisted estimate.
      </p>
      <h2 className="text-slate-900 mt-8">How it works</h2>
      <div className="page-wrap">
        <ol className="m-0 text-left max-w-[720px] mx-auto bg-white rounded-xl px-6 py-5 shadow-sm border border-slate-200">
          <li>Input water quality parameters such as pH, hardness and turbidity.</li>
          <li>We send the values to a FastAPI backend running an ML model trained on a public dataset.</li>
          <li>Within seconds you’ll see a potability prediction with a clear result card.</li>
        </ol>
      </div>
      <h2 className="text-slate-900 mt-8">Parameters explained</h2>
      <div className="page-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
          {[{k:'pH',v:'Acidity/alkalinity; neutral is ~7.'},{k:'Hardness',v:'Mineral content; higher values can affect taste and scaling.'},{k:'Solids (TDS)',v:'Total dissolved solids; very high values may indicate impurities.'},{k:'Chloramines',v:'Used for disinfection; excessive levels may affect taste.'},{k:'Sulfate',v:'High amounts can cause a bitter taste.'},{k:'Conductivity',v:'Indicates ion concentration; correlates with TDS.'},{k:'Organic carbon',v:'Presence of organic matter in water.'},{k:'Trihalomethanes',v:'By‑products of chlorination; should be limited.'},{k:'Turbidity',v:'Cloudiness; higher values often reduce potability.'}].map(item => (
            <div key={item.k} className="rounded-lg bg-white border border-slate-200 p-4 shadow-sm">
              <div className="font-semibold text-slate-900">{item.k}</div>
              <div className="text-slate-600 text-sm">{item.v}</div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-slate-900 mt-8">Tech stack</h2>
      <div className="flex flex-wrap justify-center gap-2 my-4">
        <span className="flex items-center bg-white rounded-md px-3 py-1 shadow-sm border border-slate-200 font-medium"><span className="text-lg mr-1">💻</span>React</span>
        <span className="flex items-center bg-white rounded-md px-3 py-1 shadow-sm border border-slate-200 font-medium"><span className="text-lg mr-1">⚡</span>Vite</span>
        <span className="flex items-center bg-white rounded-md px-3 py-1 shadow-sm border border-slate-200 font-medium"><span className="text-lg mr-1">🎨</span>Tailwind</span>
        <span className="flex items-center bg-white rounded-md px-3 py-1 shadow-sm border border-slate-200 font-medium"><span className="text-lg mr-1">🐍</span>FastAPI</span>
      </div>
      <div className="my-6 text-slate-600 font-medium">
        This project is <a href="https://github.com/HarshavardhanKurtkoti/water_portability_front_end" target="_blank" rel="noopener noreferrer" className="underline">open source</a>. Contributions are welcome!
      </div>
      <div className="my-4 text-slate-600">
        Backend API: <a href="https://water-portability-0n5s.onrender.com/docs" target="_blank" rel="noopener noreferrer" className="underline">API Docs</a>
      </div>
      <div className="my-4 text-slate-600 flex gap-3 justify-center flex-wrap">
        <button className="btn-primary px-4 py-2" onClick={() => { if (typeof setCurrentPage === 'function') setCurrentPage('checker'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Try the checker</button>
        <button className="px-4 py-2 rounded-md border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50" onClick={() => { if (typeof setCurrentPage === 'function') setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Contact</button>
      </div>
      <div className="my-6 bg-[#fffbe6] text-[#8a5c00] rounded-md px-4 py-3 text-[0.98rem] shadow-sm border border-[#ffe6a7]">
        <strong>Disclaimer:</strong> Predictions are estimates only and not a substitute for certified laboratory testing. Consult local authorities for critical potability decisions.
      </div>
      <p className="mt-6 font-medium text-center"><strong>Created by Harshavardhan Kurtkoti.</strong></p>
      <p className="mt-4 text-center">
        <button className="btn-primary px-4 py-2" onClick={() => window.open('https://portflio-website-azure.vercel.app/', '_blank', 'noopener,noreferrer')}>View Portfolio</button>
      </p>
    </div>
  );
}

// Removed legacy in-file Footer (replaced with components/Footer)

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
      setError('Failed to check water potability.');
    } finally {
      setLoading(false);
      setShowWaitDialog(false);
      if (loaderTimeout.current) clearTimeout(loaderTimeout.current);
    }
  };

  return (
    <div className="min-h-screen bg-[--bg-grad]">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <AnimatePresence mode="wait">
      {currentPage === 'home' && (
        <motion.div
          key="home"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="w-full page-wrap"
        >
          <Home onCheck={() => setCurrentPage('checker')} />
        </motion.div>
      )}
      {currentPage === 'about' && (
        <motion.div
          key="about"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="w-full page-wrap"
        >
          <About setCurrentPage={setCurrentPage} />
        </motion.div>
      )}
      {currentPage === 'checker' && (
        <motion.div
          key="checker"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="w-full page-wrap"
        >
        <>
          <h1 className="text-[2.2rem] md:text-[2.6rem] mt-12 mb-4 text-slate-900 tracking-tight font-extrabold">Water Potability Checker</h1>
          <p className="text-slate-600 max-w-[720px] mx-auto">Provide water quality parameters below. Values don’t need to be perfect; approximate readings work.</p>

          {/* Card container */}
          <form onSubmit={handleSubmit} className="mt-5 max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-6 md:p-8 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { key:'ph', label:'pH', placeholder:'e.g., 7.2' },
                { key:'Hardness', label:'Hardness (mg/L)', placeholder:'e.g., 170' },
                { key:'Solids', label:'Total Dissolved Solids (ppm)', placeholder:'e.g., 350' },
                { key:'Chloramines', label:'Chloramines (ppm)', placeholder:'e.g., 7.0' },
                { key:'Sulfate', label:'Sulfate (mg/L)', placeholder:'e.g., 330' },
                { key:'Conductivity', label:'Conductivity (µS/cm)', placeholder:'e.g., 420' },
                { key:'Organic_carbon', label:'Organic carbon (mg/L)', placeholder:'e.g., 10.5' },
                { key:'Trihalomethanes', label:'Trihalomethanes (µg/L)', placeholder:'e.g., 70' },
                { key:'Turbidity', label:'Turbidity (NTU)', placeholder:'e.g., 3.5' },
              ].map((f) => (
                <div key={f.key}>
                  <label htmlFor={f.key} className="block text-sm font-medium text-slate-700 mb-1">{f.label}</label>
                  <input
                    type="number"
                    step="any"
                    id={f.key}
                    name={f.key}
                    value={form[f.key]}
                    onChange={handleChange}
                    required
                    placeholder={f.placeholder}
                    className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
              ))}
            </div>

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
              <button type="submit" className="btn-primary mt-4 w-full sm:w-auto px-10 py-3">Check Potability</button>
            )}
          </form>
          <div className="text-slate-500 text-sm mt-3">We do not permanently store your inputs; they’re used only for calculation.</div>
          {error && <p className="error">{error}</p>}
          {result && (
            <motion.div
              className={`result ${result.prediction && result.prediction.toLowerCase() === 'potable' ? 'result-portable' : 'result-not-portable'}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <div className="result-icon">
                {result.prediction && result.prediction.toLowerCase() === 'potable' ? '🟢💧' : '⚠️'}
              </div>
              <h2>Potability Result</h2>
              <div className="result-text" style={{ color: result.prediction && result.prediction.toLowerCase() === 'potable' ? '#2e7d32' : '#e57373' }}>
                Water Potability: <strong>{result.prediction}</strong>
              </div>
            </motion.div>
          )}
        </>
        </motion.div>
      )}
      {currentPage === 'contact' && (
        <motion.div
          key="contact"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="w-full"
        >
          <Contact />
        </motion.div>
      )}
      </AnimatePresence>
  <Footer />
    </div>
  );
}

export default App
