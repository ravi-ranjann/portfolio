import React from "react";

const Work = ({active}) => {
  return (
    <section className={active === 'work' ? 'container active' : 'container'} id="portfolio">
      <div className="main-title">
        <h2>
          My <span>Projects</span>
          <span className="bg-text">My Work</span>
        </h2>
      </div>
      <p className="port-text">
        Here is some of my work that I've done in various programming languages.
      </p>
      <div className="portfolios">
        <div className="portfolio-item">
          <div className="image">
            <img src="img/urlpng.png" alt="" />
          </div>
          <div className="hover-items">
            <h3>URL Shortly Website</h3>
            <p>
              &nbsp;&nbsp; &nbsp;The project aims to provide a URL shortening
              &nbsp;&nbsp;service, allowing users to convert long URLs into
              &nbsp;&nbsp;shorter ones.
            </p>
            <div className="icons">
              <a
                href="https://github.com/Utkarssh11/URL-Shortly"
                className="icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a
                href="https://utkarssh11.github.io/URL-Shortly/"
                className="icon"
              >
                <i className="fas fa-search"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src="img/novagif.gif" alt="" />
          </div>
          <div className="hover-items">
            <h3>Dyna Prime</h3>
            <p>
              &nbsp; &nbsp;Dynaprime is a sleek and futuristic website that
              &nbsp;&nbsp;&nbsp;showcases a range of productivity software.
            </p>
            <br />
            <div className="icons">
              <a
                href="https://github.com/Utkarssh11/DynaPrime"
                className="icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a
                href="https://utkarsh11-dynaprime.netlify.app/"
                className="icon"
              >
                <i className="fas fa-search"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src="img/dyna ecom.gif" alt="" />
          </div>
          <div className="hover-items">
            <h3>Dyna E-commerce Website</h3>
            <p>
              &nbsp; &nbsp;Dyna is designed to be fully responsive, ensuring
              &nbsp;&nbsp;&nbsp;compatibility with different screen sizes and
              &nbsp;&nbsp;&nbsp;resolutions for optimal user experience.
            </p>
            <br />
            <div className="icons">
              <a
                href="https://github.com/Utkarssh11/Dyna-Prime-e-commerce-website"
                className="icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a
                href="https://utkarssh11.github.io/Dyna-Prime-e-commerce-website/"
                className="icon"
              >
                <i className="fas fa-search"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src="img/dynacare.png" alt="" />
          </div>
          <div className="hover-items">
            <h2> Dyna Care </h2>
            <p>
              &nbsp; &nbsp;One stop solution for developers to take care of
              &nbsp;&nbsp;&nbsp;their health!&nbsp;&nbsp;
            </p>
            <div className="icons">
              <a
                href="https://github.com/Utkarssh11/Dyna-Care"
                className="icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a
                href="https://dynacare-utkarssh11.vercel.app/"
                className="icon"
              >
                <i className="fas fa-search"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src="img/sleek.png" alt="" />
          </div>
          <div className="hover-items">
            <h3>Sleek UI library</h3>
            <p>
              &nbsp; &nbsp;Sleek UI is a CSS component library that will help
              &nbsp;&nbsp;&nbsp;you to build your websites faster.
            </p>
            <br />
            <div className="icons">
              <a
                href="https://github.com/Utkarssh11/sleekUI-library"
                className="icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a
                href="https://utkarssh11.github.io/sleekUI-library/"
                className="icon"
              >
                <i className="fas fa-search"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src="img/skill.png" alt="" />
          </div>
          <div className="hover-items">
            <h3>Skill Exhibit</h3>
            <p>
              &nbsp; &nbsp;Showcase your developer skills in 2 minutes! Build
              &nbsp; &nbsp;&nbsp; your developer portfolio using SkillExhibit!
            </p>
            <br />
            <div className="icons">
              <a
                href="https://github.com/Utkarssh11/Skill-Exhibit"
                className="icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a
                href="https://skill-exhibit-utkarssh11.vercel.app/"
                className="icon"
              >
                <i className="fas fa-search"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src="img/port7.jpg" alt="" />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
