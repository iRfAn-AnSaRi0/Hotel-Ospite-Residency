import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          <span className="text-2xl font-bold text-white font-headline flex items-center gap-3">
            <img alt="Hotel Ospite Residency Logo" className="h-10 w-10 object-contain" src="/logo.png" />
            <span>Hotel Ospite Residency</span>
          </span>
          <p className="text-emerald-50/80 italic text-sm">Where the mountains meet the soul, and every guest is treated like family.</p>
        </div>

        <div className="space-y-4">
          <h4 className="text-amber-400 font-bold uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-y-3">
            <li>
              <NavLink className="text-emerald-50/80 hover:text-white text-sm" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-emerald-50/80 hover:text-white text-sm" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="text-emerald-50/80 hover:text-white text-sm" to="/rooms">
                Rooms
              </NavLink>
            </li>
            <li>
              <NavLink className="text-emerald-50/80 hover:text-white text-sm" to="/travels">
                Travels
              </NavLink>
            </li>
            <li>
              <NavLink className="text-emerald-50/80 hover:text-white text-sm" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <Link className="text-emerald-50/80 hover:text-white text-sm" to="/contact">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-amber-400 font-bold uppercase tracking-widest text-xs">Contact Information</h4>
          <p className="text-emerald-50/80 text-sm leading-relaxed">
            Suhim Colony, Helipad Road, Sichey,
            <br />
            Gangtok, Sikkim 737101
          </p>
          <div className="space-y-2">
            <a className="flex items-center gap-3 text-emerald-50/90 hover:text-amber-400" href="tel:+919609851302">
              <span className="material-symbols-outlined text-sm">call</span>
              <span className="text-sm">+91 96098 51302</span>
            </a>
            <a className="flex items-center gap-3 text-emerald-50/90 hover:text-amber-400" href="mailto:ospiter1234@gmil.com">
              <span className="material-symbols-outlined text-sm">mail</span>
              <span className="text-sm">ospiter1234@gmil.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-emerald-50/40 text-xs tracking-wide">© 2024 Hotel Ospite Residency. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="text-emerald-50/40 text-xs">Designed with Serenity</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

