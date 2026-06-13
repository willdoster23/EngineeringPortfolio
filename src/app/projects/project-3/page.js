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

const placeholder = (label) => (
  <div style={{
    background: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "220px",
    color: "#aaa",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.85rem",
  }}>
    {label}
  </div>
);

export default function Project3() {
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
          Manufacturing Yo-Yo&apos;s at Scale
        </h1>

        {/* Overview */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Overview</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "3rem",
            alignItems: "start",
          }}>
            <p style={pStyle}>For my manufacturing class, our group was tasked with designing and manufacturing 50 identical yo-yos, with the central challenge being the development of an effective and scalable manufacturing process. Each yo-yo required two injection molded parts, a thermoformed part, and a press fit that could survive a 5-foot drop test. We successfully produced all 50 units with consistent press fits, and incorporated a unique free-spinning design that allowed the yo-yo to be used for tricks.</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "0.75rem", justifyContent: "flex-end", alignItems: "flex-start" }}>
              <img src="/project_yoyo/AllYoYos.png" alt="All yo-yos" style={{ display: "block", height: "250px", width: "auto" }} />
              <div style={{ flexShrink: 0 }}>
                <iframe
                  width="250"
                  height="250"
                  src="https://www.youtube.com/embed/3OJYtPSKiYA"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>

        {divider}

        {/* Design */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "start",
          marginBottom: "3rem",
        }}>
          <div>
            <h2 style={h2Style}>Design</h2>
            <p style={pStyle}>I was responsible for designing the yo-yo body and the thermoformed insert. For the body, I prioritized manufacturability by maintaining a uniform wall thickness throughout, improving flow and consistency during injection molding. For the thermoform, I chose a spiral design that complemented the free-spinning theme while keeping features smooth and shallow to ensure reliable formability.</p>
          </div>
          <div style={{ width: "400px", flexShrink: 0 }}>
            <img src="/project_yoyo/ExplodedView.png" alt="Exploded view" style={{ width: "100%", display: "block" }} />
          </div>
        </div>

        {divider}

        {/* Interference Design */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "start",
          marginBottom: "3rem",
        }}>
          <div>
            <h2 style={h2Style}>Interference</h2>
            <p style={pStyle}>I was tasked with determining the optimal press fit interference to ensure a strong assembly, balancing between too little interference, which produces a loose fit, and too much, which deforms parts and weakens the joint. I took a multi-pronged approach to converge on a final value. Hand calculations comparing press fit friction force to the opening force from maximum estimated deceleration predicted failure at 0.041", establishing the correct order of magnitude. I also measured interference across 10 similar press fits and tested their strength, with the strongest fits clustered around 0.025", and all survived the drop test, setting 0.01" as a safe lower bound. I used a length of engagement of 0.2" as recommended. Based on this, I selected an interference of 0.03" with a ±0.01" tolerance, giving a working range of 0.01"–0.05".</p>
          </div>
          <div style={{ flexShrink: 0, width: "400px", display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-end" }}>
            <div style={{ width: "400px", display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start" }}>
              <img src="/project_yoyo/Forces.png" alt="Force calculations" style={{ display: "block", width: "280px" }} />
              <img src="/project_yoyo/InterferenceMeasurements.png" alt="Interference measurements" style={{ display: "block", maxWidth: "100%" }} />
            </div>
          </div>
        </div>

        {divider}

        {/* Manufacturing */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "start",
          marginBottom: "3rem",
        }}>
          <div>
            <h2 style={h2Style}>Manufacturing</h2>
            <p style={pStyle}>I was responsible for manufacturing the aluminum molds for the body injection molded part. I programmed the CAM in Fusion 360 and ran the parts on a CNC mill, tailoring the toolpaths to use thick tools to reduce deflection and including a spring pass over critical dimensions to improve precision. I also manufactured the thermoform mold using resin 3D printing to achieve the precise surface geometry. With both molds complete, I manufactured the injection molded and thermoformed parts, iterating on molding and forming parameters to produce consistent, accurate parts across the full run.</p>
          </div>
          <div style={{ flexShrink: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", alignItems: "end", width: "468px" }}>
            <img src="/project_yoyo/MoldCAD.png" alt="Injection mold CAD" style={{ width: "100%", display: "block" }} />
            <img src="/project_yoyo/ThermoformMoldCAD.png" alt="Thermoform mold CAD" style={{ width: "100%", display: "block" }} />
            <img src="/project_yoyo/Body.png" alt="Yo-yo body" style={{ width: "100%", display: "block", alignSelf: "end" }} />
            <img src="/project_yoyo/Ring.png" alt="Yo-yo ring" style={{ width: "100%", display: "block" }} />
          </div>
        </div>

        {divider}

        {/* Interference Results */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "start",
          marginBottom: "3rem",
        }}>
          <div>
            <h2 style={h2Style}>Interference Results</h2>
            <p style={{ ...pStyle, marginBottom: "1.5rem" }}>Through careful CAM programming and iterative injection molding parameter tuning, all parts came in within tolerance. The resulting interference values fell within our target range, with no parts requiring rework or rejection.</p>
            <img src="/project_yoyo/PartDistributions.png" alt="Part distributions" style={{ width: "100%", display: "block" }} />
          </div>
          <div style={{ flexShrink: 0, width: "438px" }}>
            <img src="/project_yoyo/InterferenceDistributions.png" alt="Interference distributions" style={{ width: "100%", display: "block" }} />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
