import { useParams } from "react-router-dom";

const DistrictPage = () => {
  const { districtName } = useParams();

  const formattedName =
    districtName?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="w-full min-h-screen bg-white">

      {/* Small Banner */}
      <div className="bg-[#003499] py-10 text-center text-white">
        <h1 className="text-3xl font-semibold">{formattedName}</h1>
      </div>

      {/* Content Area */}
      <div className="max-w-[1200px] mx-auto py-16">
        <p className="text-lg">
          Welcome to {formattedName}. Explore tours, attractions, and experiences here.
        </p>
      </div>
    </div>
  );
};

export default DistrictPage;
