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

export default function Project5() {
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
          Sunscreen Efficacy Research
        </h1>

        {/* Overview */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Overview</h2>
          <p style={{ ...pStyle, marginBottom: "1.25rem" }}>For my measurement and instrumentation class, I was tasked with using advanced measurement and data interpretation techniques to quantify a phenomenon of my choosing. I was interested in understanding the main controlling factors of UV blockage with sunscreen. I produced a research poster and paper and presented my findings.</p>
          <p style={pStyle}>After researching the topic, I found that areal density, the weight per unit area of applied sunscreen, and SPF had the largest effect on UV blockage. While the individual effects of each had been studied, their interaction had not. I set out to understand how SPF affects the rate of UV attenuation with increasing areal density. This required applying different SPF sunscreens at varying weights on microscope slides and measuring UV transmission through each. The project successfully demonstrated logarithmically increasing rates of UV attenuation with SPF, consistent with an analytical model. The full details are presented below.</p>
        </div>

        {divider}

        {/* Abstract */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Abstract</h2>
          <p style={pStyle}>The interaction between the Sun Protection Factor and areal density of sunscreen, or the weight per unit area, is a critical but not well understood factor in blocking UV. To understand how SPF impacts the relationship between areal density and both UVA and UVB transmission, the influence of SPF on the rate of UV attenuation with increasing areal density was characterized. UV transmission through different SPFs applied at varying areal densities was measured with UV sensors. UV transmission decreased exponentially with areal density, and the attenuation coefficients, determining the rate of attenuation, increased logarithmically from the lowest to highest SPF by 132 ± 38% for UVA and 75 ± 23% for UVB. Consequently, the higher SPF sunscreens approached their standard UV blockage, at an areal density of 2 mg/cm², more quickly than the lower SPF sunscreens, suggesting that consumers could employ a higher SPF to mitigate the harm of underapplication.</p>
        </div>

        {divider}

        {/* Poster */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Poster</h2>
          <img src="/project_sunscreen/FinalPoster.png" alt="Research poster" style={{ width: "100%", display: "block" }} />
        </div>

        {divider}

        {/* Paper */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Paper</h2>
          <iframe
            src="/project_sunscreen/Final%20Paper.pdf"
            style={{ width: "100%", height: "900px", border: "none", display: "block" }}
            title="Research paper"
          />
        </div>

      </div>
      <Footer />
    </div>
  );
}
