import React from "react";

const reviews = [
  ["Arun Kumar", "Bangalore", 5, "The booking process was extremely smooth and hassle-free. The driver arrived on time, the car was clean, and the entire journey felt comfortable and safe."],
  ["Priya Sharma", "Chennai", 4, "Transparent pricing with no hidden charges. Customer support was responsive and helpful throughout the trip planning process."],
  ["Rahul Menon", "Kochi", 5, "We booked a vehicle for a long-distance family trip. The driver was polite, experienced, and ensured a very smooth journey."],
  ["Sneha Patel", "Ahmedabad", 4, "Clean vehicle, comfortable seating, and punctual service. Booking confirmation was instant which made planning very easy."],
  ["Vijay Raj", "Hyderabad", 5, "Professional service with well-maintained cars. Pricing felt fair and the experience was stress-free from start to end."],
  ["Anitha Joseph", "Trivandrum", 4, "Reliable service and courteous staff. Even when we had a small change in plans, the support team handled it quickly."],
];

export default function RatingReviews() {
  return (
    <section className="bg-[#f3f4f6] py-16">
      <div className="max-w-[1232px] mx-auto px-4">
        <h2 className="text-[32px] md:text-[40px] font-semibold mb-10">
          Ratings & Reviews
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(([name, city, rating, text], i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex gap-1 text-yellow-400 text-[22px] leading-none">
                {[...Array(5)].map((_, j) => (
  <span key={j}>{j < Number(rating) ? "★" : "☆"}</span>
))}
              </div>

              <p className="text-[15px] leading-relaxed text-gray-600 mt-4">
                “{text}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-[#121316]">{name}</p>
                <p className="text-sm text-gray-500">{city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
