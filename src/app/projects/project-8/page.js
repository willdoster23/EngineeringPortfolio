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

export default function Project8() {
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
          Humanoid Robotics
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
            <p style={pStyle}>For my robotics class, our team was tasked with using dual UR5 arms to perform a series of humanoid tasks, including manipulating objects such as plates, cups, and a microwave handle and performing pick-and-place operations with these items. As lead of the software team, I was responsible for the full software implementation — including the initial strategy, computer vision, pick-and-place execution, and coordination of all tasks across both arms. I received the Most Valuable Engineer award for my contributions to our team's success.</p>
          </div>
          <video src="/project_humanoid/ProjectDemo.mp4" controls style={{ height: "600px", width: "auto", display: "block", flexShrink: 0 }} />
        </div>

        {divider}

        {/* Strategy */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Strategy</h2>
          <p style={pStyle}>I brainstormed a range of competition strategies, evaluating each on feasibility within the time limit, risk, and achievable points. We settled on picking and placing a plate and bowl into a microwave and onto a tray, and pouring a liquid into a cup and stirring with a stirrer. We also decided to perform all tasks purely using computer vision to maximize our point total.</p>
        </div>

        {divider}

        {/* Software Implementation */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Software Implementation</h2>

          {/* Computer Vision */}
          <h3 style={h3Style}>Computer Vision</h3>
          <p style={{ ...pStyle, marginBottom: "3rem" }}>
            Objects were isolated using HSV filtering, edge detection, and Hough transforms to detect colored shapes in the camera frame. I calibrated a transformation between the camera and robot frames by placing and detecting an AprilTag at multiple end effector locations. The detected object positions were then used to move the end effector to the exact object location, correcting for any object shifts before competition.
          </p>

          {/* Manipulation */}
          <h3 style={h3Style}>Manipulation</h3>
          <p style={{ ...pStyle, marginBottom: "3rem" }}>
            I used waypoint-based position control to move the arms into safe configurations before using computer vision to precisely locate and grip objects. This required extensive time spent exploring and recording robot arm configurations. Force control was also used to exert a desired contact force on the microwave handle and button. All programming was written in Python.
          </p>

          {/* Orchestration */}
          <h3 style={h3Style}>Orchestration</h3>
          <p style={{ ...pStyle, marginBottom: "3rem" }}>
            I built a web interface with a state machine to run tasks simultaneously across both arms and enable restart from any task in the event of an incomplete execution. This enabled clean coordination between the arms to minimize time lost between tasks and provided a level of safety in case of failure during competition.
          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
}
