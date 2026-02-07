import React from "react";

/* SVG imports */
const FlightSVG = new URL("../assets/flight.svg", import.meta.url).href;
const TrainSVG = new URL("../assets/train.svg", import.meta.url).href;
const BusSVG = new URL("../assets/bus.svg", import.meta.url).href;

const items = [
  { title: "Flight Tickets", desc: "Best fares with quick confirmation for any route.", icon: FlightSVG },
  { title: "Train Tickets", desc: "Check availability, classes, and book smoothly.", icon: TrainSVG },
  { title: "Bus Tickets", desc: "AC / Non-AC options with easy seat selection.", icon: BusSVG },
];

export default function TicketBookingSection() {
  return (
    <section className="py-20 bg-[#f6f8ff]">
      <div className="max-w-[1232px] mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#121316]">
              Ticket Booking
            </h2>
            <p className="mt-2 text-[#667085] max-w-[640px]">
              Pick a mode, get options, and confirm bookings fast.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-[#dbe4ff] text-sm text-[#2b4c7e] font-semibold w-fit">
            <span className="w-2 h-2 rounded-full bg-[#0092fb]" />
            Fast • Verified • Support
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-[28px] bg-white border border-[#e6ecff] shadow-sm hover:shadow-md transition"
            >
              {/* Decorative strip (theme colors) */}
              <div className="h-2 w-full bg-gradient-to-r from-[#0092fb] via-[#3b82f6] to-[#7c5cff]" />

              <div className="p-7">
                {/* Icon bubble */}
                <div className="w-16 h-16 rounded-2xl bg-[#f1f7ff] border border-[#dbe7ff] flex items-center justify-center">
                  <img src={icon} alt={title} className="w-10 h-10" />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-[#121316]">{title}</h3>
                <p className="mt-2 text-sm text-[#667085] leading-relaxed">{desc}</p>

                {/* Button (new style but theme match) */}
                <button
                  className="mt-6 w-full rounded-2xl py-3 font-bold text-white
                             bg-[#0092fb] hover:bg-[#007ad6] transition
                             flex items-center justify-center gap-2"
                >
                  Explore Options <span className="text-lg">➜</span>
                </button>
              </div>

              {/* Corner badge */}
              <div className="absolute top-4 right-4 text-[11px] font-bold px-3 py-1 rounded-full bg-[#000721] text-white">
                Popular
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
