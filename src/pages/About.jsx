import { motion } from 'framer-motion';
import { ArrowRight, Check, Compass, HeartHandshake, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { values } from '../data/vehicles';

const missionVision = [
  { title: 'Our Mission', text: 'To bring exceptional vehicles and a seamless buying experience to drivers seeking excitement, elegance, and long-term value.', icon: Rocket },
  { title: 'Our Vision', text: 'To become the trusted destination for performance, premium design, and customer confidence within the Dodge and BMW community.', icon: Compass },
];

function About() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1800&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-blue-950/50" />
        <div className="section-shell relative z-10 flex min-h-[620px] items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">Our story</p>
            <h1 className="text-shadow text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">More than cars. It’s a passion.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200">
              We believe performance, design, and customer experience should come together seamlessly. That philosophy guides everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80" alt="Performance coupe" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Our story</p>
            <h2 className="text-3xl font-black uppercase tracking-[-0.05em] text-white md:text-5xl">Driven by performance culture.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              From modern performance sedans to luxury grand tourers, our business celebrates vehicles that excite drivers and elevate everyday experiences. We focus on premium brands that pair exhilarating dynamics with unmistakable presence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {missionVision.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="glass-panel rounded-[1.8rem] p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/15 to-blue-500/15 text-white">
                  <Icon size={22} />
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Vehicle philosophy</p>
          <h2 className="text-3xl font-bold uppercase tracking-[-0.04em] text-white md:text-5xl">Why Dodge and BMW</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-8">
            <p className="text-base leading-8 text-slate-300">
              Dodge represents pure emotional performance, while BMW stands for refined engineering and elegance. Together, these brands represent two sides of premium driving: the thrill of power and the confidence of precision.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              'Every model is meant to be experienced, not just seen.',
              'We prioritize both innovation and emotional connection in every vehicle we present.',
              'Our selection reflects performance heritage, premium comfort, and modern technology.',
              'We design the journey around trust, clarity, and a customer-first approach.',
            ].map((line) => (
              <div key={line} className="glass-panel rounded-[1.5rem] p-5 text-base leading-7 text-slate-200">
                {line}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Our values</p>
          <h2 className="text-3xl font-bold uppercase tracking-[-0.04em] text-white md:text-5xl">The standards we live by</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {values.map((value) => (
            <div key={value} className="glass-panel flex items-center gap-3 rounded-[1.5rem] p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-red-500/20 to-blue-500/20 text-white">
                <Check size={16} />
              </span>
              <span className="text-sm font-medium uppercase tracking-[0.16em] text-slate-200">{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-red-950/30 via-slate-950 to-blue-950/30 p-8 md:p-14">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">Let’s get started</p>
            <h2 className="text-3xl font-black uppercase tracking-[-0.05em] text-white md:text-5xl">Explore the vehicles that match your ambition.</h2>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-blue-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:scale-[1.02]">
              Find your drive <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
