import React from "react";
import { Link } from "react-router-dom";

/* ================== BANNER ================== */
const TrichyBanner = new URL(
  "../../../assets/tamilnadu/district/trichy.jpg",
  import.meta.url
).href;

/* ================== LOCAL IMAGES ================== */
const SrirangamTemple = new URL(
  "../../../assets/tamilnadu/trichy/srirangam-temple.jpg",
  import.meta.url
).href;

const JambukeswararTemple = new URL(
  "../../../assets/tamilnadu/trichy/jambukeswarar-temple.jpg",
  import.meta.url
).href;

const RockFortTemple = new URL(
  "../../../assets/tamilnadu/trichy/rock-fort-temple.webp",
  import.meta.url
).href;

const SamayapuramTemple = new URL(
  "../../../assets/tamilnadu/trichy/samayapuram-temple.jpg",
  import.meta.url
).href;

const KallanaiDam = new URL(
  "../../../assets/tamilnadu/trichy/kallanai-dam.jpg",
  import.meta.url
).href;

const ViralimalaiMuruganTemple = new URL(
  "../../../assets/tamilnadu/trichy/viralimalai-murugan-temple.webp",
  import.meta.url
).href;

const AagayaGangaiWaterFalls = new URL(
  "../../../assets/tamilnadu/trichy/aagaya-gangai-waterfalls.jpg",
  import.meta.url
).href;

/* ================== DATA ================== */
const topSights = [
  { name: "Srirangam Temple", img: SrirangamTemple },
  { name: "Jambukeswarar Temple", img: JambukeswararTemple },
  { name: "Rockfort Temple", img: RockFortTemple },
  { name: "Samayapuram Temple", img: SamayapuramTemple },
  { name: "Kallanai Dam", img: KallanaiDam },
  { name: "Viralimalai Murugan Temple", img: ViralimalaiMuruganTemple },
  { name: "Aagaya Gangai Waterfalls", img: AagayaGangaiWaterFalls },
];

export default function Trichy() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* ================== BANNER ================== */}
      <div className="relative w-full h-[260px] md:h-[300px] overflow-hidden">
        <img
          src={TrichyBanner}
          alt="Trichy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Tiruchirappalli (Trichy)
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
          Top sights in Trichy
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