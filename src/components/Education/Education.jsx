import "./Education.css";

const Education = () => {
  return (
    <>
      <h1 className="education_heading">Education</h1>
      <div className="education">
        <div className="education-box">
          <div className="education_bullet-orange"></div>
          <div className="organize-div">
            <div className="education_date">2020-2023,Tehran, Iran</div>
            <div className="education_info">
              <p className="education_info_title">Master of computer engineering</p>
              <p className="education_info_desc">software branch in Malek Ashtar university </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" style={{ margin: "100px 300px 0px 200px" }} />
    </>
  );
};

export default Education;
