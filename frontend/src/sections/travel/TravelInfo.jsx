const places = [
  {
    name: "Ban Jhakri Falls Park",
    distance: "7.2 KM AWAY",
    desc: "A beautifully landscaped energy park featuring 100-foot waterfalls, ethnic sculptures, and peaceful walkways through dense foliage.",
    img: "/brochure/image1.jpeg",
    mapQuery: "Ban Jhakri Falls Park, Gangtok"
  },
  {
    name: "Tashi View Point",
    distance: "4.5 KM AWAY",
    desc: "The premier spot for witnessing the sunrise over the majestic Kanchenjunga peaks. Offers a sweeping 360-degree view of the mountains.",
    img: "/brochure/image2.jpeg",
    mapQuery: "Tashi View Point, Gangtok"
  },
  {
    name: "Gonjang Monastery",
    distance: "6.0 KM AWAY",
    desc: "Perched at an altitude of 6,000 ft, this serene monastery is known for its intricate religious murals and Tibetan education.",
    img: "/brochure/image8.jpeg",
    mapQuery: "Gonjang Monastery, Gangtok"
  },
  {
    name: "Luing Garden",
    distance: "9.5 KM AWAY",
    desc: "A hidden horticultural gem filled with exotic local flora, rare orchid species, and quiet benches for contemplation amidst nature.",
    img: "/brochure/image9.jpeg",
    mapQuery: "Luing Garden, Gangtok"
  }
];

const TravelInfo = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-20 space-y-16 md:space-y-24">
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold font-headline text-primary tracking-tight leading-[1.1] mb-4 md:mb-6">
            Discover the <span className="text-secondary italic font-light">Soul</span> of Gangtok
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Explore curated local experiences, hidden monasteries, and breathtaking viewpoints just a short journey from our doorstep.
          </p>
        </div>
        <div className="lg:col-span-4 flex justify-end">
          <div className="w-16 h-16 rounded-full border border-outline-variant flex items-center justify-center border-dashed">
            <span className="material-symbols-outlined text-secondary">explore</span>
          </div>
        </div>
      </header>

      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-outline-variant opacity-20" />
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Nearby Attractions</h2>
          <div className="h-px flex-1 bg-outline-variant opacity-20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {places.map((place) => (
            <div key={place.name} className="group bg-surface-container-low rounded-3xl overflow-hidden editorial-shadow flex flex-col transition-all duration-300 hover:scale-[1.01]">
              <div className="h-64 sm:h-72 md:h-80 overflow-hidden relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={place.img} alt={place.name} />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold tracking-wider text-primary">
                  {place.distance}
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold font-headline text-primary">{place.name}</h3>
                <p className="text-on-surface-variant leading-relaxed">{place.desc}</p>
                <a
                  className="inline-flex items-center gap-2 text-secondary font-bold mt-auto"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapQuery)}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="border-b border-transparent group-hover:border-secondary transition-all">View on Map</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary overflow-hidden rounded-3xl md:rounded-[2.5rem] relative min-h-[360px] md:min-h-[420px] flex items-center">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
          <img
            className="w-full h-full object-cover"
            src="/brochure/image9.jpeg"
            alt="Riders"
          />
        </div>

        <div className="relative z-10 px-5 sm:px-8 md:px-16 max-w-3xl space-y-5 md:space-y-6 py-12 md:py-16">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase">
            <span className="material-symbols-outlined text-sm">motorcycle</span>
            Riders Paradise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-white leading-tight">
            Calling All <span className="text-amber-400">Road Warriors</span>
          </h2>
          <p className="text-emerald-50/80 text-base md:text-lg leading-relaxed">
            Sikkim's winding roads are best explored on two wheels. At Hotel Ospite Residency, we provide dedicated secure parking, toolkit assistance, and a community space where stories of the road are shared over hot tea.
          </p>
        </div>
      </section>

      <section className="space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary">Your Local Gateway</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">Centrally located in Gangtok, ensuring the best of the Himalayas is always within reach.</p>
        </div>

        <div className="bg-surface-container-highest rounded-[1.5rem] md:rounded-[2rem] h-[340px] md:h-[500px] w-full relative overflow-hidden editorial-shadow border border-outline-variant/30">
          <iframe
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Suhim+Colony,+Helipad+Road,+Sichey,+Gangtok,+Sikkim+737101&output=embed"
            title="Hotel Ospite Residency Location"
          />

          <div className="absolute top-3 left-3 right-3 md:top-6 md:left-6 md:right-auto">
            <div className="bg-white/90 backdrop-blur rounded-2xl p-3 md:p-4 shadow-xl border border-white max-w-none md:max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-primary">Gangtok Center</div>
                  <div className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Sikkim, India</div>
                </div>
              </div>
              <a
                className="w-full py-2.5 bg-primary text-on-primary rounded-xl text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity text-center block"
                href="https://www.google.com/maps/search/?api=1&query=Suhim+Colony,+Helipad+Road,+Sichey,+Gangtok,+Sikkim+737101"
                rel="noreferrer"
                target="_blank"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TravelInfo;
