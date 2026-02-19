import React from "react";
import { Link } from "react-router-dom";

/* ================== BANNER ================== */
const MahabalipuramBanner = new URL(
  "../../../assets/tamilnadu/district/mahabalipuram.jpg",
  import.meta.url
).href;

/* ================== LOCAL IMAGES ================== */
const ShoreTemple = new URL(
  "../../../assets/tamilnadu/mahabalipuram/shore-temple.jpg",
  import.meta.url
).href;

const FiveRathas = new URL(
  "../../../assets/tamilnadu/mahabalipuram/five-rathas.jpeg",
  import.meta.url
).href;

const KrishnasButterBall = new URL(
  "../../../assets/tamilnadu/mahabalipuram/krishnas-butter-ball.jpg",
  import.meta.url
).href;

const ArjunasPenance = new URL(
  "../../../assets/tamilnadu/mahabalipuram/arjunas-penance.jpg",
  import.meta.url
).href;

const SeashellMuseum = new URL(
  "../../../assets/tamilnadu/mahabalipuram/sea-shell-museum.png",
  import.meta.url
).href;

const MahabalipuramBeach = new URL(
  "../../../assets/tamilnadu/mahabalipuram/mahabalipuram-beach.jpg",
  import.meta.url
).href;

const TigerCave = new URL(
  "../../../assets/tamilnadu/mahabalipuram/tiger-cave.jpg",
  import.meta.url
).href;

const VarahaCave = new URL(
  "../../../assets/tamilnadu/mahabalipuram/varaha-cave.jpg",
  import.meta.url
).href;

const MahishasuraMardiniCave = new URL(
  "../../../assets/tamilnadu/mahabalipuram/mahishasura-mardini-cave.jpg",
  import.meta.url
).href;

const CrocodileBank = new URL(
  "../../../assets/tamilnadu/mahabalipuram/crocodile-bank.png",
  import.meta.url
).href;

const KrishnaMandapam = new URL(
  "../../../assets/tamilnadu/mahabalipuram/krishna-mandapam.webp",
  import.meta.url
).href;

const LightHouse = new URL(
  "../../../assets/tamilnadu/mahabalipuram/light-house.jpg",
  import.meta.url
).href;

/* ================== DATA ================== */
const topSights = [
  { name: "Shore Temple", img: ShoreTemple },
  { name: "Pancha Rathas (Five Rathas)", img: FiveRathas },
  { name: "Krishna's Butter Ball", img: KrishnasButterBall },
  { name: "Arjuna's Penance", img: ArjunasPenance },
  { name: "Sea Shell Museum", img: SeashellMuseum },
  { name: "Mahabalipuram Beach", img: MahabalipuramBeach },
  { name: "Tiger Cave", img: TigerCave },
  { name: "Varaha Cave Temple", img: VarahaCave },
  { name: "Mahishasura Mardini Cave", img: MahishasuraMardiniCave },
  { name: "Madras Crocodile Bank Trust", img: CrocodileBank },
  { name: "Krishna Mandapam", img: KrishnaMandapam },
  { name: "Mahabalipuram Lighthouse", img: LightHouse },
];

export default function Mahabalipuram() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* ================== BANNER ================== */}
      <div className="relative w-full h-[260px] md:h-[300px] overflow-hidden">
        <img
          src={MahabalipuramBanner}
          alt="Mahabalipuram"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Mahabalipuram</h1>

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
          Top sights in Mahabalipuram
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
