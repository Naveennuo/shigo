import React from "react";

/* ---------- Assets ---------- */
const heroImg = new URL("../assets/HeroBanner1.png", import.meta.url).href;
const shigoLogo = new URL("../assets/ShiGOlogo.svg", import.meta.url).href;

/* ---------- Small Reusable UI ---------- */

const NavItem = ({ label, active }) => (
  <span
    className={`text-[20px] cursor-pointer pb-1 ${
      active ? "border-b-2 border-[#0184eb]" : ""
    }`}
  >
    {label}
  </span>
);

const Button = ({ children }) => (
  <button className="bg-[#0092fb] px-6 py-3 rounded-xl text-[22px] text-white hover:bg-[#007ad1] transition">
    {children}
  </button>
);

/* ---------- Header ---------- */

const Header = () => (
  <header className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[96px] bg-white shadow-md flex items-center px-24 z-10">
    <div className="flex justify-between w-full items-center">
      
      {/* Logo */}
      <img
        src={shigoLogo}
        alt="ShiGO Logo"
        className="h-[54px] w-auto"
      />

      {/* Navigation */}
      <nav className="flex gap-12 text-[#383e48]">
        <NavItem label="India" active />
        <NavItem label="International" />
        <NavItem label="Luxury" />
        <NavItem label="Car Rental" />
        <NavItem label="Contact" />
      </nav>
    </div>
  </header>
);

/* ---------- Hero Title ---------- */

const HeroTitle = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-6">
    <h1 className="text-[64px] font-semibold leading-tight">
      Travel more!, Spend less!
    </h1>
    <p className="text-[26px] max-w-[700px]">
      Find unique stays across hotels, villas, and more.
    </p>
    <Button>Explore Now</Button>
  </div>
);

/* ---------- Main Hero ---------- */

export default function MainHero() {
  return (
    <section className="relative h-[730px] w-[1440px] rounded-b-[32px] overflow-hidden">
      
      {/* Background */}
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(0,52,153,0.35)]" />

      {/* Content */}
      <Header />
      <HeroTitle />
    </section>
  );
}
