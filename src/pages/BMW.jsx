import { motion } from 'framer-motion';
import { ArrowRight, Gauge, Sparkles, ShieldCheck, CarFront } from 'lucide-react';
import { Link } from 'react-router-dom';
import { bmwGallery, bmwVehicles } from '../data/vehicles';

const bmwFeatures = [
  { title: 'Torque', value: '500 Nm', icon: Gauge },
  { title: 'Luxury', value: 'Executive cabin', icon: Sparkles },
  { title: 'Safety', value: 'Driver assist', icon: ShieldCheck },
  { title: 'Drive feel', value: 'Refined balance', icon: CarFront },
];

function BMW() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1800&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-blue-950/60" />
        <div className="section-shell relative z-10 flex min-h-[620px] items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">BMW luxury</p>
            <h1 className="text-shadow text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">Precision in motion.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200">
              A sophisticated combination of premium comfort, intelligent engineering, and dynamic performance built for modern driving standards.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-blue-500">
                Book a consultation <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">About BMW</p>
            <h2 className="text-3xl font-black uppercase tracking-[-0.05em] text-white md:text-5xl">Luxury with purpose.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              BMW brings together elegance and engineering to create vehicles that are as comfortable on the commute as they are thrilling on the open road. Every model is designed to feel thoughtfully crafted and unmistakably premium.
            </p>
          </div>
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Luxury technology</p>
            <ul className="mt-6 space-y-5 text-slate-200">
              <li className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> Driver assistance systems</li>
              <li className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> Premium digital cockpit</li>
              <li className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> Engineered comfort</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Collection</p>
          <h2 className="text-3xl font-bold uppercase tracking-[-0.04em] text-white md:text-5xl">BMW lineup</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {bmwVehicles.map((vehicle, index) => (
            <motion.article
              key={vehicle.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="car-card rounded-[1.75rem]"
            >
              <img src={vehicle.image} alt={vehicle.name} className="h-64 w-full object-cover" />
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">{vehicle.name}</h3>
                  <span className="text-sm font-semibold text-blue-400">{vehicle.price}</span>
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{vehicle.type}</p>
                <p className="text-sm leading-7 text-slate-300">{vehicle.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Luxury & technology</p>
          <h2 className="text-3xl font-bold uppercase tracking-[-0.04em] text-white md:text-5xl">Refined driving technology</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {bmwFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-panel rounded-[1.75rem] p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Icon size={20} />
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{feature.title}</p>
                <h3 className="mt-3 text-2xl font-black text-white">{feature.value}</h3>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Gallery</p>
          <h2 className="text-3xl font-bold uppercase tracking-[-0.04em] text-white md:text-5xl">BMW premium experience</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {bmwGallery.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="gallery-item"
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="rounded-[2rem] border border-blue-500/20 bg-gradient-to-r from-blue-950/40 to-slate-950 p-8 md:p-14">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">Start your BMW journey</p>
            <h2 className="text-3xl font-black uppercase tracking-[-0.05em] text-white md:text-5xl">Drive refined performance.</h2>
            <p className="mt-5 text-base leading-8 text-slate-200">
              Discover the latest BMW performance and luxury models curated for drivers who value elegance, innovation, and exceptional road presence.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-blue-500">
              Contact our team <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BMW;
