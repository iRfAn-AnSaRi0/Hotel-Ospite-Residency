import { Link, NavLink } from "react-router-dom";

const navItemClass = ({ isActive }) =>
  isActive
    ? "text-emerald-900 border-b-2 border-amber-500 pb-1 text-sm font-semibold tracking-wide"
    : "text-emerald-800/70 hover:text-emerald-900 text-sm font-semibold tracking-wide transition-all";

const Navbar = ({ fixed = false }) => {
  return (
    <nav className={`bg-white/80 backdrop-blur-md ${fixed ? "fixed" : "sticky"} top-0 z-50 shadow-sm w-full`}>
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Link className="text-xl font-bold tracking-tighter text-emerald-900 font-headline" to="/">
          <span className="flex items-center gap-3">
            <img alt="Hotel Ospite Residency Logo" className="h-10 w-10 object-contain" src="/logo.png" />
            <span>Hotel Ospite Residency</span>
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

        <Link className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-semibold text-sm hover:scale-105 transition-all" to="/contact">
          Book Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

