import React from "react";
import { Link } from "react-router-dom";

/* ================== BANNER ================== */
const CoimbatoreBanner = new URL(
  "../../../assets/tamilnadu/district/coimbatore.jpg",
  import.meta.url
).href;

/* ================== LOCAL IMAGES ================== */
const GedeeMuseum = new URL(
  "../../../assets/tamilnadu/coimbatore/gedee-museum.jpg",
  import.meta.url
).href;

const MaruthamalaiTemple = new URL(
  "../../../assets/tamilnadu/coimbatore/maruthamalai.jpg",
  import.meta.url
).href;

const Adiyogi = new URL(
  "../../../assets/tamilnadu/coimbatore/adiyogi.jpg",
  import.meta.url
).href;

const DhyanaLingam = new URL(
  "../../../assets/tamilnadu/coimbatore/dhyana-lingam.jpg",
  import.meta.url
).href;

const MonkeyFalls = new URL(
  "../../../assets/tamilnadu/coimbatore/monkey-falls.jpg",
  import.meta.url
).href;

const SiruvaniFalls = new URL(
  "../../../assets/tamilnadu/coimbatore/siruvani.png",
  import.meta.url
).href;

const BlackThunder = new URL(
  "../../../assets/tamilnadu/coimbatore/black-thunder.jpg",
  import.meta.url
).href;

const FunRepublic = new URL(
  "../../../assets/tamilnadu/coimbatore/fun-republic.png",
  import.meta.url
).href;

const KovaiKutralam = new URL(
  "../../../assets/tamilnadu/coimbatore/kovai-kutralam.jpg",
  import.meta.url
).href;

const Velliangiri = new URL(
  "../../../assets/tamilnadu/coimbatore/velliangiri.webp",
  import.meta.url
).href;

const PalakkadFort = new URL(
  "../../../assets/tamilnadu/coimbatore/palakkad-fort.jpg",
  import.meta.url
).href;

const KodiveriDam = new URL(
  "../../../assets/tamilnadu/coimbatore/kodiveri-dam.jpg",
  import.meta.url
).href;

/* ================== DATA ================== */
const topSights = [
  { name: "Gedee Car Museum", img: GedeeMuseum },
  { name: "Maruthamalai Temple", img: MaruthamalaiTemple },
  { name: "Adiyogi", img: Adiyogi },
  { name: "Dhyana Lingam", img: DhyanaLingam },
  { name: "Monkey Falls", img: MonkeyFalls },
  { name: "Siruvani Waterfalls", img: SiruvaniFalls },
  { name: "Black Thunder Theme Park", img: BlackThunder },
  { name: "Fun Republic Mall", img: FunRepublic },
  { name: "Kovai Kutralam", img: KovaiKutralam },
  { name: "Velliangiri Hills", img: Velliangiri },
  { name: "Palakkad Fort", img: PalakkadFort },
  { name: "Kodiveri Dam", img: KodiveriDam },
];

export default function Coimbatore() {
  return (
    <div className="bg-white min-h-screen pt-20">

      {/* ================== BANNER ================== */}
      <div className="relative w-full h-[260px] md:h-[300px] overflow-hidden">
        <img
          src={CoimbatoreBanner}
          alt="Coimbatore"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Coimbatore
          </h1>

          <Link
            to="/tamilnadu"
            className="mt-6 px-6 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition"
          >
            ← Tamil Nadu
          </Link>
        </div>
      </div>

      {/* ================== GRID ================== */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#121316] mb-10">
          Top sights in Coimbatore
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topSights.map((place, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 bg-white"
            >
              <div className="h-[220px] overflow-hidden">
                <img
                  src={place.img}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="py-5 text-center">
                <h3 className="text-md font-semibold text-[#121316]">
                  {place.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
