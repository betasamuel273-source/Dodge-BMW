import { Facebook, Instagram, MapPin, Mail, Phone, ArrowUp, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Dodge', to: '/dodge' },
  { label: 'BMW', to: '/bmw' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 bg-[#030b14]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="mb-5 flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.22em] text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500/65 bg-red-500/10 font-black text-red-400">
                D
              </span>
              DODGE BMW
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-300">
              Premium automotive experiences built around power, style, and a commitment to exceptional vehicles.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Navigation</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3"><MapPin size={16} className="text-red-400" /> 2150 Auto Avenue, Miami, FL</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-blue-400" /> +1 (555) 402-1189</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-red-400" /> sales@dodgebmw.com</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Follow</h3>
            <div className="mb-6 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-red-500 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/15554021189"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-300"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© 2025 Dodge & BMW Collection. All rights reserved.</p>
          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-slate-200 hover:border-red-500 hover:text-white"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
