import "./Home.css";
import { TypeAnimation } from "react-type-animation";

const home = () => {
  return (
    <div className="main-section">
      <div className="main-section_left"> </div>
      <div className="main-section-desc">
        <h3>Hey ! I Am</h3>
        <h1 >Sarvenaz Aghadavoudi</h1>
        <h2> I Am A</h2>
        {/* type animation by react-type-animation library */}
        <TypeAnimation sequence={["Font-End Developer", 1000, "Software engineer", 1000]} style={{ fontSize: "2em" }} repeat={Infinity} />
      </div>
    </div>
  );
};

export default home;
