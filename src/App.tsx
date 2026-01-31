import React from "react";
import MainHero from "./sections/MainHero";
import TopSights from "./sections/TopSights";
import WhyShiGO from "./sections/WhyShiGO";

export default function App() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white">
      <div className="w-full">
        <MainHero />
        <TopSights />
        <WhyShiGO />
      </div>
    </div>
  );
}
