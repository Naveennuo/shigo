import React from "react";
import { useNavigate } from "react-router-dom";

const TopSights: React.FC = () => {
  const navigate = useNavigate();

  const sights = [
    { title: "Tamil Nadu", img: new URL("../assets/Tamilnadu.jpg", import.meta.url).href, span: 3 },
    { title: "Kerala", img: new URL("../assets/Kerala.jpg", import.meta.url).href, span: 3 },
    { title: "Karnataka", img: new URL("../assets/Karnataka.jpg", import.meta.url).href, span: 2 },
    { title: "Andhra Pradesh", img: new URL("../assets/Andhra Pradesh.jpg", import.meta.url).href, span: 2 },
    { title: "Pondicherry", img: new URL("../assets/Pondicherry.jpg", import.meta.url).href, span: 2 },
    { title: "Goa", img: new URL("../assets/Goa.jpg", import.meta.url).href, span: 3 },
    { title: "Telangana", img: new URL("../assets/Telangana.jpg", import.meta.url).href, span: 3 },
  ];

  return (
    <section style={{ width: "100%", padding: 40, boxSizing: "border-box" }}>
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
              cursor: s.title === "Tamil Nadu" ? "pointer" : "default",
            }}
            className="top-sight-card"
            onClick={() => {
              if (s.title === "Tamil Nadu") {
                navigate("/tamilnadu");
              }
            }}
          >
            <img
              src={s.img}
              alt={s.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.5s ease",
              }}
              className="top-sight-img"
            />

            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                background: "rgba(0,0,0,0.5)",
                padding: "8px 16px",
                borderRadius: 12,
                backdropFilter: "blur(4px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontSize: 22,
                  fontWeight: 600,
                  textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                }}
              >
                {s.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .top-sight-card:hover > .top-sight-img {
            transform: scale(1.06);
          }

          @media (max-width: 1024px) {
            section div[style*="grid"] {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }

          @media (max-width: 640px) {
            section {
              padding: 20px !important;
            }

            section div[style*="grid"] {
              grid-template-columns: repeat(1, 1fr) !important;
            }

            .top-sight-card {
              grid-column: span 1 !important;
              height: auto !important;
            }

            .top-sight-card img {
              height: auto !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default TopSights;
