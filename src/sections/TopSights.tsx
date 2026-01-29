import React from "react";

const TopSights: React.FC = () => {
  const sights = [
    { title: "Kerala", img: new URL("../assets/TopShights1.png", import.meta.url).href, span: 3 },
    { title: "Jammu and Kashmir", img: new URL("../assets/TopShights2.png", import.meta.url).href, span: 3 },
    { title: "Goa", img: new URL("../assets/TopShights3.png", import.meta.url).href, span: 2 },
    { title: "Bombay", img: new URL("../assets/TopShights4.png", import.meta.url).href, span: 2 },
    { title: "Bengal", img: new URL("../assets/TopShights5.png", import.meta.url).href, span: 2 },
  ];

  return (
    <section style={{ width: "100%", padding: 40 }}>
      <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>
        Top Sights to See
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 20,
        }}
      >
        {sights.map((s, i) => (
          <div
            key={i}
            style={{
              gridColumn: `span ${s.span}`,
              height: s.span === 3 ? 260 : 220,
              borderRadius: 18,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Responsive stretched image */}
            <img
              src={s.img}
              alt={s.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // 🔥 stretch to container
                display: "block",   // 🔥 remove bottom gap
              }}
            />

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
              }}
            />

            {/* Title */}
            <span
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                color: "#fff",
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              {s.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSights;
