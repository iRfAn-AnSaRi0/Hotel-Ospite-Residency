const experienceItems = [
  {
    icon: "home",
    title: "Homely Atmosphere",
    text: "A peaceful retreat in Suhim Colony, Sichey for travelers seeking comfort and tranquility."
  },
  {
    icon: "location_on",
    title: "Great Location",
    text: "Just 3 km from Gangtok main town and around 7 minutes from STNM Hospital."
  },
  {
    icon: "nature_people",
    title: "Nature & Serenity",
    text: "Breathtaking natural surroundings with easy access to nearby attractions."
  }
];

const team = [
  {
    role: "Proprietor",
    name: "Vidhya Gurung",
    text: "Contact: +91 96098 51302",
    image: "/brochure/image1.jpeg"
  },
  {
    role: "Manager",
    name: "Indrajit Barman",
    text: "Contact: +91 62954 98407",
    image: "/brochure/image8.jpeg"
  }
];

const amenities = [
  "In-room Tea/Coffee Maker",
  "Daily Housekeeping Service",
  "24x7 Hot & Cold Water",
  "All Rooms Attached Washroom",
  "Dining Facility for Guests",
  "Power Backup",
  "Free Wi-Fi on All Floors",
  "Dedicated Laundry Service",
  "Complimentary Buffet Breakfast",
  "Free Parking",
  "Pick-up & Drop Services"
];

const gallery = [
  "/brochure/image1.jpeg",
  "/brochure/image2.jpeg",
  "/brochure/image3.jpeg",
  "/brochure/image4.jpeg",
  "/brochure/image5.jpeg",
  "/brochure/image6.jpeg",
  "/brochure/image7.jpeg",
  "/brochure/image8.jpeg",
  "/brochure/image9.jpeg"
];

const AboutContent = () => {
  return (
    <main className="pt-20 md:pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 md:mb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img alt="Our Story" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/brochure/image2.jpeg" />
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-3xl md:text-6xl font-headline font-bold text-primary kerning-tight leading-tight">
              Our Story of <br />
              <span className="text-secondary">Quiet Luxury</span>
            </h1>
            <p className="text-on-surface-variant leading-relaxed">
              Hotel Ospite Residency is nestled in the peaceful surroundings of Suhim Colony, Sichey, just 3 km from Gangtok's main town.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              We offer a homely atmosphere with breathtaking natural views and easy access to Ban Jhakri Falls Park, Tashi View Point, Gonjang Monastery, and Luing Garden.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-14 md:py-20 mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-3">The Ospite Experience</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {experienceItems.map((item) => (
              <div key={item.title} className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20">
                <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center rounded-full mb-5">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                </div>
                <h3 className="text-lg font-headline font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-8 md:mb-10">Meet the Visionaries</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((person) => (
            <div key={person.name} className="group rounded-2xl bg-surface-container-low flex flex-col sm:flex-row overflow-hidden">
              <div className="w-full sm:w-1/2 overflow-hidden">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={person.image} alt={person.name} />
              </div>
              <div className="w-full sm:w-1/2 p-5 md:p-6 flex flex-col justify-center">
                <span className="text-secondary font-semibold uppercase tracking-widest text-xs mb-1">{person.role}</span>
                <h3 className="text-xl font-headline font-bold text-primary mb-3">{person.name}</h3>
                <p className="text-on-surface-variant text-xs leading-relaxed">{person.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-on-primary py-14 md:py-20 mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-3">Our Features</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {amenities.map((item) => (
              <div key={item} className="flex flex-col items-center p-4 rounded-xl bg-primary-container/50 border border-outline-variant/10">
                <span className="material-symbols-outlined text-amber-400 mb-2">check_circle</span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-center">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-3">Moments Captured</h2>
        </div>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {gallery.map((image, idx) => (
            <div className="overflow-hidden rounded-xl" key={idx}>
              <img className="w-full transition-transform duration-500 hover:scale-105" src={image} alt={`Gallery ${idx + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutContent;
