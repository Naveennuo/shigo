import React from "react";
import { Link } from "react-router-dom";

/* ================== BANNER ================== */
const NilgirisBanner = new URL(
  "../../../assets/tamilnadu/district/nilgiris.jpg",
  import.meta.url
).href;

/* ================== LOCAL IMAGES ================== */
const Mudumalai = new URL(
  "../../../assets/tamilnadu/nilgiris/mudumalai.jpg",
  import.meta.url
).href;

const PykaraWaterfall = new URL(
  "../../../assets/tamilnadu/nilgiris/pykara-waterfall.jpg",
  import.meta.url
).href;

const TeaGardens = new URL(
  "../../../assets/tamilnadu/nilgiris/tea-gardens.png",
  import.meta.url
).href;

const BotanicalGarden = new URL(
  "../../../assets/tamilnadu/nilgiris/botanical-garden.jpg",
  import.meta.url
).href;

const Doddabetta = new URL(
  "../../../assets/tamilnadu/nilgiris/doddabetta.jpg",
  import.meta.url
).href;

const BoatHouse = new URL(
  "../../../assets/tamilnadu/nilgiris/boat-house.jpg",
  import.meta.url
).href;

const AvalancheLake = new URL(
  "../../../assets/tamilnadu/nilgiris/avalanche-lake.jpg",
  import.meta.url
).href;

const RoseGarden = new URL(
  "../../../assets/tamilnadu/nilgiris/rose-garden.jpg",
  import.meta.url
).href;

const KodanadView = new URL(
  "../../../assets/tamilnadu/nilgiris/kodanad-view.jpg",
  import.meta.url
).href;

const ToyTrain = new URL(
  "../../../assets/tamilnadu/nilgiris/toy-train.jpeg",
  import.meta.url
).href;

const LambsRock = new URL(
  "../../../assets/tamilnadu/nilgiris/lambs-rock.jpg",
  import.meta.url
).href;

const PykaraLake = new URL(
  "../../../assets/tamilnadu/nilgiris/pykara-lake.jpg",
  import.meta.url
).href;

const UpperBhavani = new URL(
  "../../../assets/tamilnadu/nilgiris/upper-bhavani.jpg",
  import.meta.url
).href;

const HorticultureGarden = new URL(
  "../../../assets/tamilnadu/nilgiris/horticulture-garden.jpg",
  import.meta.url
).href;

const Coonoor = new URL(
  "../../../assets/tamilnadu/nilgiris/coonoor.jpg",
  import.meta.url
).href;

const Kotagiri = new URL(
  "../../../assets/tamilnadu/nilgiris/kotagiri.jpg",
  import.meta.url
).href;

const ThunderWorld = new URL(
  "../../../assets/tamilnadu/nilgiris/thunder-world.png",
  import.meta.url
).href;

/* ================== DATA ================== */
const topSights = [
  { name: "Mudumalai Tiger reserv Forest", img: Mudumalai },
  { name: "Pykara waterfall", img: PykaraWaterfall },
  { name: "Nilgiris tea Gardens", img: TeaGardens },
  { name: "Botanical garden", img: BotanicalGarden },
  { name: "Doddabetta peak", img: Doddabetta },
  { name: "Boat House", img: BoatHouse },
  { name: "Avalanche lake", img: AvalancheLake },
  { name: "Rose garden", img: RoseGarden },
  { name: "Kodanad view point", img: KodanadView },
  { name: "Nilgiris Toy train", img: ToyTrain },
  { name: "Lamb's Rock", img: LambsRock },
  { name: "Pykara Lake", img: PykaraLake },
  { name: "Upper Bavani reservoir", img: UpperBhavani },
  { name: "Karnataka Horticulture garden", img: HorticultureGarden },
  { name: "Coonoor", img: Coonoor },
  { name: "Kotagiri", img: Kotagiri },
  { name: "Thunder world", img: ThunderWorld },
];

export default function Nilgiris() {
  return (
    <div className="bg-white min-h-screen pt-20">

      {/* ================== BANNER ================== */}
      <div className="relative w-full h-[260px] md:h-[300px] overflow-hidden">
        <img
          src={NilgirisBanner}
          alt="Nilgiris"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            The Nilgiris
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
          Top sights in Nilgiris
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
