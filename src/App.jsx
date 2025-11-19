import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(65%_60%_at_50%_-10%,rgba(14,165,233,0.25),transparent),radial-gradient(40%_35%_at_80%_10%,rgba(56,189,248,0.18),transparent)]" />

      <Navbar />
      <Hero />
      <Features />
      <CTA />

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-cyan-200/70">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Cloro. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
