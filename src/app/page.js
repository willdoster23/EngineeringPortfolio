import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Navbar />
      <img
        src="/Homepage_UROP.JPG"
        alt="Will Doster"
        style={{ position: "absolute", inset: 0, objectPosition: "center 10%", height: "100%", width: "100%", objectFit: "cover" }}
      />
      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
      {/* Text */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", color: "white" }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "3.75rem", letterSpacing: "0.06em" }}>
          Will Doster
        </h1>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: "1.1rem", letterSpacing: "0.1em", marginTop: "0.75rem", opacity: 0.9 }}>
          Mechanical Engineering Portfolio
        </p>
      </div>
      {/* Footer overlay */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "2rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}>
        <a
          href="mailto:wdoster@mit.edu"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.75)",
            letterSpacing: "0.06em",
            textDecoration: "none",
          }}
        >
          wdoster@mit.edu
        </a>
        <a
          href="https://www.linkedin.com/in/willdoster/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", opacity: 0.75 }}
        >
          <img
            src="/Linkedinlogo.png"
            alt="LinkedIn"
            style={{ width: "28px", height: "28px", objectFit: "contain" }}
          />
        </a>
      </div>
    </div>
  );
}
