import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Resume() {
  return (
    <div>
      <Navbar light={true} />
      <div style={{ display: "flex", justifyContent: "center", padding: "3rem 1rem 2rem" }}>
        <div style={{ width: "min(95%, 1140px)" }}>
          <a
            href="/WillDosterResume_6_13_26.pdf"
            download="WillDosterResume_6_13_26.pdf"
            style={{
              display: "inline-block",
              marginLeft: "6.25rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "#1a1a1a",
              border: "1px solid #1a1a1a",
              padding: "0.75rem 2rem",
            }}
          >
            Download PDF
          </a>
          <img
            src="/WillDosterResume_6_13_26.png"
            alt="Will Doster Resume"
            style={{ width: "100%", display: "block" }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
