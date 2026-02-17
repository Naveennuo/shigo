import React from "react";

/* images (add manually) */
const Budget = new URL("../assets/Budget Friendly Hotel.jpg", import.meta.url).href;
const Star3 = new URL("../assets/3 Star Hotel.jpg", import.meta.url).href;
const Star4 = new URL("../assets/4 Star Hotel.jpg", import.meta.url).href;
const Star5 = new URL("../assets/5 Star Hotel.jpg", import.meta.url).href;
const Houseboat = new URL("../assets/Allappy Boat House.jpeg", import.meta.url).href;
const PoovarBackwaters = new URL("../assets/Poovar Backwaters.jpg", import.meta.url).href;

const items = [
  { id: 1, title: "Budget Friendly Hotel", image: Budget },
  { id: 2, title: "3 Star Hotel", image: Star3 },
  { id: 3, title: "4 Star Hotel", image: Star4 },
  { id: 4, title: "5 Star Hotel", image: Star5 },
  { id: 5, title: "Allappy Boat House", image: Houseboat },
  { id: 6, title: "Poovar Backwaters", image: PoovarBackwaters },
];

export default function HotelBookingCards() {
  return (
    <section className="bg-[#ffffff] py-16">
      <div className="max-w-[1232px] mx-auto px-4">
        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#121316] mb-8">
          Hotel Booking
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ id, title, image }) => (
            <div key={id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img src={image} alt={title} className="h-[200px] w-full object-cover" />
              <div className="p-4">
                <p className="text-lg font-semibold text-[#121316]">{title}</p>
                <button className="mt-4 w-full bg-[#0092FB] text-white py-2 rounded-lg font-medium hover:bg-[#007ad6] transition">
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
