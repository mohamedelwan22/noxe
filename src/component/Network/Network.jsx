import React, { useEffect } from "react";

export default function Network() {
  useEffect(() => {
    document.title = "NETWORK";
  }, []);

  const reviews = [
    {
      name: "Alex Carter",
      img: "https://i.pravatar.cc/150?img=3",
      rate: 5,
      text: "NOXE completely changed how I discover new movies. Clean and fast design!",
    },
    {
      name: "Sophia Lee",
      img: "https://i.pravatar.cc/150?img=5",
      rate: 4,
      text: "Great platform! Easy to track trending films and read summaries.",
    },
    {
      name: "Daniel Smith",
      img: "https://i.pravatar.cc/150?img=7",
      rate: 5,
      text: "As a movie lover, NOXE is my go-to site now. Professional and organized.",
    },
  ];

  return (
    <>
      <section className="network container py-5 text-center">
        <h2 className="mb-4 fw-bold">Our Network</h2>

        <p className="text-info-emphasis mb-5">
          Stay connected with <span className="fw-bold">NOXE</span> across our
          online platforms. Follow us for updates, new movie releases, and
          exclusive insights. We’re always expanding our digital network to
          bring cinema closer to everyone.
        </p>

        <div className="row justify-content-center mb-5">
          {[{ name: "Facebook", link: "#" },
            { name: "Instagram", link: "#" },
            { name: "Twitter (X)", link: "#" },
            { name: "YouTube", link: "#" }].map((item, i) => (
            <div key={i} className="col-md-3 col-6 mb-4">
              <h4>{item.name}</h4>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-info"
              >
                {item.name.toLowerCase()}.com/noxe
              </a>
            </div>
          ))}
        </div>

        <div className="contact mt-5">
          <h3 className="fw-bold">Contact Us</h3>
          <p className="fw-bold">
            📧 Email: <span className="fw-bold text-info">mohamedelwan.dev@gmail.com</span>
          </p>
        </div>

        <div className="stats row mt-5 justify-content-center">
          {[{ number: "12,500+", label: "Active Users" },
            { number: "8,900+", label: "Movies Listed" },
            { number: "4,000+", label: "Daily Visits" }].map((stat, i) => (
            <div key={i} className="col-md-3 col-6 mb-3">
              <h2 className="fw-bold">{stat.number}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ====== User Reviews Section ====== */}
        <div className="reviews py-5 bg-dark text-light rounded-4 shadow-sm mt-5">
          <h3 className="fw-bold mb-4">What Our Users Say</h3>
          <div className="row justify-content-center">
            {reviews.map((rev, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div className="card bg-secondary bg-opacity-10 border-0 p-4 h-100 rounded-4 shadow-sm">
                  <img
                    src={rev.img}
                    alt={rev.name}
                    className="rounded-circle mx-auto mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-bold text-info">{rev.name}</h5>
                  <div className="text-warning mb-2">
                    {"★".repeat(rev.rate)}
                    {"☆".repeat(5 - rev.rate)}
                  </div>
                  <p className="text-danger fst-italic">{rev.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-5 pt-4 border-top">
          <p className="text-warning mb-0">
            Developed and designed by{" "}
            <span className="fw-bold text-info">Mohamed Elwan</span> © 2025
          </p>
        </footer>
      </section>
    </>
  );
}
