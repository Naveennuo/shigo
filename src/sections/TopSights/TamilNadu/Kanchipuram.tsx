import React from "react";
import { Link } from "react-router-dom";

/* ================== BANNER ================== */
const KanchipuramBanner = new URL(
  "../../../assets/tamilnadu/district/kanchipuram.jpg",
  import.meta.url
).href;

/* ================== LOCAL IMAGES ================== */
const KamakshiTemple = new URL(
  "../../../assets/tamilnadu/kanchipuram/kamakshi-temple.jpg",
  import.meta.url
).href;

const EkambaranatharTemple = new URL(
  "../../../assets/tamilnadu/kanchipuram/ekambaranathar-temple.jpg",
  import.meta.url
).href;

const ChitraguptaTemple = new URL(
  "../../../assets/tamilnadu/kanchipuram/chitragupta-temple.jpg",
  import.meta.url
).href;

const KailasanathaTemple = new URL(
  "../../../assets/tamilnadu/kanchipuram/kailasanatha-temple.jpg",
  import.meta.url
).href;

const UlagalandaPerumal = new URL(
  "../../../assets/tamilnadu/kanchipuram/ulagalanda-perumal.jpg",
  import.meta.url
).href;

const VaradharajaPerumal = new URL(
  "../../../assets/tamilnadu/kanchipuram/varadharaja-perumal.jpg",
  import.meta.url
).href;

const Vedanthangal = new URL(
  "../../../assets/tamilnadu/kanchipuram/vedanthangal.jpg",
  import.meta.url
).href;

/* ================== DATA ================== */
const topSights = [
  { name: "Sri Kanchi Kamakshi Amman Temple", img: KamakshiTemple },
  { name: "Ekambaranathar Temple", img: EkambaranatharTemple },
  { name: "Shri Chitragupta Swamy Temple", img: ChitraguptaTemple },
  { name: "Kailasanatha Temple", img: KailasanathaTemple },
  { name: "Sri Ulagalanda Perumal Devasthanam", img: UlagalandaPerumal },
  { name: "Sri Varadharaja Perumal Temple", img: VaradharajaPerumal },
  { name: "Vedanthangal Birds Sanctuary", img: Vedanthangal },
];

export default function Kanchipuram() {
  return (
    <div className="bg-white min-h-screen pt-20">

      {/* ================== BANNER ================== */}
      <div className="relative w-full h-[260px] md:h-[300px] overflow-hidden">
        <img
          src={KanchipuramBanner}
          alt="Kanchipuram"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Kanchipuram
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
          Top sights in Kanchipuram
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
