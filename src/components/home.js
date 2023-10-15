import React from "react";
import profilePic from '../profile-pic.jpeg';
import resume from '../Ravi_Ranjan_Resume.pdf';

const Home = ({active}) => {
  return (
    <header className={active === 'home' ? 'container header active' : 'container header'} id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src={profilePic} alt="" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span>Ravi Ranjan.</span>
            Explore my creative realm.
          </h1>
          <p>
            As an engineer with over 7+ years of dedicated experience in the IT industry and passion for coding. 
            I am self-driven and quick to start, thriving on solving complex real-world problems. 
            I have consistently demonstrated excellence in designing and developing sophisticated web 
            applications with intuitive user interface design. 
            Let's embark on a journey of code and creativity together!
            <div className="btn-con mt-10">
              <a href={resume} className="main-btn" target="_blank">
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">
                  <i className="fas fa-download"></i>
                </span>
              </a>
            </div>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Home;
