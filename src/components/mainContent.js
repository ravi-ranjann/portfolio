import React, { useState } from 'react';
import Home from './home';
import About from "./about";
import Work from './work';
import Interest from './interest';
import Contact from './contact';
import Control from './control';

const MainContent = () => {
    const [active, setActive] = useState('home');
    const [defaultTheme, setDetaultTheme] = useState(false);

    return (
        <div className={defaultTheme ? 'light-mode light-mode-color' : '' }>
            <Home active={active} />
            <main>
            <About  active={active}/>
            {/* <Work  active={active}/> */}
            {/* <Interest  active={active}/> */}
            <Contact  active={active}/>

                <div className="theme-btn" onClick={() => setDetaultTheme(!defaultTheme)}>
                    <i className="fas fa-adjust"></i>
                </div>
            </main>
            <Control setActive={setActive} active={active} />
        </div>
        
    )
}

export default MainContent;