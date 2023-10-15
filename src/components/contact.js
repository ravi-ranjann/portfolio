import React from "react";
import resume from "../Ravi_Ranjan_Resume.pdf";

const Contact = ({ active }) => {
  return (
    <section
      className={active === "contact" ? "container contact active" : "container contact"}
      id="contact"
    >
      <div className="contact-container">
        <div className="main-title">
          <h2>
            Contact <span>Me</span>
            <span className="bg-text">Contact</span>
          </h2>
        </div>
        <div className="contact-content-con">
          <div className="left-contact">
            <h4>Contact me here</h4>
            <p>
              "Hello there! I'm Ravi Ranjan, a seasoned Software Engineer. Whether you have inquiries, 
              exciting project opportunities, or just wish to connect, don't hesitate to reach out! 
              Your suggestions are more than welcome. I'm enthusiastic about learning and advancing 
              in my field, so any feedback or advice you have would be immensely valuable and appreciated."
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Location</span>
                </div>
                <p>: Bangalore, India</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                  <span>Email</span>
                </div>
                <p>
                  <span>: rraviranjann@gmail.com</span>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-user-graduate"></i>
                  <span>Education</span>
                </div>
                <p>
                  <span>: NIT Calicut, Kerala</span>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-user-graduate"></i>
                  <span>Mobile Number</span>
                </div>
                <p>
                  <span>: +91 7736269386</span>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-globe-africa"></i>
                  <span>Languages</span>
                </div>
                <p>
                  <span>: Hindi, English</span>
                </p>
              </div>
            </div>
            <div className="contact-icons">
              <div className="contact-icon">
                {/* <a
                  href="#"
                  target="_blank"
                >
                  <i className="fab fa-whatsapp"></i>
                </a> */}

                <a
                  href="https://www.linkedin.com/in/ravi-ranjann/"target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/ravi-ranjann" target="_blank">
                  <i className="fab fa-github"></i>
                </a>

                <a href="mailto:rraviranjann@gmail.com" target="_blank">
                  <i className="far fa-envelope"></i>
                </a>

                <a href="#" target="_blank">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="right-contact">
            <form action="" className="contact-form" href='mailto:rraviranjann@gmail.com'>
              <div className="input-control i-c-2">
                <input type="text" required placeholder="YOUR NAME" />
                <input type="email" required placeholder="YOUR EMAIL" />
              </div>
              <div className="input-control">
                <input type="text" required placeholder="ENTER SUBJECT" />
              </div>
              <div className="input-control">
                <textarea
                  name=""
                  id=""
                  cols="15"
                  rows="8"
                  placeholder="Message Here..."
                ></textarea>
              </div>
              <div className="submit-btn">
                <a href={resume} className="main-btn">
                  <span className="btn-text">Send Mail</span>
                  <span className="btn-icon">
                    {/* <i className="fas fa-download"></i> */}
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
