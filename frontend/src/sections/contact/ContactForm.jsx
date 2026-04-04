const ContactForm = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <header className="mb-16 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 leading-tight tracking-tight">
          Connect with Our <br />
          <span className="text-secondary italic">Editorial Team.</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg">
          Experience the tranquility of Gangtok. Whether you have a specific room inquiry or need help planning your Sikkim itinerary, our concierge is here to assist.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-[0_12px_40px_rgba(20,27,43,0.04)]">
            <h2 className="text-2xl font-bold text-primary mb-8">Reservation Inquiry</h2>

            <form action="#" className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Full Name</label>
                  <input className="w-full bg-transparent border border-outline-variant/50 rounded-md px-3 py-2.5 text-sm focus:border-primary focus:ring-0" placeholder="John Doe" type="text" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Email Address</label>
                  <input className="w-full bg-transparent border border-outline-variant/50 rounded-md px-3 py-2.5 text-sm focus:border-primary focus:ring-0" placeholder="example@email.com" type="email" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Phone Number</label>
                  <input className="w-full bg-transparent border border-outline-variant/50 rounded-md px-3 py-2.5 text-sm focus:border-primary focus:ring-0" placeholder="+91 0000 000 000" type="tel" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Room Type</label>
                  <select className="w-full bg-transparent border border-outline-variant/50 rounded-md px-3 py-2.5 text-sm focus:border-primary focus:ring-0">
                    <option>Super Deluxe Room</option>
                    <option>Deluxe Room</option>
                    <option>Standard Room</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Check-in</label>
                  <input className="w-full bg-transparent border border-outline-variant/50 rounded-md px-3 py-2.5 text-sm focus:border-primary focus:ring-0" type="date" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Check-out</label>
                  <input className="w-full bg-transparent border border-outline-variant/50 rounded-md px-3 py-2.5 text-sm focus:border-primary focus:ring-0" type="date" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Meal Plan</label>
                  <select className="w-full bg-transparent border border-outline-variant/50 rounded-md px-3 py-2.5 text-sm focus:border-primary focus:ring-0">
                    <option>EP (Room Only)</option>
                    <option>CP (Breakfast)</option>
                    <option>MAP (Breakfast + Dinner)</option>
                    <option>AP (All Meals)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Number of Guests</label>
                  <input className="w-full bg-transparent border border-outline-variant/50 rounded-md px-3 py-2.5 text-sm focus:border-primary focus:ring-0" placeholder="2" type="number" min="1" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Extra Bed Required?</label>
                  <div className="h-[42px] rounded-md border border-outline-variant/50 px-3 flex items-center gap-5 text-sm">
                    <label className="flex items-center gap-2">
                      <input className="text-primary focus:ring-primary" name="extraBed" type="radio" />
                      Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input defaultChecked className="text-primary focus:ring-primary" name="extraBed" type="radio" />
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Message or Special Requests</label>
                <textarea className="w-full bg-transparent border border-outline-variant/50 rounded-md px-3 py-2.5 text-sm focus:border-primary focus:ring-0 resize-none" placeholder="Tell us about your arrival or special needs..." rows="4" />
              </div>

              <button className="px-8 py-3 bg-gradient-to-br from-secondary to-secondary-container text-white rounded-xl font-bold tracking-widest uppercase text-xs shadow-lg shadow-secondary/20" type="submit">
                Submit Request
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <section className="bg-surface-container-low rounded-2xl p-6 space-y-5">
            <h3 className="text-xl font-bold text-primary">Contact Details</h3>

            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Our Residence</p>
                <p className="text-sm leading-relaxed">Suhim Colony, Helipad Road, Sichey, Gangtok, Sikkim 737101</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">mail</span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Email Us</p>
                <p className="text-sm font-medium">ospiter1234@gmil.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">call</span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Call for Booking</p>
                <p className="text-sm font-medium">+91 96098 51302 / +91 62954 98407</p>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 gap-3">
            <div className="bg-surface-container-high rounded-xl p-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">schedule</span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Check-in / Out</p>
                <p className="text-xs font-medium">Standard time: 12:00 PM</p>
              </div>
            </div>

            <div className="bg-surface-container-high rounded-xl p-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">coffee</span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Breakfast Timing</p>
                <p className="text-xs font-medium">Daily: 07:30 AM - 10:30 AM</p>
              </div>
            </div>

            <div className="bg-surface-container-high rounded-xl p-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">airport_shuttle</span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Pickup Service</p>
                <p className="text-xs font-medium">Available from Bagdogra/Siliguri</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-64 shadow-md border border-outline-variant/30">
            <iframe
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Suhim+Colony,+Helipad+Road,+Sichey,+Gangtok,+Sikkim+737101&output=embed"
              title="Hotel Ospite Residency Map"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
