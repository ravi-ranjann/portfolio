import React from 'react';
import resume from '../Ravi_Ranjan_Resume.pdf';

const About = ({active}) => {

    return (
        <section className={active === 'about' ? 'container about active' : 'container about'} id="about">
            <div className="main-title">
                <h2>About <span>me</span><span className="bg-text">my stats</span></h2>
            </div>
            <div className="about-container">
                <div className="left-about">
                    <h4>Education</h4>
                   <p>Achieved a <strong>Master's in Computer Applications (MCA)</strong> from the <strong>National Institute of Technology, Calicut, India</strong> in 2016.</p>
                    <div className="btn-con">
                        <a href={resume} className="main-btn" target='_blank'>
                            <span className="btn-text">Download CV</span>
                            <span className="btn-icon"><i className="fas fa-download"></i></span>
                        </a>
                    </div>
                </div>
                <div className="right-about">
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">Coforge</p>
                            <p className="small-text"> Technical Analyst</p>
                            <p className="small-text"> From Oct, 2022 - present</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">Decision Minds</p>
                            <p className="small-text">From Nov 2018 - Sep 2022</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">Sandeb Tech</p>
                            <p className="small-text"> From Feb 2018 - Oct 2018</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">WhyAble</p>
                            <p className="small-text">Jun 2016 - Feb 2018</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-stats">
                <h4 className="stat-title">My Skills</h4>
                <div className="progress-bars">
                    <div className="progress-bar">
                        <p className="prog-title">html</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">css</p>
                        <div className="progress-con">
                            <p className="prog-text">95%</p>
                            <div className="progress">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">javascript</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">ReactJS</p>
                        <div className="progress-con">
                            <p className="prog-text">98%</p>
                            <div className="progress">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">NextJS</p>
                        <div className="progress-con">
                            <p className="prog-text">70%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title"> Python</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">NodeJs</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">TypeScript</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Redux</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Redux-Thunk</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Micro Frontend</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">JQuery</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Bootstrap</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Clarity</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Kendo UI</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">GIT</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Jest</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Data Structure</p>
                        <div className="progress-con">
                            <p className="prog-text">70%</p>
                            <div className="progress">
                                <span className="python"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Webpack</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Responsive Web Design</p>
                        <div className="progress-con">
                            <p className="prog-text">85%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="stat-title">Services and Support</h3>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-award"></i>
                    </div>
                    <p className="tl-duration">Web Design</p>
                    <p>Design the web using HTML and CSS or as per request.</p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-award"></i>
                    </div>
                    <p className="tl-duration">Web Development</p>
                    <p>Develop the web application using latest technology or as per request.</p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-award"></i>
                    </div>
                    <p className="tl-duration">FrontEnd Development</p>
                    <p>Develop client side application and integrate with API's</p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-award"></i>
                    </div>
                    <p className="tl-duration">Full Stack Development</p>
                    <p>Develop the complete application from scratch using Django, React, Next or as per request. </p>
                </div>
            </div>
        </section>
    )
}

export default About;