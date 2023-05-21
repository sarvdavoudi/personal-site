import "./ContactBox.css";
const ContactBox = () => {
  return (
    <>
      <h1 className="heading" id="contact">contact me !</h1>
      <div className="contact-box">
        <div className="contact">
          {/* email icon */}
          <div className="email_icon">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsxlink="http://www.w3.org/1999/xlink"
              height="50px"
              x="0px"
              y="0px"
              viewBox="0 0 330.001 330.001"
              xmlspace="preserve"
            >
              <g id="XMLID_348_">
                <path
                  id="XMLID_350_"
                  d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602 L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"
                ></path>
                <polygon id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 	"></polygon>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
          <p className="email-title">Email address</p>
          <a title="SarvDavoudi@gmail.com" target="_blank" href="mailto: SarvDavoudi@gmail.com">
            SarvDavoudi@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};
export default ContactBox;
