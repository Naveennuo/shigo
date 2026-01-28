import MainHero from "@/imports/MainHero";
import TopSightsToSeeSection from "@/imports/TopSightsToSeeSection";
import WhyTriptoSection from "@/imports/WhyTriptoSection";

export default function App() {
  return (
    <div className="bg-white flex flex-col items-center min-h-screen w-full">
      <div className="max-w-[1440px] w-full">
        <MainHero />
      </div>
      <div className="flex flex-col gap-16 items-center py-16 w-full max-w-[1440px] px-4">
        <TopSightsToSeeSection />
        <WhyTriptoSection />
      </div>
    </div>
  );
}
