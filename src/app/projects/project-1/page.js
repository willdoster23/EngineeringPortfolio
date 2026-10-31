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

export default function Project1() {
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
          Active Pitch Control Aerial-Aquatic Robot
        </h1>

        {/* Overview */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Overview</h2>
          <p style={{ ...pStyle, marginBottom: "1.5rem" }}>Since my junior year, I have led a project in Professor Raphael Zufferey&apos;s MIT AURA Lab asking how active wing pitch changes the lift, thrust, and efficiency of flapping-wing flight. Birds adjust their wing pitch as they flap, but most flapping-wing robots cannot, because pitch control typically requires a separate, bulky mechanism. I designed and built a two-winged robot around a compact differential gearbox that lets two oscillating motors drive both flap and pitch.</p>
          <p style={{ ...pStyle, marginBottom: "2rem" }}>Across more than 1,100 wind-flow experiments, active pitch raised lift per watt by up to 48% at a representative flight condition, and an optimized wing motion produced more lift than the robot&apos;s weight while generating positive thrust. The robot has not yet flown freely; free flight and swimming are the next goals. This work is part of MIT&apos;s SuperUROP program and is being prepared for journal publication.</p>
          <img src="/project_pitchingwing/robot_full.jpg" alt="Flapping-wing robot with both wings extended" style={{ width: "100%", display: "block" }} />
        </div>

        {divider}

        {/* Motivation */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Motivation</h2>
          <p style={{ ...pStyle, marginBottom: "1.5rem" }}>Bridges, dams, ports, and offshore platforms require underwater inspection, a job that falls to commercial divers working in dangerous conditions. Propeller-driven robots struggle in these turbulent, cluttered sites, risk damaging the sensitive environments around them, and are usually confined to a single medium. Flapping-wing robots can withstand collisions, operate gently near wildlife, and move between air and water, but they lack the efficiency and control this work demands.</p>
          <p style={{ ...pStyle, marginBottom: "1.5rem" }}>Birds achieve efficient, agile flight by actively adjusting wing pitch, and diving birds like puffins extend this underwater. Single-wing experiments in the AURA Lab demonstrated a significant improvement in thrust-to-power ratio with active pitch control. A two-winged robot with four independent servos confirmed that pitch control can alter force production in air, but was too heavy for flight. The lab&apos;s flapping-wing aerial-aquatic vehicle (Zufferey et al., <em>Science</em>, 2026) flies and swims, but adapts to each medium through frequency and wing flexibility alone. No existing robot uses active pitch while flying and swimming.</p>
          <p style={pStyle}>This project seeks to fill that gap with a two-winged robot light enough to fly and able to control pitch directly, serving as both a new platform and an experiment on how pitch shapes efficiency and control in air and water.</p>
        </div>

        {divider}

        {/* Design */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Design</h2>

          {/* Gearbox */}
          <h3 style={h3Style}>Gearbox</h3>
          <p style={{ ...pStyle, marginBottom: "1.5rem" }}>The differential gearbox is the most mechanically complex element of the robot. The bevel gear arrangement allows pitch control by oscillating the motors themselves, eliminating the need for additional oscillating mechanical components. This was selected as the method of introducing pitch because it limits the number of necessary actuators, provides high controllability of the flapping parameters, and produces a lightweight, compact design.</p>
          <p style={{ ...pStyle, marginBottom: "1.5rem" }}>Direct driving the gearbox was preferred over couplings to avoid alignment issues, added weight, and increased length in the robot. The reduction shaft is somewhat cantilevered as a result, which was mitigated by the free-spinning shaft on the opposite side acting as a pseudo-support.</p>
          <p style={{ ...pStyle, marginBottom: "1.5rem" }}>The design provides room for spring element integration, enabling future resonance-based efficiency improvements seen in the single-wing prototype. A bracketed wing support attaches to both shafts, constraining the external gear and reducing wing shaft deflection.</p>
          <p style={{ ...pStyle, marginBottom: "3rem" }}>All rotating elements use high-speed, high-temperature plastic bushings rather than bearings to save weight and resist water corrosion. The body consists of two carbon fiber plates with modular internal elements, providing a rigid, lightweight, and iterable structure. Trusses were added at critical locations for stiffness.</p>
          <div style={{ display: "flex", flexDirection: "row", gap: "0.75rem", marginBottom: "3rem" }}>
            <img src="/project_pitchingwing/gearbox.png" alt="Gearbox" style={{ flex: 1, width: "0", display: "block" }} />
            <img src="/project_pitchingwing/cad.png" alt="Full CAD" style={{ flex: 1, width: "0", display: "block" }} />
          </div>

          {/* Mass & Wings */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start" }}>
            <div>
              <h3 style={h3Style}>Mass & Wings</h3>
              <p style={{ ...pStyle, marginBottom: "1.5rem" }}>Component masses were estimated by weighing third-party parts and calculating custom part weights using material densities. The battery attachment position was chosen to allow center-of-mass adjustment around the quarter chord, following the approach used in previous research for stable flight.</p>
              <p style={pStyle}>The 530 mm wings were sized using lift and thrust data from a fixed wing robot to guarantee lift/weight and thrust/weight greater than 1 at 5 Hz to enable flight.</p>
            </div>
            <img src="/project_pitchingwing/wingsizing.png" alt="Wing sizing" style={{ width: "540px", display: "block", flexShrink: 0 }} />
          </div>
        </div>

        {divider}

        {/* Manufacturing */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Manufacturing</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start" }}>
            <div>
              <h3 style={h3Style}>Machining & 3D Printing</h3>
              <p style={{ ...pStyle, marginBottom: "3rem" }}>The free-spinning shaft was turned on a manual lathe and grooved for e-clips. The internal press-fit component was machined on a CNC mill from aluminum. The majority of manufacturing is additive: gearbox gears and structural supports were printed on the Markforged printer in Onyx for high print resolution and strength. The carbon fiber body plates were cut on a waterjet.</p>

              <h3 style={h3Style}>Electronics & Software</h3>
              <p style={pStyle}>The robot uses two ESCs connected to a microcontroller. The microcontroller communicates with the ESCs via RX/TX serial, sending desired motor angles based on current flapping parameters. A Python communication script sends flapping trajectory commands and records motor and current data during experiments.</p>
            </div>
            <img src="/project_pitchingwing/manufacturin.jpg" alt="Manufacturing" style={{ width: "540px", display: "block", flexShrink: 0 }} />
          </div>
        </div>

        {divider}

        {/* Testing */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Testing</h2>

          <h3 style={h3Style}>Gearbox Efficiency</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start", marginBottom: "3rem" }}>
            <div>
              <p style={{ ...pStyle, marginBottom: "1.5rem" }}>The first test sought to quantify frictional losses in the gearbox with no wing load as a measure of gearbox efficiency. Tests were run at 0.5 Hz increments from 0 to 5 Hz with 30 degree flapping amplitude and 21 degree pitch amplitude, the optimal thrust production condition. Both Nylon and Onyx gearbox configurations were tested.</p>
              <p style={pStyle}>The Onyx gearbox showed 8% power loss at peak frequency, an acceptable level that validates the design and manufacturing of the gearbox. At lower frequencies the Nylon gearbox performed marginally better, but at higher frequencies the Onyx gearbox was significantly more efficient, attributed to higher gear print resolution, reduced spacer compliance from metal spacers, and lower friction between metal and plastic. Given the much higher loads during actual flapping, the Onyx configuration was the clear choice.</p>
            </div>
            <img src="/project_pitchingwing/gearboxeffieicny.png" alt="Gearbox efficiency" style={{ width: "540px", display: "block", flexShrink: 0 }} />
          </div>

          <h3 style={h3Style}>Reaching 5 Hz</h3>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ ...pStyle, marginBottom: "1.5rem" }}>With the robot mounted on a six-axis load cell, early flapping tests exposed the limits of the first design: above 4 Hz, the gearbox deflected under load, causing the gears to skip and disrupting the flapping cycle. Stiffening the gearbox with thicker supports enabled reliable flapping at 5 Hz, allowing the robot to begin answering the questions it was built for.</p>
            <video src="/project_pitchingwing/PitchingWingFlapCombo.mp4" controls style={{ width: "100%", display: "block" }} />
          </div>
        </div>

        {divider}

        {/* Results */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Results</h2>

          <h3 style={h3Style}>Effect of Active Pitch</h3>
          <p style={{ ...pStyle, marginBottom: "1.5rem" }}>In a wind-tunnel sweep of flap and pitch amplitudes at 4.5 Hz, commanding ±20° of pitch reduced power by 25 to 33% while lift changed by only -3 to 6%, raising lift per watt by 38 to 48% compared with no commanded pitch. Timing mattered as well: the right phase between pitch and flap increased thrust by 25%.</p>
          <img src="/project_pitchingwing/pitch_effect.png" alt="Power, lift, and lift per watt versus flap amplitude for five pitch amplitudes" style={{ width: "100%", display: "block", marginBottom: "3rem" }} />

          <h3 style={h3Style}>Bayesian Optimization</h3>
          <p style={{ ...pStyle, marginBottom: "1.5rem" }}>Testing every combination of five flapping parameters is impractical, so Bayesian optimization, which is rarely used in flapping-wing experiments, learned from each result to select the next trial. Within 79 trials at 5 m/s, it found a condition producing 3.69 N of lift with thrust exceeding drag: 39% more than the best grid-search result and more than the robot&apos;s 3.43 N weight.</p>
          <img src="/project_pitchingwing/bayes_opt.png" alt="Lift per trial during Bayesian optimization compared with the best grid-search lift and the robot's weight" style={{ width: "100%", display: "block", marginBottom: "3rem" }} />

          <h3 style={h3Style}>Feedforward Motor Control</h3>
          <p style={{ ...pStyle, marginBottom: "1.5rem" }}>The best condition sat at the drivetrain&apos;s limits, leaving no margin for stable flight. I implemented feedforward motor control based on measured motor parameters, cutting power draw by about 40%. In a wind-on comparison with velocity control, feedforward control reached 93 to 95% of the commanded flap amplitude from 4 to 5 Hz and halved the power required per newton of thrust. I am now using that margin to test faster flapping and larger wings.</p>
          <img src="/project_pitchingwing/controller.png" alt="Flap amplitude reached and power per newton of thrust for velocity control and feedforward control" style={{ width: "100%", display: "block" }} />
        </div>

        {divider}

        {/* Recognition & Collaboration */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Recognition & Collaboration</h2>
          <p style={pStyle}>I was one of three mechanical engineering students selected for SuperUROP, MIT&apos;s yearlong program for graduate-level undergraduate research, and I am preparing these results for journal publication and the SuperUROP Research Showcase. My demonstration to the University of Tokyo helped secure a $120,000 research partnership with the AURA Lab, and I have presented the work to flapping-wing researchers at EPFL. At the Cambridge Science Festival, I showed young students how the robot&apos;s motors and gearbox make its wings flap and twist.</p>
        </div>

        {divider}

        {/* Next Steps */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Next Steps</h2>
          <p style={{ ...pStyle, marginBottom: "1.5rem" }}>The immediate goal is to use the new power margin to find conditions with lift and thrust comfortably beyond what flight requires, leading to stable free flight. Beyond that, this robot has raised three questions I plan to pursue:</p>
          <p style={{ ...pStyle, marginBottom: "1.5rem" }}><strong>Wing design:</strong> how does wing flexibility interact with commanded pitch, and when should commanded pitch replace passive bending?</p>
          <p style={{ ...pStyle, marginBottom: "1.5rem" }}><strong>Wing motion:</strong> what is the optimal wing motion for each medium and task, such as cruising or climbing?</p>
          <p style={pStyle}><strong>Control:</strong> how much does active pitch improve efficiency and controllability in free flight and swimming?</p>
        </div>

      </div>
      <Footer />
    </div>
  );
}
