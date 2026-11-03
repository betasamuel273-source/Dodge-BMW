import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Gauge, Headphones, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { brandCards, featuredVehicles, whyChooseUs } from '../data/vehicles';

const performanceStats = [
  { value: '707', label: 'Horsepower', suffix: 'HP' },
  { value: '3.5', label: '0-60', suffix: 's' },
  { value: '196', label: 'Top Speed', suffix: 'MPH' },
];

const iconMap = {
  ShieldCheck,
  Gauge,
  Headphones,
  Zap,
  BadgeCheck,
};

function Home() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="section-shell relative z-10 flex min-h-[750px] items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-200 backdrop-blur">
              <Sparkles size={14} className="text-red-400" />
              Performance. Luxury. Precision.
            </div>
            <h1 className="text-shadow max-w-2xl text-5xl font-black uppercase leading-[0.96] tracking-[-0.05em] md:text-7xl">
              Drive the power. Experience the luxury.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
              Discover premium Dodge and BMW collections engineered for enthusiasts who want power without compromise and luxury that makes every drive unforgettable.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/dodge"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-lg shadow-red-500/30 transition hover:scale-[1.02]"
              >
                Explore Dodge <ArrowRight size={16} />
              </Link>
              <Link
                to="/bmw"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:border-blue-400 hover:bg-blue-500/10"
              >
                Discover BMW <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Our brands</p>
          <h2 className="text-3xl font-bold uppercase tracking-[-0.04em] text-white md:text-5xl">Performance-driven legends</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {brandCards.map((card, index) => (
            <motion.div
              key={card.brand}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10"
            >
              <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${card.image}')` }} />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
              <div className={`absolute inset-y-0 left-0 w-1 ${card.accent === 'red' ? 'bg-red-500' : 'bg-blue-500'}`} />
              <div className="relative flex min-h-[420px] flex-col justify-end p-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">{card.label}</p>
                <h3 className="mb-3 text-4xl font-black uppercase tracking-[-0.06em] text-white">{card.brand}</h3>
                <p className="max-w-md text-sm leading-7 text-slate-200">{card.description}</p>
                <Link
                  to={card.brand === 'Dodge' ? '/dodge' : '/bmw'}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/10"
                >
                  Explore {card.brand} <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Featured vehicles</p>
            <h2 className="text-3xl font-bold uppercase tracking-[-0.04em] text-white md:text-5xl">Our signature collection</h2>
          </div>
          <Link to="/contact" className="hidden text-sm font-medium uppercase tracking-[0.22em] text-slate-300 md:inline-flex">
            Enquire now
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredVehicles.map((vehicle, index) => (
            <motion.article
              key={vehicle.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="car-card group rounded-[1.75rem]"
            >
              <div className="relative overflow-hidden">
                <img src={vehicle.image} alt={vehicle.name} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/5 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-100">
                  {vehicle.brand}
                </div>
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{vehicle.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{vehicle.year} • {vehicle.category}</p>
                  </div>
                  <span className="text-base font-semibold text-red-400">{vehicle.price}</span>
                </div>
                <p className="text-sm leading-7 text-slate-300">{vehicle.description}</p>
                <Link
                  to={vehicle.brand === 'Dodge' ? '/dodge' : '/bmw'}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:text-red-400"
                >
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                alt="Dodge performance car"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Performance & luxury</p>
              <h2 className="text-3xl font-black uppercase tracking-[-0.05em] text-white md:text-5xl">American muscle meets precision engineering.</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Dodge delivers bold road presence and explosive performance, while BMW combines luxury craftsmanship with refined power. Together, they define both emotion and sophistication.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {performanceStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-3xl font-black text-white">{stat.value}</div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate-300">{stat.label}</div>
                    <div className="mt-1 text-xs text-red-400">{stat.suffix}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Why choose us</p>
          <h2 className="text-3xl font-bold uppercase tracking-[-0.04em] text-white md:text-5xl">A customer-first approach</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-panel rounded-[1.5rem] p-5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-blue-500/20 text-red-400">
                  <Icon size={22} />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-300">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(215,25,32,0.35),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(23,105,255,0.32),transparent_30%),#071426] p-8 md:p-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">Your next drive starts here</p>
            <h2 className="text-3xl font-black uppercase tracking-[-0.05em] text-white md:text-5xl">The perfect vehicle awaits.</h2>
            <p className="mt-5 text-base leading-8 text-slate-200">
              Whether you want the raw excitement of a Dodge or the refined sophistication of a BMW, our showroom is built around finding the right fit for your driving style and aspirations.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-blue-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-xl shadow-blue-500/20 transition hover:scale-[1.02]"
            >
              Explore our collection <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
