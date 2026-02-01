const keralaImg = new URL("../assets/TopShights1.png", import.meta.url).href;

const deals = [
  {
    id: 1,
    title: "Kerala Tour",
    location: "India",
    rating: "4.0",
    label: "Very Good",
    reviews: "160 reviews",
    image: keralaImg,
  },
  {
    id: 2,
    title: "Kerala Tour",
    location: "India",
    rating: "4.0",
    label: "Very Good",
    reviews: "160 reviews",
    image: keralaImg,
  },
  {
    id: 3,
    title: "Kerala Tour",
    location: "India",
    rating: "4.0",
    label: "Very Good",
    reviews: "160 reviews",
    image: keralaImg,
  },
  {
    id: 4,
    title: "Kerala Tour",
    location: "India",
    rating: "4.0",
    label: "Very Good",
    reviews: "160 reviews",
    image: keralaImg,
  },
];

const DealsWeekend = () => {
  return (
    <section className="bg-[#f3f4f6] py-16">
      <div className="max-w-[1232px] mx-auto px-4">
        {/* Header */}
        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#121316] mb-8">
          Deals for the Weekend
        </h2>

        {/* Cards Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-6
        ">
          {deals.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[200px] w-full object-cover rounded-t-xl"
              />

              <div className="p-4">
                <p className="text-sm font-semibold text-blue-600 flex items-center gap-1">
                  {item.rating}
                  <span className="text-gray-500 font-normal">
                    {item.label} {item.reviews}
                  </span>
                </p>

                <p className="text-lg font-semibold text-[#121316] mt-1">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500">{item.location}</p>

                <button className="mt-4 w-full bg-[#0092FB] text-white py-2 rounded-lg font-medium hover:bg-[#007ad6] transition">
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsWeekend;
