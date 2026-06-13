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

export default function Project9() {
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
          Machine Learning for PDEs
        </h1>

        {/* Overview */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Overview</h2>
          <p style={pStyle}>For my machine learning class, we explored how machine learning can recover the underlying parameters of a spring lattice material purely from displacement data observed under forcing. My focus was the PDE-based approach, in which a spring lattice system serves as a discrete approximation to a continuous material. The goal was to train a neural network to learn the material's constitutive law, specifically the stress-strain law, from displacement and boundary reaction data alone, enabling the discovery of physical material properties from observed deformation. The other approach explored was an ODE-based approach, through which the underlying spring constants could be identified directly, rather than a continuum constitutive approximation.</p>
        </div>

        {divider}

        {/* Problem Setup */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Problem Setup</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start" }}>
            <p style={{ ...pStyle, marginBottom: "1.5rem" }}>The domain is a 2D spring lattice with nodes connected by nearest-neighbor springs. Two material models were considered: linear springs and nonlinear Duffing springs, which produce strain-stiffening behavior. The lattice is subjected to three distinct load cases, vertical pull, shear, and biaxial loading, each at five displacement levels, giving 15 training snapshots. Each load case illuminates a different component of the constitutive tensor, making all three necessary to fully identify the material law from the available measurements. The measured boundary reaction forces were recorded, and the displacement fields together with these reaction forces served as the training data for the model.</p>
            <img src="/project_ml/data.png" alt="Training data" style={{ width: "480px", display: "block", flexShrink: 0 }} />
          </div>
        </div>

        {divider}

        {/* Approach */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Approach</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start", marginBottom: "3rem" }}>
            <div>
              <h3 style={h3Style}>Displacement to Strain</h3>
              <p style={pStyle}>Simulated nodal displacements from the lattice were converted to continuous strain fields using Gaussian kernel smoothing, with spatial derivatives computed analytically by differentiating the kernel. This avoids the noise amplification of finite differencing and produces clean strain fields.</p>
            </div>
            <img src="/project_ml/displacements.png" alt="Displacement fields" style={{ width: "450px", display: "block", flexShrink: 0 }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start", marginBottom: "3rem" }}>
            <div>
              <h3 style={h3Style}>Neural Network Architecture</h3>
              <p style={pStyle}>The constitutive law was parameterised as an Input Convex Neural Network (ICNN) that learns the strain energy density as a function of two strain invariants. Stresses are recovered by automatic differentiation of the energy with respect to strain. The ICNN architecture enforces convexity of the energy by construction, a fundamental physical requirement that significantly improves learning.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flexShrink: 0 }}>
              <img src="/project_ml/model.png" alt="Model architecture" style={{ width: "450px", display: "block" }} />
              <img src="/project_ml/modelstrain.png" alt="Model strain" style={{ width: "563px", display: "block" }} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start", marginBottom: "3rem" }}>
            <div>
              <h3 style={h3Style}>Physics-Constrained Loss</h3>
              <p style={pStyle}>Training is fully unsupervised with respect to stress. The loss has two terms: an interior equilibrium term that penalises violation of momentum balance across the domain, and a boundary reaction term that matches predicted integrated stresses to measured global reaction forces. The reaction term pins the absolute stress scale, which the equilibrium term alone cannot determine. An adaptive penalty schedule automatically balances the two terms throughout training to prevent either from dominating.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flexShrink: 0 }}>
              <img src="/project_ml/loss1.png" alt="Loss term 1" style={{ width: "450px", display: "block" }} />
              <img src="/project_ml/loss2.png" alt="Loss term 2" style={{ width: "450px", display: "block" }} />
            </div>
          </div>

          <h3 style={h3Style}>Training</h3>
          <p style={pStyle}>The model was trained using Adam with cosine annealing and gradient clipping, with best-checkpoint tracking across the full training run. An ensemble of 10 independently seeded runs was trained, with the best selected by minimum evaluation loss. This ensemble approach guards against poor local minima and provides confidence in the result.</p>
        </div>

        {divider}

        {/* Results */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Results</h2>
          <p style={{ ...pStyle, marginBottom: "1.5rem" }}>The model successfully recovered constitutive stress-strain curves consistent with both the linear and nonlinear material models, with boundary reaction predictions closely matching measured values. Interior force balance was satisfied across the domain. The multi-load-case training strategy was essential, as single load cases left components of the constitutive tensor unconstrained, while the combined three-case training produced a fully identified material law. As a final validation, displacements were simulated using FEM with the learned constitutive law and closely matched the original input displacements used for training. This project provided valuable insight into what is required for successful learning for physical material systems and laid the groundwork for learning important material properties from simply observing displacements.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <img src="/project_ml/resultinglaws.png?v=2" alt="Resulting constitutive laws" style={{ width: "100%", display: "block" }} />
            <img src="/project_ml/resultingfields.png?v=2" alt="Resulting stress fields" style={{ width: "100%", display: "block" }} />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
