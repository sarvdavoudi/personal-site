import "./Experience.css";

const Experience = () => {
  return (
    <>
      <h1 className="experience_heading"> Experience</h1>
      <div className="experience">
        <div className="experience-box">
          <div className="experience_bullet-orange"></div>
          <div className="organize-div">
            <div className="experience_date">March 2022 - October 2022, Tehran, Iran</div>
            <div className="experience_info">
              <p className="experience_info_title">Software testing expert in Chargoon </p>
              <p className="experience_info_desc">Chargoon is an company that....... </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="divider" style={{ margin: "100px 300px 0px 200px" }} />
    </>
  );
};

export default Experience;
