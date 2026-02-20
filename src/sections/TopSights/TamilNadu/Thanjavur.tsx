import React from "react";
import { Link } from "react-router-dom";

/* ================== BANNER ================== */
const ThanjavurBanner = new URL(
  "../../../assets/tamilnadu/district/thanjavur.jpg",
  import.meta.url
).href;

/* ================== LOCAL IMAGES ================== */
const BrihadeeswaraTemple = new URL(
  "../../../assets/tamilnadu/thanjavur/brihadeeswara-temple.png",
  import.meta.url
).href;

const MarathaPalace = new URL(
  "../../../assets/tamilnadu/thanjavur/maratha-palace.webp",
  import.meta.url
).href;

const SaraswathiMahal = new URL(
  "../../../assets/tamilnadu/thanjavur/saraswathi-mahal-library.jpg",
  import.meta.url
).href;

const PunnainallurMariamman = new URL(
  "../../../assets/tamilnadu/thanjavur/punnainallur-mariamman.webp",
  import.meta.url
).href;

const RajarajaChola = new URL(
  "../../../assets/tamilnadu/thanjavur/rajaraja-chola-manimandapam.jpg",
  import.meta.url
).href;

const ArtGallery = new URL(
  "../../../assets/tamilnadu/thanjavur/art-gallery.webp",
  import.meta.url
).href;

const PoondiMadha = new URL(
  "../../../assets/tamilnadu/thanjavur/poondi-madha-church.jpg",
  import.meta.url
).href;

/* ================== DATA ================== */
const topSights = [
  { name: "Sri Brihadeeswara Temple", img: BrihadeeswaraTemple },
  { name: "Thanjavur Maratha Palace", img: MarathaPalace },
  { name: "Saraswathi Mahal Library", img: SaraswathiMahal },
  { name: "Punnainallur Mariamman Temple", img: PunnainallurMariamman },
  { name: "Rajaraja Chola Manimandapam", img: RajarajaChola },
  { name: "Thanjavur Art Gallery", img: ArtGallery },
  { name: "Poondi Madha Church", img: PoondiMadha },
];

export default function Thanjavur() {
  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* ================== BANNER ================== */}
      <div className="relative w-full h-[260px] md:h-[300px] overflow-hidden">
        <img
          src={ThanjavurBanner}
          alt="Thanjavur"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Thanjavur
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
          Top sights in Thanjavur
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
