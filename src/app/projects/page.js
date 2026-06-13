"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const rows = [
  {
    cols: "1.92fr 1fr",
    height: "405px",
    projects: [
      { title: "Active Pitch Control Aerial-Aquatic Robot", slug: "project-1", image: "/project_images/PitchingWing.png", zoom: 1.2 },
      { title: "Competition Robotics", slug: "project-2", image: "/project_images/2007.jpg", objPos: "center 40%" },
    ],
  },
  {
    cols: "1fr 1fr 1fr",
    height: "350px",
    projects: [
      { title: "Humanoid Robotics", slug: "project-8", image: "/project_images/UR5.jpg" },
      { title: "Machine Learning for PDEs", slug: "project-9", image: "/project_images/MachineLearning.png", objFit: "contain", background: "#ffffff" },
      { title: "Flexures for Artificial Muscle Testing", slug: "project-7", image: "/project_images/VacuumChuck.jpg" },
    ],
  },
  {
    cols: "1fr 1fr",
    height: "350px",
    projects: [
      { title: "Manufacturing Yo-Yo's at Scale", slug: "project-3", image: "/project_images/Yoyo.jpg" },
      { title: "Rocket Engine Nitrogen Pressurization", slug: "project-4", image: "/project_images/Osiris.jpg" },
    ],
  },
  {
    cols: "1.2fr 1fr",
    height: "350px",
    projects: [
      { title: "Sunscreen Efficacy Research", slug: "project-5", image: "/project_images/2671.svg", background: "#ffffff", objFit: "contain" },
      { title: "Laser Ablation for Microfluidics", slug: "project-6", image: "/project_images/Laser2.jpg", imgScale: 1.12, imgOrigin: "left 100%" },
    ],
  },
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <div
        style={{ position: "relative", overflow: "hidden", height: "100%", background: project.background || "#d4d4d4", cursor: "pointer" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            position: "absolute",
            width: "100%",
            height: project.top ? `calc(100% + ${Math.abs(parseInt(project.top))}px)` : "100%",
            objectFit: project.objFit || "cover",
            objectPosition: project.objPos || "center center",
            top: project.top || "0px",
            left: "0",
            display: "block",
            transition: "transform 0.4s ease",
            transform: hovered ? `scale(${(project.zoom || 1) * (project.imgScale || 1) * 1.04})` : `scale(${(project.zoom || 1) * (project.imgScale || 1)})`,
            transformOrigin: project.imgOrigin || "center center",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: hovered ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.3s ease",
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "1.75rem",
            letterSpacing: "0.06em",
            color: "white",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            textAlign: "center",
            padding: "0 0.5rem",
          }}>
            {project.title}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <div>
      <Navbar light={true} />
      <div style={{ maxWidth: "1200px", width: "95%", margin: "3rem auto", display: "flex", flexDirection: "column", gap: "1.5rem", paddingBottom: "2rem" }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: "2.5rem",
          letterSpacing: "0.06em",
          color: "#1a1a1a",
          marginBottom: "1rem",
          textAlign: "center",
        }}>Projects</h1>
        {rows.map((row, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: row.cols, gap: "1.5rem", height: row.height, overflow: "hidden" }}>
            {row.projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
