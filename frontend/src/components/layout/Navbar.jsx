import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItemClass = ({ isActive }) =>
  isActive
    ? "text-emerald-900 border-b-2 border-amber-500 pb-1 text-sm font-semibold tracking-wide"
    : "text-emerald-800/70 hover:text-emerald-900 text-sm font-semibold tracking-wide transition-all";

const mobileNavItemClass = ({ isActive }) =>
  isActive
    ? "text-emerald-900 bg-emerald-50 px-4 py-3 text-sm font-semibold block rounded-lg"
    : "text-emerald-800/90 hover:text-emerald-900 hover:bg-emerald-50 px-4 py-3 text-sm font-semibold block rounded-lg transition-all";

const Navbar = ({ fixed = false }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`bg-white/80 backdrop-blur-md ${fixed ? "fixed" : "sticky"} top-0 z-50 shadow-sm w-full`}>
      <div className="flex justify-between items-center w-full px-4 md:px-6 py-3 md:py-4 max-w-7xl mx-auto">
        <Link className="text-base md:text-xl font-bold tracking-tighter text-emerald-900 font-headline min-w-0" to="/">
          <span className="flex items-center gap-2 md:gap-3">
            <img alt="Hotel Ospite Residency Logo" className="h-8 w-8 md:h-10 md:w-10 object-contain" src="/logo.png" />
            <span className="leading-tight max-w-[150px] sm:max-w-none truncate sm:truncate-none">Hotel Ospite Residency</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink className={navItemClass} to="/">
            Home
          </NavLink>
          <NavLink className={navItemClass} to="/about">
            About
          </NavLink>
          <NavLink className={navItemClass} to="/rooms">
            Rooms
          </NavLink>
          <NavLink className={navItemClass} to="/travels">
            Travels
          </NavLink>
          <NavLink className={navItemClass} to="/contact">
            Contact
          </NavLink>
        </div>

        <div className="hidden md:block">
          <Link className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-semibold text-sm hover:scale-105 transition-all" to="/contact">
            Book Now
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Link className="bg-primary text-on-primary px-3 py-2 rounded-xl font-semibold text-xs" to="/contact">
            Book Now
          </Link>
          <button
            aria-label="Toggle menu"
            className="w-9 h-9 rounded-xl border border-emerald-200 flex items-center justify-center text-emerald-900"
            onClick={() => setOpen((prev) => !prev)}
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden px-4 pb-4 max-w-7xl mx-auto">
          <div className="bg-white border border-emerald-100 rounded-2xl p-2 shadow-sm">
            <NavLink className={mobileNavItemClass} onClick={() => setOpen(false)} to="/">
              Home
            </NavLink>
            <div className="h-px bg-emerald-100" />
            <NavLink className={mobileNavItemClass} onClick={() => setOpen(false)} to="/about">
              About
            </NavLink>
            <div className="h-px bg-emerald-100" />
            <NavLink className={mobileNavItemClass} onClick={() => setOpen(false)} to="/rooms">
              Rooms
            </NavLink>
            <div className="h-px bg-emerald-100" />
            <NavLink className={mobileNavItemClass} onClick={() => setOpen(false)} to="/travels">
              Travels
            </NavLink>
            <div className="h-px bg-emerald-100" />
            <NavLink className={mobileNavItemClass} onClick={() => setOpen(false)} to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
