import { Link } from "react-router-dom";

const MobileBottomBar = () => {
  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-emerald-900 shadow-[0_-12px_40px_rgba(20,27,43,0.06)]">
        <a className="flex flex-col items-center justify-center text-white/90 py-3 flex-1" href="tel:+919609851302">
          <span className="material-symbols-outlined">call</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.1rem] mt-1">Call</span>
        </a>
        <a className="flex flex-col items-center justify-center text-white/90 py-3 flex-1 border-x border-white/10" href="https://wa.me/919609851302">
          <span className="material-symbols-outlined">chat</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.1rem] mt-1">WhatsApp</span>
        </a>
        <Link className="flex flex-col items-center justify-center bg-emerald-800 text-amber-400 py-3 flex-1" to="/contact">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            calendar_month
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.1rem] mt-1">Book Now</span>
        </Link>
      </div>
      <div className="h-16 md:hidden" />
    </>
  );
};

export default MobileBottomBar;

