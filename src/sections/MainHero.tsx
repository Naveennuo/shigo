import React, { useEffect, useState } from "react";

/* Assets */
const heroImages = [
  new URL("../assets/HeroBanner1.jpg", import.meta.url).href,
  new URL("../assets/HeroBanner2.jpg", import.meta.url).href,
  new URL("../assets/HeroBanner3.jpg", import.meta.url).href,
];

const shigoLogo = new URL("../assets/ShiGOlogo.svg", import.meta.url).href;

const MainHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // 4s slide change

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] md:h-[730px] overflow-hidden rounded-b-[28px]">
      
      {/* Slider Images */}
      {heroImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Hero Banner"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 
          ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-20">
        <div className="w-full flex items-center justify-between h-16 sm:h-20 md:h-24 px-4 sm:px-6 md:px-20 bg-white/80 backdrop-blur-sm rounded-b-xl">
          <img
            src={shigoLogo}
            alt="ShiGO Logo"
            className="h-9 sm:h-11 md:h-14 w-auto"
          />

          <nav className="hidden md:flex gap-8 text-[#383e48] lg:text-base">
            <span className="border-b-2 border-[#0184eb] pb-1 cursor-pointer">
              India
            </span>
            <span className="cursor-pointer">International</span>
            <span className="cursor-pointer">Luxury</span>
            <span className="cursor-pointer">Car Rental</span>
            <span className="cursor-pointer">Contact</span>
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
          Travel more!, Spend less!
        </h1>

        <p className="text-white mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-[95%] sm:max-w-[600px]">
          Find unique stays across hotels, villas, and more.
        </p>

        <button className="bg-[#0092fb] hover:bg-[#007ad1] transition-colors text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base md:text-lg mt-6">
          Explore Now
        </button>
      </div>

      {/* Mobile Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-all 
            ${index === currentSlide ? "bg-white w-5" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MainHero;
