import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const h2Style = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 300,
  fontSize: "1.6rem",
  letterSpacing: "0.06em",
  color: "#1a1a1a",
  marginBottom: "1.25rem",
  marginTop: 0,
};

const h3Style = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 400,
  fontSize: "1.2rem",
  letterSpacing: "0.04em",
  color: "#1a1a1a",
  marginBottom: "1rem",
  marginTop: 0,
};

const pStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "1rem",
  color: "#333",
  lineHeight: 1.8,
  margin: 0,
};

const divider = <div style={{ borderTop: "1px solid #e8e8e8", marginBottom: "3rem" }} />;

export default function Project7() {
  return (
    <div>
      <Navbar light={true} />
      <div style={{
        maxWidth: "1100px",
        width: "93%",
        margin: "4rem auto 2rem",
      }}>

        {/* Header */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: "2.5rem",
          letterSpacing: "0.06em",
          color: "#1a1a1a",
          marginBottom: "2.5rem",
          textAlign: "center",
        }}>
          Flexures for Artificial Muscle Testing
        </h1>

        {/* Overview */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "start",
          marginBottom: "3rem",
        }}>
          <div>
            <h2 style={h2Style}>Overview</h2>
            <p style={pStyle}>For my sophomore year research project, I worked with a graduate student designing flexures to test the force-displacement characteristics of artificial muscles for potential robotic application. The flexures allowed attachment and flexing of an artificial muscle, measuring its force production and displacement through flexure deflection. I explored using an adjustable boundary condition to create a linearly varying stiffness flexure and proved the validity of the concept that was eventually incorporated into these flexures. I also designed and machined a vacuum chuck used on the desktop mill to cut the flexures.</p>
          </div>
          <img src="/project_flexures/3DPrint.jpg" alt="3D printed prototype" style={{ height: "280px", width: "auto", display: "block", flexShrink: 0 }} />
        </div>

        {divider}

        {/* Adjustable Boundary Condition */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Adjustable Boundary Condition</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start", marginBottom: "3rem" }}>
            <div>
              <p style={{ ...pStyle, marginBottom: "1.5rem" }}>
                My specific goal was to design a beam configuration with linearly adjustable stiffness to enable precise stiffness control, simple enough to scale down to fit within a 14 mm diameter flexure. I evaluated several approaches analytically, including altering the angle between beams, changing beam cross-sections, and adjusting the contact position of a beam. I selected contact point adjustment for its scalability.
              </p>
              <p style={{ ...pStyle, marginBottom: "1.5rem" }}>
                I developed a final design with an adjustable contact point and a linear spring connecting two beams, then optimized beam lengths, widths, and spring stiffness to produce a near-linear stiffness function. I CAD modeled and 3D printed a prototype to verify the analytical model, taking a series of measurements and confirming results with FEA analysis.
              </p>
              <p style={pStyle}>
                The analytical model was successfully verified, proving the viability of a variable stiffness configuration with an adjustable boundary condition. The concept was subsequently incorporated into the final flexure design.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flexShrink: 0 }}>
              <img src="/project_flexures/Analytical.png" alt="Analytical model" style={{ height: "320px", width: "auto", display: "block" }} />
              <img src="/project_flexures/ContactGraph.png" alt="Contact graph" style={{ height: "320px", width: "auto", display: "block" }} />
            </div>
          </div>
        </div>

        {divider}

        {/* Vacuum Chuck */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Vacuum Chuck</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start", marginBottom: "3rem" }}>
            <div>
              <p style={{ ...pStyle, marginBottom: "1.5rem" }}>
                A Carbide desktop mill was being used to machine flexures out of LDPE, a soft thin plastic, to a tolerance of ±0.001". I first designed and ran precision machining tests, varying speeds, feeds, and cutting depths to characterize the mill's achievable tolerance, which I measured at ±0.0025" — insufficient for the requirement. I then researched factors affecting precision, including tool wear, tool holding, and part holding, and identified part holding as the primary issue, as parts were previously secured with double-sided tape.
              </p>
              <p style={{ ...pStyle, marginBottom: "1.5rem" }}>
                After researching part-holding options for thin stock, I determined that a vacuum chuck system would minimize part deflection and vibration during cutting while maximizing ease of use. I calculated the cutting forces on LDPE and determined the vacuum pressure and surface area required to counteract them. I then researched and purchased the components for a compressed air vacuum system, and CAD designed the vacuum board, optimizing the gasket groove layout to maximize available cutting area, with each isolated square sized to match one flexure. I machined the chuck on a manual mill.
              </p>
              <p style={pStyle}>
                I assembled and tested the system using the same precision test procedure and verified a tolerance within ±0.001". The system is now in use for flexure machining.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flexShrink: 0, width: "320px" }}>
              <iframe
                width="320"
                height="320"
                src="https://www.youtube.com/embed/W855NEKsgY0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: "block" }}
              />
              <img src="/project_flexures/MachinedChuck.jpg" alt="Machined vacuum chuck" style={{ width: "100%", display: "block" }} />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
