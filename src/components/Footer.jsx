import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 mt-16 bg-white/70 backdrop-blur py-6">
      <div className="max-w-7xl mx-auto px-4 text-sm text-slate-600 flex items-center justify-center gap-3 flex-wrap">
        <span>© {new Date().getFullYear()} Water Potability</span>
        <span className="opacity-50">•</span>
        <a className="underline hover:text-slate-900" href="https://portflio-website-azure.vercel.app/" target="_blank" rel="noreferrer noopener">Portfolio</a>
      </div>
    </footer>
  )
}
