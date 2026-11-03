import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Dodge', to: '/dodge' },
  { label: 'BMW', to: '/bmw' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 text-lg font-semibold tracking-[0.22em] text-white uppercase">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500/60 bg-red-500/10 font-black text-red-400">
            D
          </span>
          <span className="hidden sm:inline">Dodge BMW</span>
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link text-sm font-medium tracking-[0.18em] uppercase transition ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 transition hover:border-red-500 hover:text-white">
            Inventory
          </button>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-red-500/20 transition hover:scale-[1.02]"
          >
            Explore Cars <ArrowRight size={14} />
          </NavLink>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-sm font-medium uppercase tracking-[0.2em] text-slate-200"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
              onClick={() => setMenuOpen(false)}
            >
              Explore Cars <ArrowRight size={14} />
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
