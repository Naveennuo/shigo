import React from "react";
import { Link, useParams } from "react-router-dom";
import { DISTRICTS } from "../../data/tamilnaduDistricts";

export default function DistrictPage() {
  const { districtSlug } = useParams();
  const district = districtSlug ? DISTRICTS[districtSlug] : undefined;

  if (!district) {
    return (
      <div className="min-h-screen bg-white pt-24 px-6">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-2xl font-bold text-[#121316]">
            District not found
          </h1>
          <p className="text-gray-600 mt-2">
            Add this district inside <b>src/data/tamilnaduDistricts.ts</b>
          </p>

          <Link
            to="/tamilnadu"
            className="inline-flex mt-6 px-6 py-2 bg-black text-white rounded-full text-sm font-semibold hover:opacity-90 transition"
          >
            ← Tamil Nadu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* ================== BANNER ================== */}
      <div className="relative w-full h-[260px] md:h-[300px] overflow-hidden">
        <img
          src={district.banner}
          alt={district.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold">{district.title}</h1>

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
          Top sights in {district.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {district.sights.map((place, index) => (
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