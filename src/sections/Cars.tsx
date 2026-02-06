import React from "react";

/* images */
const imgs = {
  Dzire: new URL("../assets/swift-dzire.jpg", import.meta.url).href,
  Etios: new URL("../assets/etios.jpg", import.meta.url).href,
  Ertiga: new URL("../assets/ertiga.jpg", import.meta.url).href,
  Innova: new URL("../assets/innova.jpg", import.meta.url).href,
  Crysta: new URL("../assets/crysta.jpg", import.meta.url).href,
  Carens: new URL("../assets/kia-carens.jpg", import.meta.url).href,
  Rumion: new URL("../assets/toyota-rumion.jpg", import.meta.url).href,
  Tempo14: new URL("../assets/tempo-14.jpg", import.meta.url).href,
  Tempo18: new URL("../assets/tempo-18.jpg", import.meta.url).href,
  Urbania: new URL("../assets/urbania.jpg", import.meta.url).href,
  Coach: new URL("../assets/coach-21.jpg", import.meta.url).href,
  Bus: new URL("../assets/bus-32.jpg", import.meta.url).href,
};

const vehicles = [
  ["Swift Dzire", "Sedan", "4+1", imgs.Dzire],
  ["Toyota Etios", "Sedan", "4+1", imgs.Etios],
  ["Maruti Ertiga", "SUV", "7+1", imgs.Ertiga],
  ["Toyota Innova", "SUV", "7+1", imgs.Innova],
  ["Innova Crysta", "Premium SUV", "7+1", imgs.Crysta],
  ["Kia Carens", "MPV", "7+1", imgs.Carens],
  ["Toyota Rumion", "MPV", "7+1", imgs.Rumion],
  ["Tempo Traveller", "AC / Non-AC", "14+1", imgs.Tempo14],
  ["Tempo Traveller", "AC", "18+1", imgs.Tempo18],
  ["Force Urbania", "Luxury Van", "12+1 / 16+1", imgs.Urbania],
  ["Coach", "AC", "21 Seater", imgs.Coach],
  ["Sleeper Bus", "AC", "32 Sleeper", imgs.Bus],
];

export default function VehicleTariffCards() {
  return (
    <section className="bg-[#ffffff] py-12">
      <div className="max-w-[1240px] mx-auto px-4">
        <h2 className="text-[28px] md:text-[36px] font-semibold mb-8">
          Car Rental Tariff
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map(([name, cat, seats, img]) => (
            <div key={name as string} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src={img as string} alt={name as string} className="h-[200px] w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  {cat} • {seats}
                </p>
                <button className="w-full bg-[#009387] text-white py-2.5 rounded-xl font-medium">
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
