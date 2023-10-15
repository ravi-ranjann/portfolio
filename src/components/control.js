import React from "react";

const Control = ({setActive, active}) => {

    const getClass = (type) => {
        return active === type ? 'active-btn control' : 'control';
    }

  return (
    <div className="controls">
      <div className={getClass('home')} data-id="home" onClick={()=> setActive('home')}>
        <i className="fas fa-home"></i>
      </div>
      <div className={getClass('about')} data-id="about" onClick={()=> setActive('about')}>
        <i className="fas fa-info"></i>
      </div>
      {/* <div className={getClass('work')} data-id="portfolio" onClick={()=> setActive('work')}>
        <i className="fas fa-folder-open"></i>
      </div>
      <div className={getClass('interest')} data-id="blogs" onClick={()=> setActive('interest')}>
        <i className="fas fa-laptop-code"></i>
      </div> */}
      <div className={getClass('contact')} data-id="contact" onClick={()=> setActive('contact')}>
        <i className="fas fa-handshake"></i>
      </div>
    </div>
  );
};

export default Control;
