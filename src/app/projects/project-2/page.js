import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Project2() {
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
          Competition Robotics
        </h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "3rem",
          alignItems: "start",
          marginBottom: "3rem",
        }}>
          <div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "1.6rem",
              letterSpacing: "0.06em",
              color: "#1a1a1a",
              marginBottom: "1.25rem",
              marginTop: 0,
            }}>
              Overview
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.1rem",
              color: "#333",
              lineHeight: 1.8,
              margin: 0,
            }}>
              In my design and manufacturing class, students were tasked with building a robot to complete a series of point-earning tasks during a final competition. The theme of my year's competition was the movie <em>Wicked</em>. I placed <strong>3rd overall out of 200 students</strong> through strategic design and careful manufacturing and testing. I was the only student to autonomously retrieve the broom, which was the highest single point task in the competition. I also presented the robot and my design process in a formal design review. My robot received the MIT International Design Competition Award for outstanding originality and execution.
            </p>
          </div>
          <div style={{
            width: "100%",
            aspectRatio: "16/9",
            background: "#e8e8e8",
            overflow: "hidden",
          }}>
            <video
              src="/project_2007/2.007FinalCompetitionVideo.mp4"
              controls
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #e8e8e8", marginBottom: "3rem" }} />

        {/* Strategy */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: "1.6rem",
          letterSpacing: "0.06em",
          color: "#1a1a1a",
          marginBottom: "1.25rem",
        }}>
          Strategy
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "start",
          marginBottom: "3rem",
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            color: "#333",
            lineHeight: 1.8,
            margin: 0,
          }}>
            I brainstormed a range of strategies and evaluated them across multiple criteria including achievable points, predicted consistency, and feasibility within the scope of the project. I determined that retrieving the broom autonomously and flipping the levers would achieve the maximum number of points with strong consistency. After similarly exploring multiple concepts to complete these tasks, I selected a cascading arm and a deployable lever flipper for their robustness and manufacturability.
          </p>
          <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "0.75rem",
            flexShrink: 0,
          }}>
            <img
              src="/project_2007/Drawing.png"
              alt="Robot design drawing"
              style={{ width: "327px", display: "block" }}
            />
            <img
              src="/project_2007/CompetitionBoard.jpg"
              alt="Competition board"
              style={{ width: "327px", display: "block" }}
            />
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #e8e8e8", marginBottom: "3rem" }} />

        {/* Design & Manufacturing */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "start",
          marginBottom: "3rem",
        }}>
          <div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "1.6rem",
              letterSpacing: "0.06em",
              color: "#1a1a1a",
              marginBottom: "2rem",
              marginTop: 0,
            }}>
              Design & Manufacturing
            </h2>

            {/* Cascading Arm */}
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "1.2rem",
              letterSpacing: "0.04em",
              color: "#1a1a1a",
              marginBottom: "1rem",
              marginTop: 0,
            }}>
              Cascading Arm
            </h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "#333",
              lineHeight: 1.8,
              margin: "0 0 2.5rem 0",
            }}>
              The cascading arm needed to fit within a 16" height limit at rest and extend to 5 feet within 20 seconds. To achieve this, I prototyped and mathematically modeled the arm to quantify deflection from string tension and friction in the sliders, then designed and machined Delrin sliders to a tolerance of 0.01" to minimize both. I CAD modeled the full assembly to determine part geometry required to hit the target height, then machined and assembled the arm. To drive extension, I selected a servo and optimized the winch diameter to 2.7" by balancing the torque-speed curve against the required 50N load and calculated frictional forces from shaft misalignment and bearing loads. The arm consistently reached full height in under 18 seconds with a total deflection of under 5 degrees, and the winch operated above the target 25 rad/s under load.
            </p>

            {/* Lever Flipper */}
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "1.2rem",
              letterSpacing: "0.04em",
              color: "#1a1a1a",
              marginBottom: "1rem",
              marginTop: 0,
            }}>
              Lever Flipper
            </h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "#333",
              lineHeight: 1.8,
              margin: 0,
            }}>
              The lever flipper needed to fit within a 16"×16" starting box and deploy 6" to reach the full lever flip extent, while remaining simple to operate under competition conditions. The design used a single motor to rapidly drive sheet metal hooks into position, holding them rigidly during the flip. The hooks were shaped to grip levers quickly and consistently, minimizing the chance of misalignment during a run.
            </p>
          </div>

          <div style={{ flexShrink: 0 }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "0.5rem",
              width: "667px",
              marginBottom: "0.5rem",
            }}>
              <img src="/project_2007/ArmRest.jpg" alt="Arm at rest" style={{ width: "100%", display: "block", gridRow: "1 / 3", objectFit: "cover", height: "100%" }} />
              <img src="/project_2007/ArmExtended.jpg" alt="Arm extended" style={{ width: "100%", display: "block", gridRow: "1 / 3", objectFit: "cover", height: "100%" }} />
              <img src="/project_2007/explodedview.png" alt="Exploded view" style={{ width: "100%", display: "block" }} />
              <img src="/project_2007/WinchDesign.png" alt="Winch design" style={{ width: "100%", display: "block" }} />
            </div>
            <img src="/project_2007/FullCAD.png" alt="Full CAD" style={{ width: "667px", display: "block" }} />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
