import "./Education.css";

const Education = () => {
  return (
    <>
      <h1 className="education__heading">Education</h1>
      <div className="education">
        <div className="education__container">
          <div className="education--bullet-orange"></div>
          <div className="organize-div">
            <div className="education__date">2020-2023,Tehran, Iran</div>
            <div className="education__info">
              <p className="education__info--title">Master of computer engineering</p>
              <p className="education__info--desc">software branch at Malek Ashtar university </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider-line" style={{ margin: "100px 300px 0px 200px" }} />
    </>
  );
};

export default Education;
