import { useState } from 'react';
import { ArrowRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  brand: 'Dodge',
  model: '',
  message: '',
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.fullName.trim()) nextErrors.fullName = 'Full name is required.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = 'A valid email is required.';
    if (!form.phone.trim()) nextErrors.phone = 'Phone number is required.';
    if (!form.model.trim()) nextErrors.model = 'Please enter the model you are interested in.';

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="pb-20">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-red-950/50" />
        <div className="section-shell relative z-10 flex min-h-[620px] items-center">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">Contact us</p>
            <h1 className="text-shadow text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">Let’s find your perfect drive.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200">
              Share your preferred vehicle and our team will get back to you with tailored recommendations, availability, and next-step guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="glass-panel rounded-[2rem] p-7">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Contact info</p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-400"><MapPin size={16} /></div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Address</p>
                    <p className="mt-2 text-base text-slate-200">2150 Auto Avenue, Miami, FL</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400"><Phone size={16} /></div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Phone</p>
                    <p className="mt-2 text-base text-slate-200">+1 (555) 402-1189</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-400"><Mail size={16} /></div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Email</p>
                    <p className="mt-2 text-base text-slate-200">sales@dodgebmw.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400"><Clock3 size={16} /></div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Hours</p>
                    <p className="mt-2 text-base text-slate-200">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[2rem] p-5">
              <iframe
                title="Dealership map"
                src="https://www.google.com/maps?q=Miami%20FL&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="h-[260px] w-full rounded-[1.25rem] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel rounded-[2rem] p-7 md:p-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Vehicle inquiry</p>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-300">Full name</label>
                <input name="fullName" value={form.fullName} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="John Smith" />
                {errors.fullName && <p className="mt-2 text-sm text-red-400">{errors.fullName}</p>}
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-300">Email</label>
                <input name="email" value={form.email} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="john@email.com" />
                {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-300">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="+1 (555) 123-4567" />
                {errors.phone && <p className="mt-2 text-sm text-red-400">{errors.phone}</p>}
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-300">Preferred brand</label>
                <select name="brand" value={form.brand} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none">
                  <option>Dodge</option>
                  <option>BMW</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-300">Vehicle of interest</label>
                <input name="model" value={form.model} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Charger, M3, X5..." />
                {errors.model && <p className="mt-2 text-sm text-red-400">{errors.model}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-300">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows="5" className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Tell us about your preferred vehicle and timeline..." />
              </div>
            </div>

            {submitted && (
              <div className="mt-5 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                Your inquiry has been submitted successfully. We will contact you shortly.
              </div>
            )}

            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-blue-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:scale-[1.02]">
              Send inquiry <ArrowRight size={15} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
