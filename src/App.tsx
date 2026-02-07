import React from "react";
import Header from "./sections/Header";
import MainHero from "./sections/MainHero";
import TopSights from "./sections/TopSights";
import WhyShiGO from "./sections/WhyShiGO";
import DealsWeekend from "./sections/ExplorePackages";
import HotelBooking  from "./sections/HotelBooking";
import Cars from "./sections/Cars";
import TicketBooking from "./sections/TicketBooking";
import RatingReviews from "./sections/RatingReviews";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white">
      <div className="w-full">
        <Header />
        <MainHero />
        <TopSights />
        <WhyShiGO />
        <DealsWeekend />
        <HotelBooking />
        <Cars />
        <TicketBooking />
        <RatingReviews />
        <Footer />
      </div>
    </div>
  );
}
