/* ===========================
   ✅ TamilNadu.tsx (FULL)
   - Uses slug so Nilgiris routes to /tamilnadu/nilgiris
   =========================== */
import React from "react";
import { Link } from "react-router-dom";

/* ================== BANNER ================== */
const Banner = new URL("../../../assets/Tamilnadu.jpg", import.meta.url).href;

/* ================== DISTRICT IMAGES ================== */
const Nilgiris = new URL("../../../assets/tamilnadu/nilgiris.jpg", import.meta.url).href;
const Kanchipuram = new URL("../../../assets/tamilnadu/kanchipuram.jpg", import.meta.url).href;
const Coimbatore = new URL("../../../assets/tamilnadu/coimbatore.jpg", import.meta.url).href;
const Chennai = new URL("../../../assets/tamilnadu/chennai.jpg", import.meta.url).href;
const Thanjavur = new URL("../../../assets/tamilnadu/thanjavur.jpg", import.meta.url).href;
const Dindigul = new URL("../../../assets/tamilnadu/dindigul.jpg", import.meta.url).href;
const Trichy = new URL("../../../assets/tamilnadu/trichy.jpg", import.meta.url).href;
const Thiruvannamalai = new URL("../../../assets/tamilnadu/thiruvannamalai.jpg", import.meta.url).href;
const Tenkasi = new URL("../../../assets/tamilnadu/tenkasi.jpg", import.meta.url).href;
const Theni = new URL("../../../assets/tamilnadu/theni.jpg", import.meta.url).href;
const Kanyakumari = new URL("../../../assets/tamilnadu/kanyakumari.jpg", import.meta.url).href;
const Namakkal = new URL("../../../assets/tamilnadu/namakkal.jpg", import.meta.url).href;
const Salem = new URL("../../../assets/tamilnadu/salem.jpg", import.meta.url).href;
const Madurai = new URL("../../../assets/tamilnadu/madurai.jpg", import.meta.url).href;
const Ramanathapuram = new URL("../../../assets/tamilnadu/ramanathapuram.jpg", import.meta.url).href;
const Vellore = new URL("../../../assets/tamilnadu/vellore.jpg", import.meta.url).href;

/* ================== DATA (WITH SLUG) ================== */
const districts = [
  { name: "The Nilgiris", slug: "nilgiris", img: Nilgiris },
  { name: "Kanchipuram", slug: "kanchipuram", img: Kanchipuram },
  { name: "Coimbatore", slug: "coimbatore", img: Coimbatore },
  { name: "Chennai", slug: "chennai", img: Chennai },
  { name: "Thanjavur", slug: "thanjavur", img: Thanjavur },
  { name: "Dindigul", slug: "dindigul", img: Dindigul },
  { name: "Trichy", slug: "trichy", img: Trichy },
  { name: "Thiruvannamalai", slug: "thiruvannamalai", img: Thiruvannamalai },
  { name: "Tenkasi", slug: "tenkasi", img: Tenkasi },
  { name: "Theni", slug: "theni", img: Theni },
  { name: "Kanyakumari", slug: "kanyakumari", img: Kanyakumari },
  { name: "Namakkal", slug: "namakkal", img: Namakkal },
  { name: "Salem", slug: "salem", img: Salem },
  { name: "Madurai", slug: "madurai", img: Madurai },
  { name: "Ramanathapuram", slug: "ramanathapuram", img: Ramanathapuram },
  { name: "Vellore", slug: "vellore", img: Vellore },
];

export default function TamilNadu() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* ================== HERO BANNER ================== */}
      <div className="relative w-full h-[360px] md:h-[360px] overflow-hidden">
        <img
          src={Banner}
          alt="Tamil Nadu"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">Tamil Nadu</h1>
          <p className="mt-5 text-lg md:text-xl max-w-3xl">
            Discover temples, misty hills, beaches, heritage cities and timeless culture.
          </p>
        </div>
      </div>

      {/* ================== DISTRICT GRID ================== */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {districts.map((district, index) => (
            <Link key={index} to={`/tamilnadu/${district.slug}`} className="group">
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 bg-white">
                <div className="h-[240px] overflow-hidden">
                  <img
                    src={district.img}
                    alt={district.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="py-5 text-center">
                  <h3 className="text-lg font-semibold text-[#121316]">{district.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
