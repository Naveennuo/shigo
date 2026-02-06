import { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

const logo = new URL("../assets/ShiGOlogo.svg", import.meta.url).href;
const nav = ["India", "International", "Luxury", "Car Rental", "Contact"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-40">
      <div className="flex items-center justify-between h-16 md:h-24 px-4 md:px-10 bg-[#000721]/70 backdrop-blur">
        {/* Logo */}
        <img src={logo} alt="ShiGO" className="h-12" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          {nav.map((n) => (
            <span key={n} className="cursor-pointer hover:text-[#0092fb]">
              {n}
            </span>
          ))}
        </nav>

        {/* Desktop Contact */}
        <div className="hidden md:flex gap-4 bg-white px-4 py-2 rounded-full text-[#003a64] text-sm font-semibold">
          <a href="tel:+919525525552" className="flex items-center gap-2">
            <Phone size={16} className="text-[#0092fb]" />
            +91 9 52 552 5552
          </a>
          <a
            href="mailto:shigoelitetourism@gmail.com"
            className="flex items-center gap-2"
          >
            <Mail size={16} className="text-[#0092fb]" />
            shigoelitetourism@gmail.com
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[80%] bg-white p-6 transition ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {nav.map((n) => (
          <p
            key={n}
            className="py-3 text-lg cursor-pointer"
            onClick={() => setOpen(false)}
          >
            {n}
          </p>
        ))}
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
