"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const jobs = [
  {
    company: "SpaceX",
    role: "Mechanical Engineering Intern",
    dates: "Summer 2026",
    image: "/job_images/SpaceX.webp",
    objPos: "center top",
    logo: "/job_images/SpaceXLogo.png",
    logoText: false,
    bulletSize: "1.014rem",
    bullets: [
      "Responsible for designing and implementing Starship tooling to increase manufacturing efficiency.",
      "Making life interplanetary.",
    ],
  },
  {
    company: "Mecado",
    role: "Machine Learning Intern",
    dates: "Winter 2026",
    image: "/job_images/Mecado.avif",
    logo: "/job_images/MecadoLogo.png",
    objPos: "center 30%",
    bulletSize: "1.014rem",
    bullets: [
      "Created the first Text-to-CAD AI generation and editing environment directly integrated in NX using C#.",
      "Trained an LLM on semantic descriptions of publicly available CAD objects converted into a custom Python representation. Combined supervised learning for syntactic understanding and reinforcement learning for geometric reasoning.",
      "Designed the system to be scalable with larger LLMs and datasets to improve abilities on more complex CAD models.",
    ],
  },
  {
    company: "Northrop Grumman",
    role: "Structural and Thermal Engineering Intern",
    dates: "Summer 2025",
    image: "/job_images/NothropGrumman.jpg",
    logo: "/job_images/NorthropGrummanLogo.png",
    logoText: false,
    bullets: [
      "Performed advanced structural and thermal FEA with Abaqus on rocket motor components for a variety of load cases.",
      "Designed a modular, 3D printed ring igniter housing to reduce manufacturing costs and prevent nozzle clogging.",
      "Processed material test data and created viscoelastic master curves with MATLAB and Excel for use in FEA analyses.",
    ],
  },
  {
    company: "kW Mission Critical Engineering",
    role: "Mechanical Engineering Intern",
    dates: "Summer 2024",
    image: "/job_images/kW.avif",
    logo: "/job_images/kWLogo.png",
    logoText: false,
    bullets: [
      "Designed and produced duct and piping drawings for large cooling systems for data centers with CAD software.",
      "Performed fluid and thermal load calculations for duct and piping systems to inform design and select equipment.",
    ],
  },
];

function JobCard({ job, index }) {
  const [hovered, setHovered] = useState(false);
  const isLeft = index % 2 === 0; // even = image on left, odd = image on right

  const imageBlock = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        height: "272px",
        overflow: "hidden",
        position: "relative",
        cursor: "default",
        background: "#e8e8e8",
      }}
    >
      <img
        src={job.image}
        alt={job.company}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: job.objPos || "center center",
          display: "block",
          transition: "transform 0.5s ease",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
        onError={(e) => { e.target.style.display = "none"; }}
      />
      {/* Dark overlay on hover */}
      <div style={{
        position: "absolute", inset: 0,
        background: hovered ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.15)",
        transition: "background 0.3s ease",
      }} />
      {/* Company name + role OR logo */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "1rem 1.25rem",
        background: job.logo ? "none" : "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
        display: "flex",
        flexDirection: job.logo ? "row" : "column",
        alignItems: job.logo ? "center" : "flex-start",
        justifyContent: job.logo ? "center" : "flex-start",
        inset: job.logo ? 0 : "auto 0 0 0",
        position: "absolute",
      }}>
        {job.logo ? (
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            padding: "1rem 1.25rem",
            background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
              {job.logoText !== false && (
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "white",
                  letterSpacing: "0.03em",
                  lineHeight: 1.2,
                }}>
                  {job.company}
                </span>
              )}
              <img
                src={job.logo}
                alt={job.company + " logo"}
                style={{ height: job.logoText !== false ? "24px" : "36px", objectFit: "contain", display: "block", position: "relative", top: "0.5px", left: "-2px" }}
              />
            </div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.75)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}>
              {job.role}
            </div>
          </div>
        ) : (
          <>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.5rem",
              fontWeight: 500,
              color: "white",
              letterSpacing: "0.03em",
              lineHeight: 1.2,
            }}>
              {job.company}
            </div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.75)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginTop: "0.2rem",
            }}>
              {job.role}
            </div>
          </>
        )}
      </div>
    </div>
  );

  const bulletsBlock = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        height: "272px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "0 1.5rem 1.5rem 0",
      }}
    >
      {/* Date */}
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "1rem",
        color: "#999",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginBottom: "1rem",
      }}>
        {job.dates}
      </div>
      {/* Bullets */}
      <ul style={{
        margin: 0,
        paddingLeft: "0",
        listStyle: "none",
        opacity: hovered ? 1 : 0,
        transform: hovered
          ? "translateX(0)"
          : isLeft ? "translateX(-10px)" : "translateX(10px)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
      }}>
        {job.bullets.map((b, i) => (
          <li key={i} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.014rem",
            color: "#333",
            lineHeight: 1.7,
            marginBottom: "0.4rem",
            paddingLeft: "0.6em",
            textIndent: "-0.6em",
          }}>
            • {b}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 48px 1fr",
      alignItems: "center",
      marginBottom: "3rem",
    }}>
      {/* Left column */}
      <div>
        {isLeft ? imageBlock : bulletsBlock}
      </div>

      {/* Center dot only */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}>
        <div style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: hovered ? "#1a1a1a" : "#bbb",
          border: "2px solid #1a1a1a",
          flexShrink: 0,
          transition: "background 0.3s ease",
          zIndex: 1,
        }} />
      </div>

      {/* Right column */}
      <div>
        {isLeft ? bulletsBlock : imageBlock}
      </div>
    </div>
  );
}

export default function Jobs() {
  return (
    <div>
      <Navbar light={true} />
      <div style={{
        maxWidth: "1100px",
        width: "93%",
        margin: "4rem auto 2rem",
        paddingBottom: "0",
      }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: "2.5rem",
          letterSpacing: "0.06em",
          color: "#1a1a1a",
          marginBottom: "4rem",
          textAlign: "center",
        }}>
          Experience
        </h1>

        <div style={{ position: "relative" }}>
          {/* Continuous vertical line */}
          <div style={{
            position: "absolute",
            left: "calc(50% - 0.5px)",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "#d0d0d0",
            zIndex: 0,
          }} />
          {jobs.map((job, i) => (
            <JobCard key={i} job={job} index={i} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
