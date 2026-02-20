import React from "react";
import { Link } from "react-router-dom";

/* ================== BANNER ================== */
const KodaikanalBanner = new URL(
  "../../../assets/tamilnadu/district/kodaikanal.jpg",
  import.meta.url
).href;

/* ================== LOCAL IMAGES ================== */
// NOTE: Add these images in your assets folder with same names (or rename here)
const DamDamParai = new URL(
  "../../../assets/tamilnadu/kodaikanal/dam-dam-parai.jpg",
  import.meta.url
).href;

const ManjalaruDamViewPoint = new URL(
  "../../../assets/tamilnadu/kodaikanal/manjalaru-dam-view-point.jpg",
  import.meta.url
).href;

const SilverCascadeFalls = new URL(
  "../../../assets/tamilnadu/kodaikanal/silver-cascade-falls.jpg",
  import.meta.url
).href;

const StarLake = new URL(
  "../../../assets/tamilnadu/kodaikanal/star-lake.webp",
  import.meta.url
).href;

const HorrorHouse = new URL(
  "../../../assets/tamilnadu/kodaikanal/horror-house.webp",
  import.meta.url
).href;

const Cycling = new URL(
  "../../../assets/tamilnadu/kodaikanal/cycling.webp",
  import.meta.url
).href;

const HorseRiding = new URL(
  "../../../assets/tamilnadu/kodaikanal/horse-riding.jpg",
  import.meta.url
).href;

const BoatHouse = new URL(
  "../../../assets/tamilnadu/kodaikanal/boat-house.webp",
  import.meta.url
).href;

const BryantPark = new URL(
  "../../../assets/tamilnadu/kodaikanal/bryant-park.jpg",
  import.meta.url
).href;

const CoakersWalk = new URL(
  "../../../assets/tamilnadu/kodaikanal/coakers-walk.jpg",
  import.meta.url
).href;

const UpperLakeViewPoint = new URL(
  "../../../assets/tamilnadu/kodaikanal/upper-lake-view-point.jpg",
  import.meta.url
).href;

const LirilFalls = new URL(
  "../../../assets/tamilnadu/kodaikanal/liril-falls.jpg",
  import.meta.url
).href;

const GreenValleyViewPoint = new URL(
  "../../../assets/tamilnadu/kodaikanal/green-valley-view-point.jpg",
  import.meta.url
).href;

const GolfClub = new URL(
  "../../../assets/tamilnadu/kodaikanal/golf-club.jpg",
  import.meta.url
).href;

const PillarRock = new URL(
  "../../../assets/tamilnadu/kodaikanal/pillar-rock.jpg",
  import.meta.url
).href;

const GunaCave = new URL(
  "../../../assets/tamilnadu/kodaikanal/guna-cave.jpg",
  import.meta.url
).href;

const PineForest = new URL(
  "../../../assets/tamilnadu/kodaikanal/pine-forest.jpg",
  import.meta.url
).href;

const MoirPoint = new URL(
  "../../../assets/tamilnadu/kodaikanal/moir-point.jpg",
  import.meta.url
).href;

const DolphinNose = new URL(
  "../../../assets/tamilnadu/kodaikanal/dolphin-nose.jpg",
  import.meta.url
).href;

const RoseGarden = new URL(
  "../../../assets/tamilnadu/kodaikanal/rose-garden.jpg",
  import.meta.url
).href;

const PoombaraiVillage = new URL(
  "../../../assets/tamilnadu/kodaikanal/poombarai-village.jpg",
  import.meta.url
).href;

const KulanthaiVelapparTemple = new URL(
  "../../../assets/tamilnadu/kodaikanal/kulanthai-velappar-temple.jpg",
  import.meta.url
).href;

const Mannavanoor = new URL(
  "../../../assets/tamilnadu/kodaikanal/mannavanoor.jpeg",
  import.meta.url
).href;

const ChettiarPark = new URL(
  "../../../assets/tamilnadu/kodaikanal/chettiar-park.jpg",
  import.meta.url
).href;

const KurinjiAndavarTemple = new URL(
  "../../../assets/tamilnadu/kodaikanal/kurinji-andavar-temple.png",
  import.meta.url
).href;

/* ================== DATA ================== */
const topSights = [
  { name: "Dam Dam Parai", img: DamDamParai },
  { name: "Manjalaru Dam View Point", img: ManjalaruDamViewPoint },
  { name: "Silver Cascade Falls", img: SilverCascadeFalls },
  { name: "Star Lake", img: StarLake },
  { name: "Horror House", img: HorrorHouse },
  { name: "Cycling", img: Cycling },
  { name: "Horse Riding", img: HorseRiding },
  { name: "Boat House", img: BoatHouse },
  { name: "Bryant Park", img: BryantPark },
  { name: "Coaker’s Walk", img: CoakersWalk },
  { name: "Upper Lake View Point", img: UpperLakeViewPoint },
  { name: "Liril Falls", img: LirilFalls },
  { name: "Green Valley View Point", img: GreenValleyViewPoint },
  { name: "Golf Club", img: GolfClub },
  { name: "Pillar Rock", img: PillarRock },
  { name: "Guna Cave", img: GunaCave },
  { name: "Pine Forest", img: PineForest },
  { name: "Moir Point", img: MoirPoint },
  { name: "Dolphin Nose", img: DolphinNose },
  { name: "Rose Garden", img: RoseGarden },
  { name: "Poombarai Village", img: PoombaraiVillage },
  { name: "Kulanthai Velappar Temple", img: KulanthaiVelapparTemple },
  { name: "Mannavanoor", img: Mannavanoor },
  { name: "Chettiar Park", img: ChettiarPark },
  { name: "Kurinji Andavar Temple", img: KurinjiAndavarTemple },
];

export default function Kodaikanal() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* ================== BANNER ================== */}
      <div className="relative w-full h-[260px] md:h-[300px] overflow-hidden">
        <img
          src={KodaikanalBanner}
          alt="Kodaikanal"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Kodaikanal</h1>

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
          Top sights in Kodaikanal
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