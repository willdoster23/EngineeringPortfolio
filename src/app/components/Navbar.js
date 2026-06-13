"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Home", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  { name: "Jobs", href: "/jobs" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({ light = false }) {
  const pathname = usePathname();

  return (
    <nav style={{ position: light ? "relative" : "absolute", top: 0, left: 0, width: "100%", zIndex: 10, borderBottom: light ? "1px solid #e8e8e8" : "none" }}>
      <div style={{ padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "flex-end", height: "64px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              style={{
                padding: "0.5rem 1rem",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "opacity 0.2s",
                color: light
                  ? pathname === tab.href ? "#1a1a1a" : "#6b6b6b"
                  : pathname === tab.href ? "#ffffff" : "rgba(255,255,255,0.7)",
              }}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
