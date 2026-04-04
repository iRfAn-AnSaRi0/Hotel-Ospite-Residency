const facilities = [
  ["coffee", "In-room Tea/Coffee Maker"],
  ["cleaning_services", "Daily Housekeeping"],
  ["shower", "24x7 Hot & Cold Water"],
  ["bathroom", "Attached Washroom"],
  ["restaurant", "Dining Facility"],
  ["power", "Power Backup"],
  ["wifi", "Free Wi-Fi on All Floors"],
  ["local_laundry_service", "Dedicated Laundry"],
  ["free_breakfast", "Complimentary Breakfast"],
  ["local_parking", "Free Parking"],
  ["airport_shuttle", "Pick-up & Drop"],
  ["support_agent", "24x7 Assistance"]
];

const rooms = [
  {
    name: "Super Deluxe Room",
    details: "Spacious greenery-view room with premium comfort and free Wi-Fi",
    price: "\u20B92000",
    img: "/brochure/image3.jpeg"
  },
  {
    name: "Deluxe Room",
    details: "Cozy well-furnished room with all essential facilities and free Wi-Fi",
    price: "\u20B91800",
    img: "/brochure/image6.jpeg"
  },
  {
    name: "Standard Room",
    details: "Comfortable budget-friendly stay with all basic guest amenities",
    price: "\u20B91500",
    img: "/brochure/image7.jpeg"
  }
];

const attractions = [
  ["Ban Jhakri Falls Park", "Popular nearby attraction for nature lovers.", "Nearby", "/brochure/image1.jpeg"],
  ["Tashi View Point", "Scenic viewpoint for stunning mountain panoramas.", "Nearby", "/brochure/image2.jpeg"],
  ["Gonjang Monastery", "Peaceful monastery close to the hotel.", "Nearby", "/brochure/image8.jpeg"],
  ["Luing Garden", "Beautiful garden destination near Gangtok.", "Nearby", "/brochure/image9.jpeg"]
];

const Hero = () => {
  return (
    <>
      <header className="relative h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Hotel Ospite Residency Exterior" className="w-full h-full object-cover" src="/brochure/image2.jpeg" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6 scale-95 md:scale-100">
            <span className="material-symbols-outlined text-amber-400 text-sm">location_on</span>
            <span className="text-white text-xs font-bold tracking-widest uppercase">Suhim Colony, Sichey, Gangtok</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white font-headline leading-[1.1] mb-6 max-w-2xl tracking-tight">
            Welcome to <br />
            <span className="text-amber-400">Comfort &amp; Serenity</span>
          </h1>
          <p className="text-xl text-emerald-50/90 font-medium mb-10 max-w-lg leading-relaxed">
            A home away from home in peaceful surroundings, just 3 km from Gangtok main town.
          </p>
        </div>
      </header>

      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-24 relative z-20">
            <div className="bg-surface-container-lowest p-8 rounded-2xl editorial-shadow flex flex-col gap-4 border-b-4 border-amber-400">
              <span className="material-symbols-outlined text-primary text-4xl">distance</span>
              <h3 className="text-2xl font-bold text-primary font-headline tracking-tight">3 km from Main Town</h3>
              <p className="text-on-surface-variant text-sm">Conveniently located for both comfort and city access.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl editorial-shadow flex flex-col gap-4 border-b-4 border-primary md:translate-y-8">
              <span className="material-symbols-outlined text-primary text-4xl">medical_services</span>
              <h3 className="text-2xl font-bold text-primary font-headline tracking-tight">7 min to STNM Hospital</h3>
              <p className="text-on-surface-variant text-sm">Accessible location for emergencies and essential city services.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl editorial-shadow flex flex-col gap-4 border-b-4 border-amber-400">
              <span className="material-symbols-outlined text-primary text-4xl">restaurant</span>
              <h3 className="text-2xl font-bold text-primary font-headline tracking-tight">30-seat Dining Hall</h3>
              <p className="text-on-surface-variant text-sm">Enjoy authentic Bengali and local cuisines in our dining space.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary font-headline mb-4 tracking-tight">Our Features</h2>
            <p className="text-on-surface-variant leading-relaxed max-w-xl">Comfort, convenience, and thoughtful hospitality on every floor.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-outline-variant/10 rounded-3xl overflow-hidden shadow-sm">
            {facilities.map(([icon, label]) => (
              <div key={label} className="bg-white p-8 flex flex-col items-center justify-center gap-3 text-center transition-colors hover:bg-emerald-50">
                <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
                <span className="text-sm font-bold text-primary tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-primary font-headline mb-4 tracking-tight italic">Room Categories</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Comfortable stays with free Wi-Fi across Super Deluxe, Deluxe, and Standard rooms.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {rooms.map((room, idx) => (
              <div key={room.name} className="group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-6">
                  <img alt={room.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={room.img} />
                  {idx === 0 ? (
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-400 text-primary font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-widest">Most Popular</span>
                    </div>
                  ) : null}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-1">{room.name}</h3>
                <p className="text-on-surface-variant text-sm mb-4">{room.details}</p>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-primary">{room.price}</span>
                  <span className="text-on-surface-variant text-sm">EP Plan</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-highest/20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary font-headline mb-12 tracking-tight">Nearby Attractions</h2>
          <div className="flex overflow-x-auto pb-12 gap-6 no-scrollbar snap-x">
            {attractions.map(([title, desc, dist, img]) => (
              <div key={title} className="flex-none w-80 snap-start bg-white rounded-2xl overflow-hidden editorial-shadow group">
                <div className="h-48 overflow-hidden">
                  <img alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={img} />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-primary text-xl mb-2">{title}</h4>
                  <p className="text-on-surface-variant text-sm mb-4">{desc}</p>
                  <span className="text-secondary font-bold text-xs uppercase tracking-tighter">{dist}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
