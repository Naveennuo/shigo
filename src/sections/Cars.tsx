import React from "react";

/* =======================
   Image imports (add manually)
======================= */
const SwiftDzire = new URL("../assets/swift-dzire.jpg", import.meta.url).href;
const Etios = new URL("../assets/etios.jpg", import.meta.url).href;
const Ertiga = new URL("../assets/ertiga.jpg", import.meta.url).href;
const Innova = new URL("../assets/innova.jpg", import.meta.url).href;
const Crysta = new URL("../assets/crysta.jpg", import.meta.url).href;
const Tempo14 = new URL("../assets/tempo-14.jpg", import.meta.url).href;
const Tempo18 = new URL("../assets/tempo-18.jpg", import.meta.url).href;
const Urbania = new URL("../assets/urbania.jpg", import.meta.url).href;
const Coach21 = new URL("../assets/coach-21.jpg", import.meta.url).href;
const Bus32 = new URL("../assets/bus-32.jpg", import.meta.url).href;

/* =======================
   Types
======================= */
type Vehicle = {
  id: number;
  name: string;
  category: string;
  seats: string;
  image: string;

  aboveKm: string;
  perKmCost: string;
  driverBettaAbove: string;

  belowKm: string;
  rentPerDay: string;
  fuelCost: string;
  driverBettaBelow: string;

  note: string;
};

/* =======================
   Actual Vehicle Data
======================= */
const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Swift Dzire",
    category: "Sedan",
    seats: "4+1",
    image: SwiftDzire,
    aboveKm: "250 km",
    perKmCost: "₹12",
    driverBettaAbove: "₹300",
    belowKm: "250 km",
    rentPerDay: "₹1600",
    fuelCost: "₹9",
    driverBettaBelow: "No",
    note: "Toll parking & hills station charges extra",
  },
  {
    id: 2,
    name: "Toyota Etios",
    category: "Sedan",
    seats: "4+1",
    image: Etios,
    aboveKm: "250 km",
    perKmCost: "₹12",
    driverBettaAbove: "₹300",
    belowKm: "250 km",
    rentPerDay: "₹1600",
    fuelCost: "₹9",
    driverBettaBelow: "No",
    note: "Toll parking & hills station charges extra",
  },
  {
    id: 3,
    name: "Maruti Ertiga",
    category: "SUV",
    seats: "7+1",
    image: Ertiga,
    aboveKm: "300 km",
    perKmCost: "₹17",
    driverBettaAbove: "₹400",
    belowKm: "300 km",
    rentPerDay: "₹2100",
    fuelCost: "₹12",
    driverBettaBelow: "No",
    note: "Toll parking & hills station charges extra",
  },
  {
    id: 4,
    name: "Toyota Innova",
    category: "SUV",
    seats: "7+1",
    image: Innova,
    aboveKm: "300 km",
    perKmCost: "₹17",
    driverBettaAbove: "₹400",
    belowKm: "300 km",
    rentPerDay: "₹2100",
    fuelCost: "₹12",
    driverBettaBelow: "No",
    note: "Toll parking & hills station charges extra",
  },
  {
    id: 5,
    name: "Innova Crysta",
    category: "Premium SUV",
    seats: "7+1",
    image: Crysta,
    aboveKm: "350 km",
    perKmCost: "₹22",
    driverBettaAbove: "₹400",
    belowKm: "350 km",
    rentPerDay: "₹2600",
    fuelCost: "₹16",
    driverBettaBelow: "No",
    note: "Toll parking & hills station charges extra",
  },
  {
    id: 6,
    name: "Tempo Traveller",
    category: "AC / Non-AC",
    seats: "14+1",
    image: Tempo14,
    aboveKm: "350 km",
    perKmCost: "₹23 / ₹21",
    driverBettaAbove: "₹500",
    belowKm: "350 km",
    rentPerDay: "₹2600 / ₹2500",
    fuelCost: "₹16 / ₹15",
    driverBettaBelow: "No",
    note: "Toll parking & hills station charges extra",
  },
  {
    id: 7,
    name: "Tempo Traveller",
    category: "AC",
    seats: "18+1",
    image: Tempo18,
    aboveKm: "350 km",
    perKmCost: "₹28",
    driverBettaAbove: "₹500",
    belowKm: "350 km",
    rentPerDay: "₹3900",
    fuelCost: "₹19",
    driverBettaBelow: "No",
    note: "Toll parking & hills station charges extra",
  },
  {
    id: 8,
    name: "Force Urbania",
    category: "Luxury Van",
    seats: "12+1 / 16+1",
    image: Urbania,
    aboveKm: "350 km",
    perKmCost: "₹30",
    driverBettaAbove: "₹400",
    belowKm: "350 km",
    rentPerDay: "₹4200",
    fuelCost: "₹22",
    driverBettaBelow: "No",
    note: "Toll parking & hills station charges extra",
  },
  {
    id: 9,
    name: "Coach",
    category: "AC",
    seats: "21 Seater",
    image: Coach21,
    aboveKm: "350 km",
    perKmCost: "₹36",
    driverBettaAbove: "₹300",
    belowKm: "350 km",
    rentPerDay: "₹4600",
    fuelCost: "₹24",
    driverBettaBelow: "No",
    note: "Toll parking & hills station charges extra",
  },
  {
    id: 10,
    name: "Sleeper Bus",
    category: "AC",
    seats: "32 Sleeper",
    image: Bus32,
    aboveKm: "350 km",
    perKmCost: "₹40",
    driverBettaAbove: "₹500",
    belowKm: "350 km",
    rentPerDay: "₹6500",
    fuelCost: "₹28",
    driverBettaBelow: "No",
    note: "Toll parking & hills station charges extra",
  },
];

/* =======================
   Component
======================= */
export default function VehicleTariffCards() {
  return (
    <section className="bg-[#f5f6f8] py-12">
      <div className="max-w-[1240px] mx-auto px-4">
        <h2 className="text-[28px] md:text-[36px] font-semibold text-[#121316] mb-8">
          Car Rental Tariff
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <div
              key={v.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              {/* Image */}
              <img
                src={v.image}
                alt={v.name}
                className="w-full h-[200px] object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#121316]">
                  {v.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {v.category} • {v.seats}
                </p>

                <div className="text-sm space-y-1">
                  <p className="font-semibold">
                    Above {v.aboveKm}:
                    <span className="font-normal">
                      {" "}
                      {v.perKmCost}/km · Betta {v.driverBettaAbove}
                    </span>
                  </p>

                  <p className="font-semibold">
                    Below {v.belowKm}:
                    <span className="font-normal">
                      {" "}
                      ₹{v.rentPerDay.replace("₹", "")}/day · Fuel {v.fuelCost}
                    </span>
                  </p>

                  <p className="text-xs text-gray-500 mt-2">{v.note}</p>
                </div>

                <button className="mt-4 w-full bg-[#009387] text-white py-2.5 rounded-xl font-medium hover:opacity-90 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
