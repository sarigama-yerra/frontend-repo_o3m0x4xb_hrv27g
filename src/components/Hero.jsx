import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/80 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/50 px-3 py-1 text-xs font-semibold text-cyan-200/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Modern fintech experience
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Sleek, simple money tools that feel effortless
          </h1>
          <p className="mt-5 text-cyan-100/90 text-lg leading-relaxed">
            Manage payments, track spending, and grow your business with a clean interface that keeps your brand front and center.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-900 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/30">
              Get started free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-cyan-400/30 px-5 py-3 font-semibold text-cyan-100 hover:bg-white/5">
              See features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
