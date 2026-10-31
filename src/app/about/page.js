"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const involvement = [
  {
    org: "MIT Men's Lacrosse Team",
    role: "Defenseman",
    dates: "August 2023 – Present",
    image: "/involvement_images/Lacrosse.png",
    objPos: "25% 30%",
    bullets: [
      "Training 20+ hours weekly for competition on MIT's Division III team. 3x Academic All-Conference Award Recipient.",
    ],
  },
  {
    org: "Chi Phi Fraternity",
    role: "President",
    roleExtra: "Previously: Vice President, Secretary",
    dates: "May 2025 – December 2025",
    image: "/involvement_images/ChiPhi.jpg",
    bullets: [
      "Organized bi-weekly meetings and elections for 40 members. Oversaw all house positions and served as liaison with MIT and alumni organizations.",
    ],
  },
  {
    org: "Pi Tau Sigma",
    role: "President",
    dates: "January 2026 – Present",
    image: "/involvement_images/PTS.webp",
    bullets: [
      "Leading new-member initiation and organizing graduate school information sessions, networking events, and dinners with faculty. Serving as primary contact for MIT and PTS National leadership.",
    ],
  },
  {
    org: "Tau Beta Pi",
    role: "Member",
    dates: "January 2026 – Present",
    image: "/involvement_images/TBP.png",
    objFit: "contain",
    objBg: "#f5f5f5",
    objSize: "100%",
    objPadding: "0 5%",
    bullets: [
      "Recognized for academic excellence and integrity in MIT's chapter of the nation's oldest engineering honor society, as a testament to both technical achievement and character.",
    ],
  },
  {
    org: "Global Teaching Labs (Italy)",
    role: "Teacher",
    dates: "January 2025 – February 2025",
    image: "/involvement_images/GTL.jpg",
    bullets: [
      "Created and delivered hands-on lessons on electricity and magnetism and combinatorics to 10 classes of ~20 high school students in Brescia, Italy to prepare them for university.",
    ],
  },
  {
    org: "Boy Scouts",
    role: "Eagle Scout",
    roleExtra: "Senior Patrol Leader",
    dates: "August 2015 – May 2023",
    image: "/involvement_images/BoyScouts.jpg",
    bullets: [
      "Guided 30 scouts through rank advancement as Senior Patrol Leader. For my Eagle project, led 10 scouts in building a roofed signage board for the sensory trail at Chastain Horse Park, a therapeutic riding nonprofit.",
    ],
  },
];

const honors = [
  { title: "SuperUROP Scholar", detail: "One of three mechanical engineering students selected, MIT (2026 – 2027)" },
  { title: "MIT International Design Competition Award", detail: "For outstanding originality in the MIT Design and Manufacturing Robotics Competition (2025)" },
  { title: "Academic All-Conference Award", detail: "MIT Men's Lacrosse, NCAA Division III, 3x recipient (2024, 2025, 2026)" },
  { title: "Chi Phi Educational Trust Academic Scholarship", detail: "2026" },
  { title: "National Merit Scholarship", detail: "2023" },
];

const presentations = [
  { title: "Active Pitch Control in a Flapping-Wing Aerial-Aquatic Robot", detail: "Journal paper in preparation, tentative title, with Raphael Zufferey" },
  { title: "Design and Testing of a Flapping-Wing Robot with Active Pitch Control", detail: "UROP Final Presentation, MIT AURA Lab (May 2026)" },
  { title: "Flapping-Wing Robot Demonstration", detail: "Cambridge Science Festival" },
  { title: "Intern Final Presentations", detail: "SpaceX (August 2026), Mecado (February 2026), Northrop Grumman (August 2025)" },
];

function RecognitionList({ heading, items }) {
  return (
    <div>
      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
        fontSize: "1.4rem", letterSpacing: "0.04em", color: "#1a1a1a",
        marginTop: 0, marginBottom: "1.25rem",
      }}>{heading}</h3>
      {items.map((item, i) => (
        <div key={i} style={{ marginBottom: "1rem" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#1a1a1a", lineHeight: 1.5 }}>{item.title}</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#888", lineHeight: 1.5 }}>{item.detail}</div>
        </div>
      ))}
    </div>
  );
}

const interests = [
  { label: "Backpacking", image: "/interest_images/Backpacking.jpg", col: 1, rowStart: 1, rowEnd: 3 },
  { label: "Food", image: "/interest_images/Food.jpg", col: 2, rowStart: 1, rowEnd: 2 },
  { label: "Music", image: "/interest_images/Music.jpg", col: 3, rowStart: 1, rowEnd: 3 },
  { label: "Snowboarding", image: "/interest_images/Snowboarding.jpg", col: 2, rowStart: 2, rowEnd: 4 },
  { label: "Travelling", image: "/interest_images/Travelling.jpg", col: 1, rowStart: 3, rowEnd: 4 },
  { label: "Fitness", image: "/interest_images/Fitness.jpg", col: 3, rowStart: 3, rowEnd: 4 },
];

function InvolvementCard({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "default", background: "#f5f5f5" }}
    >
      <div style={{ width: "100%", height: "400px", overflow: "hidden", position: "relative", background: item.objBg || "#e8e8e8", padding: item.objPadding || "0", boxSizing: "border-box" }}>
        <img
          src={item.image}
          alt={item.org}
          style={{
            width: item.objSize || "100%", height: "100%", objectFit: item.objFit || "cover", objectPosition: item.objPos || "center center", display: "block",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: hovered ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.1)",
          transition: "background 0.3s ease",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "1.25rem",
        }}>
          <ul style={{
            margin: 0, paddingLeft: 0, listStyle: "none",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}>
            {item.bullets.map((b, i) => (
              <li key={i} style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem",
                color: "white", lineHeight: 1.65, textAlign: "center",
              }}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ padding: "0.85rem 1rem 1rem" }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem",
          fontWeight: 500, color: "#1a1a1a", letterSpacing: "0.02em", marginBottom: "0.2rem",
        }}>{item.org}</div>
        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem",
          color: "#888", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "0.1rem",
        }}>{item.role}{item.roleExtra ? ` — ${item.roleExtra}` : ""}</div>
        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem",
          color: "#bbb", letterSpacing: "0.06em", textTransform: "uppercase",
        }}>{item.dates}</div>
      </div>
    </div>
  );
}

function InterestTile({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", overflow: "hidden",
        gridColumn: item.col,
        gridRow: `${item.rowStart} / ${item.rowEnd}`,
      }}
    >
      <img
        src={item.image}
        alt={item.label}
        style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
          transition: "transform 0.5s ease",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: hovered ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.2)",
        transition: "background 0.3s ease",
        display: "flex", alignItems: "flex-end",
        padding: "1rem 1.25rem",
      }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.4rem", fontWeight: 400, color: "white",
          letterSpacing: "0.06em",
        }}>{item.label}</span>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <Navbar light={true} />
      <div style={{ maxWidth: "1100px", width: "93%", margin: "4rem auto", paddingBottom: "2rem" }}>

        {/* Involvement */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          fontSize: "2.5rem", letterSpacing: "0.06em", color: "#1a1a1a",
          marginBottom: "4rem", textAlign: "center",
        }}>Involvement</h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1.5rem" }}>
          {involvement.map((item, i) => <InvolvementCard key={i} item={item} />)}
        </div>

        {/* Honors & Presentations */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          fontSize: "2.5rem", letterSpacing: "0.06em", color: "#1a1a1a",
          marginTop: "4rem", marginBottom: "3rem", textAlign: "center",
        }}>Honors & Presentations</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "3rem" }}>
          <RecognitionList heading="Honors" items={honors} />
          <RecognitionList heading="Publications & Presentations" items={presentations} />
        </div>

        {/* Interests */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          fontSize: "2.5rem", letterSpacing: "0.06em", color: "#1a1a1a",
          marginTop: "4rem", marginBottom: "4rem", textAlign: "center",
        }}>Interests</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "220px",
          gap: "6px",
        }}>
          {interests.map((item, i) => <InterestTile key={i} item={item} />)}
        </div>

      </div>
      <Footer />
    </div>
  );
}
