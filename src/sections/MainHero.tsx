import React, { useEffect, useState } from "react";

/* Assets */
const heroImages = [
  new URL("../assets/HeroBanner1.jpg", import.meta.url).href,
  new URL("../assets/HeroBanner2.jpg", import.meta.url).href,
  new URL("../assets/HeroBanner3.jpg", import.meta.url).href,
];
const shigoLogo = new URL("../assets/ShiGOlogo.svg", import.meta.url).href;
const phoneIcon = new URL("../assets/phone.svg", import.meta.url).href;
const mailIcon = new URL("../assets/mail.svg", import.meta.url).href;
const whatsappIcon = new URL("../assets/whatsapp.svg", import.meta.url).href;

const navItems = ["India", "International", "Luxury", "Car Rental", "Contact"];

const MainHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const phoneNumber = "+91 9 52 552 5552";
  const phoneHref = "tel:+919525525552";
  const email = "shigoelitetourism@gmail.com";
  const emailHref = "mailto:shigoelitetourism@gmail.com";

  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] md:h-[730px] overflow-hidden rounded-b-[28px]">
      {/* Hero Slider */}
      {heroImages.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Hero"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-40">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 px-4 sm:px-6 md:px-10 bg-[#000721]/70 backdrop-blur-sm">
          {/* Logo */}
          <img src={shigoLogo} alt="ShiGO Logo" className="h-10 sm:h-12 md:h-14" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-[#ffff] text-[16px] font-medium">
            {navItems.map((item) => (
              <span
                key={item}
                className="cursor-pointer hover:text-[#0092fb] transition"
              >
                {item}
              </span>
            ))}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden md:flex items-center gap-4 bg-[#ffffff] px-4 py-2 rounded-full text-sm font-semibold text-[#003a64] text-[16px] hover:bg-[#ffffff]/50 transition-all">
            <a
              href={phoneHref}
              className="flex items-center gap-2 hover:scale-105 transition"
            >
              <img src={phoneIcon} className="w-4 h-4" />
              {phoneNumber}
            </a>
            <a
              href={emailHref}
              className="flex items-center gap-2 hover:scale-105 transition"
            >
              <img src={mailIcon} className="w-4 h-4" />
              {email}
            </a>
          </div>

          {/* Hamburger for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-7 h-6 flex flex-col justify-between items-center"
          >
            <span
              className={`block h-[2px] w-full bg-[#383e48] transform transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-[#383e48] transform transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-[#383e48] transform transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Contact below header */}
        <div className="md:hidden flex justify-center gap-6 bg-white/80 backdrop-blur-sm py-2">
  <a href={phoneHref} className="flex items-center gap-2 text-[#003a64] font-semibold hover:scale-105 transition">
    <img src={phoneIcon} className="w-5 h-5" />
    {phoneNumber}
  </a>
  <a href={emailHref} className="flex items-center gap-2 text-[#003a64] font-semibold hover:scale-105 transition">
    <img src={mailIcon} className="w-5 h-5" />
    {email}
  </a>
</div>

        {/* Mobile Backdrop */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white z-40 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-6 text-[#383e48] font-medium mt-0">
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-2xl font-bold"
            >
              &times;
            </button>

            {navItems.map((item) => (
              <span
                key={item}
                onClick={() => setMenuOpen(false)}
                className="text-lg cursor-pointer hover:text-[#0092fb] transition"
              >
                {item}
              </span>
            ))}

            <div className="h-px bg-gray-200 my-2" />

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/919525525552"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:translate-x-1 transition"
            >
              <img src={whatsappIcon} className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Travel more!, Spend less!
        </h1>
        <p className="text-white mt-4 text-lg sm:text-xl md:text-2xl max-w-[640px]">
          Find unique stays across hotels, villas, and more.
        </p>
        <button className="bg-[#0092fb] hover:bg-[#007ad1] transition text-white px-8 py-3 rounded-xl text-lg mt-8">
          Explore Now
        </button>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, i) => (
          <span
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === currentSlide ? "w-5 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default MainHero;
