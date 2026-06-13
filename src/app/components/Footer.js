export default function Footer() {
  return (
    <div style={{
      borderTop: "1px solid #e8e8e8",
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
          color: "#888",
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
        style={{ display: "flex", alignItems: "center" }}
      >
        <img
          src="/Linkedinlogo.png"
          alt="LinkedIn"
          style={{ width: "28px", height: "28px", objectFit: "contain" }}
        />
      </a>
    </div>
  );
}
