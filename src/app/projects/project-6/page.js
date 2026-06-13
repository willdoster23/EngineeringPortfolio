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

const pStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "1rem",
  color: "#333",
  lineHeight: 1.8,
  margin: 0,
};

const divider = <div style={{ borderTop: "1px solid #e8e8e8", marginBottom: "3rem" }} />;

export default function Project6() {
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
          Laser Ablation for Microfluidics
        </h1>

        {/* Overview */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "3rem",
          alignItems: "start",
          marginBottom: "3rem",
        }}>
          <div>
            <h2 style={h2Style}>Overview</h2>
            <p style={pStyle}>For my freshman year research project, I worked with a graduate student designing a laser ablation system to cut chips for use in microfluidics, specifically to serve as tissue-on-chip platforms for biological experiments. Through this research, I designed and machined a gas spring system to safely open and close the laser hood, assembled a fume extraction system, and programmed the first version of the galvo system controls for the cutting.</p>
          </div>
          <img
            src="/project_laser/OverviewImage.jpg"
            alt="Laser ablation system overview"
            style={{ width: "100%", display: "block" }}
          />
        </div>

        {divider}

        {/* Gas Spring Design */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Gas Spring Design</h2>

          {/* Optimizer */}
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: "1.2rem",
            letterSpacing: "0.04em",
            color: "#1a1a1a",
            marginBottom: "1rem",
            marginTop: 0,
          }}>
            Optimizer
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start", marginBottom: "3rem" }}>
            <p style={pStyle}>
              I programmed an optimizer that took the attachment points and gas spring parameters as inputs and output the force required to open the hood at each angle throughout its opening arc. Using this, I selected a gas spring that limited the opening force to 70 N and would self-actuate after around 45 degrees. I also designed hard stops that mounted on the box and constrained the motion of the hood.
            </p>
            <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem", flexShrink: 0 }}>
              <img src="/project_laser/SpringSystem1.png" alt="Spring system 1" style={{ height: "330px", width: "auto", display: "block" }} />
              <img src="/project_laser/SpringSystem2.png" alt="Spring system 2" style={{ height: "330px", width: "auto", display: "block" }} />
            </div>
          </div>

          {/* Manufacturing */}
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: "1.2rem",
            letterSpacing: "0.04em",
            color: "#1a1a1a",
            marginBottom: "1rem",
            marginTop: 0,
          }}>
            Manufacturing
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start", marginBottom: "3rem" }}>
            <p style={pStyle}>
              I cut aluminum rods and machined connections for the rods to the gas springs and hard stops using a manual mill. I successfully assembled these components and produced a fully functional gas spring supported laser hood.
            </p>
            <video src="/project_laser/Opening.MOV" controls style={{ height: "330px", width: "auto", display: "block", flexShrink: 0 }} />
          </div>
        </div>

        {divider}

        {/* Galvo System */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Galvo System</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start", marginBottom: "1.5rem" }}>
            <div>
              <p style={{ ...pStyle, marginBottom: "1.5rem" }}>I used LabVIEW to translate a list of 3D coordinates into mirror angles within the galvo system, transforming desired 3D paths into precise mirror commands. This enabled controlled movement of the laser focal point in 3D space. I then facilitated the transition of this programming into C#, which drastically improved movement speed and enabled clean, accurate cutting.</p>
              <img src="/project_laser/LabView.png" alt="LabVIEW program" style={{ width: "100%", display: "block" }} />
            </div>
            <video src="/project_laser/LaserCuttingVideo.MOV" controls style={{ height: "520px", width: "auto", display: "block", flexShrink: 0 }} />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
