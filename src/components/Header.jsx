import React from 'react'

export default function Header({ currentPage, setCurrentPage }) {
  const NavLink = ({ id, children }) => (
    <button
      onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage?.(id); }}
      className={`relative text-sm font-medium px-2 py-1 transition-colors ${currentPage===id ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
    >
      <span className={`after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-slate-900 after:transition-all after:duration-200 after:ease-out ${currentPage===id ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`} />
      {children}
    </button>
  )

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
  <div className="page-wrap h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-900 font-bold tracking-tight">
          <span className="text-xl">💧</span>
          <span className="text-lg">Water Potability</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink id="home">Home</NavLink>
          <NavLink id="checker">Checker</NavLink>
          <NavLink id="about">About</NavLink>
          <NavLink id="contact">Contact</NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => setCurrentPage?.('checker')} className="px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm btn-primary">Get started</button>
        </div>
      </div>
    </header>
  )
}
