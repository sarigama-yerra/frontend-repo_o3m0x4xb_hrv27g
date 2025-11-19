import { Shield, Zap, CreditCard, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Enterprise-grade security, encryption, and compliance baked into every interaction.'
  },
  {
    icon: Zap,
    title: 'Fast and fluid',
    desc: 'Snappy performance with instant feedback and buttery-smooth interactions.'
  },
  {
    icon: CreditCard,
    title: 'Payments that fit',
    desc: 'Flexible card issuing, invoicing, and checkout that match your brand.'
  },
  {
    icon: BarChart3,
    title: 'Clear insights',
    desc: 'Visual analytics to understand spend, revenue, and growth at a glance.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(34,211,238,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Modern capabilities, minimal effort</h2>
          <p className="mt-3 text-cyan-100/80">Everything you need to run payments and finances with a clean, modern touch.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur hover:bg-slate-900/80 hover:border-cyan-400/30 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-slate-900 grid place-items-center mb-4">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-cyan-100/80 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
