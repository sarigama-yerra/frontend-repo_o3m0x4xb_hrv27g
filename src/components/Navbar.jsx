import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 shadow-lg shadow-sky-500/30 grid place-items-center text-white font-bold">
            L
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-cyan-200 transition-colors">Lexy</span>
            <span className="text-[11px] uppercase tracking-widest text-cyan-300/70">by Cloro</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-cyan-100/80 hover:text-white transition-colors">Features</a>
          <a href="#how" className="text-cyan-100/80 hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="text-cyan-100/80 hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="text-cyan-100/80 hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="px-4 py-2 text-cyan-100/90 hover:text-white">Log in</a>
          <a href="#" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold hover:bg-cyan-50 shadow-sm">Get started</a>
        </div>

        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-white/90">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="px-6 py-4 space-y-3">
            <a href="#features" className="block text-cyan-100/90">Features</a>
            <a href="#how" className="block text-cyan-100/90">How it works</a>
            <a href="#pricing" className="block text-cyan-100/90">Pricing</a>
            <a href="#faq" className="block text-cyan-100/90">FAQ</a>
            <div className="pt-3 flex gap-3">
              <a href="#" className="px-4 py-2 text-cyan-100/90">Log in</a>
              <a href="#" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold">Get started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
