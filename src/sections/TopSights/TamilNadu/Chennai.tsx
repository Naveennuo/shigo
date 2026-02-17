import React from "react";
import { Link } from "react-router-dom";

/* ================== BANNER ================== */
const ChennaiBanner = new URL(
  "../../../assets/tamilnadu/district/chennai.jpg",
  import.meta.url
).href;

/* ================== LOCAL IMAGES ================== */
const Kapaleeshwarar = new URL(
  "../../../assets/tamilnadu/chennai/kapaleeshwarar.webp",
  import.meta.url
).href;

const Santhome = new URL(
  "../../../assets/tamilnadu/chennai/santhome.webp",
  import.meta.url
).href;

const Parthasarathy = new URL(
  "../../../assets/tamilnadu/chennai/parthasarathy.jpg",
  import.meta.url
).href;

const Vadapalani = new URL(
  "../../../assets/tamilnadu/chennai/vadapalani.jpg",
  import.meta.url
).href;

const GovtMuseum = new URL(
  "../../../assets/tamilnadu/chennai/government-museum.jpg",
  import.meta.url
).href;

const FortMuseum = new URL(
  "../../../assets/tamilnadu/chennai/fort-st-george.jpg",
  import.meta.url
).href;

const Marina = new URL(
  "../../../assets/tamilnadu/chennai/marina-beach.jpg",
  import.meta.url
).href;

const Semmozhi = new URL(
  "../../../assets/tamilnadu/chennai/semmozhi-park.jpg",
  import.meta.url
).href;

const ExpressAvenue = new URL(
  "../../../assets/tamilnadu/chennai/express-avenue.jpg",
  import.meta.url
).href;

const TNagar = new URL(
  "../../../assets/tamilnadu/chennai/t-nagar.jpg",
  import.meta.url
).href;

const MGM = new URL(
  "../../../assets/tamilnadu/chennai/mgm-dizzee-world.jpg",
  import.meta.url
).href;

/* ================== DATA ================== */
const topSights = [
  { name: "Kapaleeshwarar Temple", img: Kapaleeshwarar },
  { name: "Santhome Cathedral Basilica", img: Santhome },
  { name: "Sri Parthasarathy Temple", img: Parthasarathy },
  { name: "Vadapalani Murugan Temple", img: Vadapalani },
  { name: "Government Museum", img: GovtMuseum },
  { name: "Fort St. George Museum", img: FortMuseum },
  { name: "Marina Beach", img: Marina },
  { name: "Semmozhi Park", img: Semmozhi },
  { name: "Express Avenue Mall", img: ExpressAvenue },
  { name: "T. Nagar Shopping", img: TNagar },
  { name: "MGM Dizzee World", img: MGM },
];

export default function Chennai() {
  return (
    <div className="bg-white min-h-screen pt-20">

      {/* ================== BANNER ================== */}
      <div className="relative w-full h-[260px] md:h-[300px] overflow-hidden">
        <img
          src={ChennaiBanner}
          alt="Chennai"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Chennai
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
          Top sights in Chennai
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
