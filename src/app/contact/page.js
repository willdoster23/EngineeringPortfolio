import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar light={true} />
      <div style={{
        maxWidth: "1100px",
        width: "93%",
        margin: "4rem auto",
        paddingBottom: "6rem",
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
          Contact
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "1rem",
          color: "#555",
          textAlign: "center",
          lineHeight: 1.7,
          marginBottom: "3rem",
          maxWidth: "500px",
          margin: "0 auto 3rem",
        }}>
          Always happy to chat — whether it's about professional opportunities, research, or just to connect!
        </p>

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}>
          {/* Email */}
          <a
            href="mailto:wdoster@mit.edu"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textDecoration: "none",
              borderBottom: "1px solid #e8e8e8",
              paddingBottom: "1.5rem",
              width: "100%",
              maxWidth: "400px",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "#1a1a1a",
              letterSpacing: "0.04em",
            }}>
              wdoster@mit.edu
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/willdoster/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textDecoration: "none",
              width: "100%",
              maxWidth: "400px",
              justifyContent: "center",
            }}
          >
            <img src="/Linkedinlogo.png" alt="LinkedIn" style={{ width: "18px", height: "18px", objectFit: "contain" }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "#1a1a1a",
              letterSpacing: "0.04em",
            }}>
              linkedin.com/in/willdoster
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
