const roomData = [
  {
    name: "Super Deluxe",
    desc: "Spacious and elegantly designed rooms with scenic greenery views. Equipped with modern amenities including free Wi-Fi for a comfortable premium stay.",
    badge: "Super Deluxe",
    image: "/brochure/image3.jpeg",
    pricing: [
      ["EP Plan", "\u20B92,000"],
      ["CP Plan", "\u20B92,200"],
      ["MAP Plan", "\u20B92,500"],
      ["AP Plan", "\u20B92,800"]
    ]
  },
  {
    name: "Deluxe",
    desc: "Cozy and well-furnished rooms offering a pleasant nature view. Ideal for guests seeking comfort with all essential facilities including free Wi-Fi.",
    badge: "Most Popular",
    image: "/brochure/image6.jpeg",
    pricing: [
      ["EP Plan", "\u20B91,800"],
      ["CP Plan", "\u20B92,000"],
      ["MAP Plan", "\u20B92,300"],
      ["AP Plan", "\u20B92,600"]
    ]
  },
  {
    name: "Standard",
    desc: "Comfortable and budget-friendly rooms designed to meet all basic needs of guests, including free Wi-Fi.",
    badge: "",
    image: "/brochure/image7.jpeg",
    pricing: [
      ["EP Plan", "\u20B91,500"],
      ["CP Plan", "\u20B91,700"],
      ["MAP Plan", "\u20B92,000"],
      ["AP Plan", "\u20B92,300"]
    ]
  }
];

const RoomSection = ({ room, reverse = false }) => {
  return (
    <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
      <div className={`md:col-span-7 group ${reverse ? "order-1 md:order-2" : ""}`}>
        <div className="relative overflow-hidden rounded-2xl editorial-shadow aspect-[4/3]">
          <img alt={room.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={room.image} />
          {room.badge ? (
            <div className={`absolute bottom-6 ${reverse ? "right-6" : "left-6"} flex gap-2`}>
              <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">{room.badge}</span>
            </div>
          ) : null}
        </div>
      </div>

      <div className={`md:col-span-5 space-y-5 md:space-y-6 ${reverse ? "order-2 md:order-1" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">{room.name}</h2>
        <p className="text-on-surface-variant leading-relaxed">{room.desc}</p>

        <div className="bg-surface-container-low p-6 rounded-xl">
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Tariff Details (INR)</h4>
          <table className="w-full text-sm">
            <tbody>
              {room.pricing.map(([label, price], idx) => (
                <tr className={idx < room.pricing.length - 1 ? "border-b border-outline-variant/20" : ""} key={`${room.name}-${label}`}>
                  <td className="py-2 text-on-surface-variant">{label}</td>
                  <td className="py-2 text-right font-bold text-primary">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link
          className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold uppercase tracking-widest text-sm transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-primary/10 text-center block"
          to="/contact"
        >
          Book This Room
        </Link>
      </div>
    </div>
  );
};

const RoomList = () => {
  return (
    <main className="pt-20 md:pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-14 md:mb-20">
        <div className="max-w-3xl">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs block mb-4">Room Categories</span>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-headline font-bold text-primary tracking-tight leading-[1.1] mb-6 md:mb-8">Our Rooms &amp; Suites</h1>
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-2xl">
            Choose from Super Deluxe, Deluxe, and Standard rooms designed for peaceful stays with modern comfort and complimentary Wi-Fi.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16 md:space-y-32">
        <RoomSection room={roomData[0]} />
        <RoomSection room={roomData[1]} reverse />
        <RoomSection room={roomData[2]} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 md:mt-32">
        <div className="bg-emerald-950 rounded-3xl md:rounded-[2.5rem] p-6 md:p-16 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-900/50 to-transparent" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Tariff Calculator</h2>
              <p className="text-emerald-100/70 mb-10 max-w-md">Plan your stay with tariff plans from the brochure.</p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-emerald-300">Room Category</label>
                  <select className="w-full bg-emerald-900/50 border-b border-emerald-700 text-white p-4 focus:ring-0 focus:border-amber-400 outline-none rounded-t-lg transition-all appearance-none">
                    <option>Super Deluxe Room</option>
                    <option>Deluxe Room</option>
                    <option>Standard Room</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-emerald-300">Plan Type</label>
                  <select className="w-full bg-emerald-900/50 border-b border-emerald-700 text-white p-4 focus:ring-0 focus:border-amber-400 outline-none rounded-t-lg transition-all appearance-none">
                    <option>EP - Room Only</option>
                    <option>CP - Room + Breakfast</option>
                    <option>MAP - Room + Breakfast + Dinner</option>
                    <option>AP - Room + All Meals</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-4 bg-emerald-900/30 rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-amber-400">bed</span>
                    <span className="font-medium">Extra Bed Required</span>
                  </div>
                  <button className="w-12 h-6 bg-emerald-700 rounded-full relative p-1 transition-all">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-emerald-900/50 backdrop-blur-xl p-6 md:p-10 rounded-3xl border border-emerald-800/50 editorial-shadow text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400 block mb-4">Estimated Total</span>
              <div className="text-4xl md:text-6xl font-headline font-bold text-amber-400 mb-2">₹2,000</div>
              <p className="text-emerald-200/50 text-sm mb-10">EP plan, excluding taxes</p>
              <button className="w-full py-5 bg-amber-400 text-emerald-950 rounded-2xl font-bold uppercase tracking-widest text-sm hover:scale-[1.02] transition-all active:scale-95">
                Confirm Reservation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 md:mt-32 grid md:grid-cols-2 gap-8">
        <div className="bg-surface-container-low rounded-3xl overflow-hidden flex flex-col h-full transition-all hover:bg-surface-container-high">
          <div className="h-80 overflow-hidden">
            <img alt="Dining Hall" className="w-full h-full object-cover" src="/brochure/image8.jpeg" />
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <span className="material-symbols-outlined text-primary">restaurant</span>
              <h3 className="text-2xl font-headline font-bold text-primary">Dining Hall</h3>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              An elegant dining space with seating capacity of around 30 guests, serving delicious Bengali and local cuisines.
            </p>
            <div className="mt-auto flex gap-4">
              <span className="text-xs font-bold px-3 py-1 bg-surface rounded-full text-primary border border-outline-variant/20">30 Capacity</span>
              <span className="text-xs font-bold px-3 py-1 bg-surface rounded-full text-primary border border-outline-variant/20">Local Cuisine</span>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low rounded-3xl overflow-hidden flex flex-col h-full transition-all hover:bg-surface-container-high">
          <div className="h-80 overflow-hidden">
            <img alt="Parking Facility" className="w-full h-full object-cover" src="/brochure/image9.jpeg" />
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <span className="material-symbols-outlined text-primary">local_parking</span>
              <h3 className="text-2xl font-headline font-bold text-primary">Parking Facility</h3>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Ample parking space available for in-house guests. A perfect stopover for biking enthusiasts exploring mountainous terrains.
            </p>
            <div className="mt-auto flex gap-4">
              <span className="text-xs font-bold px-3 py-1 bg-surface rounded-full text-primary border border-outline-variant/20">Free Parking</span>
              <span className="text-xs font-bold px-3 py-1 bg-surface rounded-full text-primary border border-outline-variant/20">Biker Friendly</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoomList;
import { Link } from "react-router-dom";
