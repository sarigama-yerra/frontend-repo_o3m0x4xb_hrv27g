export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-10">
          <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(34,211,238,0.15),transparent)]" />
          <div className="relative z-10 grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Bring your brand to a modern feel</h3>
              <p className="mt-3 text-cyan-100/80">Keep the familiar colors while upgrading the experience. Sleek, minimal, and unmistakably you.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-900 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/30">
                Start now
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-cyan-400/30 px-5 py-3 font-semibold text-cyan-100 hover:bg-white/5">
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
