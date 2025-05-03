import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/baseStyles.css';
import './styles/mobileStyles.css';
import './styles/tablet-styles.css';
import './styles/desktop-styles.css';
import './styles/large-screen.css';
import CTAButton from './ctaButton.jsx';


function Logo() {
    return(
        <Link to="/">
            <div className="logo-group">
            <div className="logo">
                <svg width="75" height="41" viewBox="0 0 75 41" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                <rect width="74.2004" height="41" fill="transparent"/>
                <path d="M64.0402 19.5525L63.3865 28.8162C53.2689 30.9108 37.3772 31.0283 37.3162 22.0003C37.2367 10.2259 66.3222 8.91588 66.3222 8.91588L64.0402 11.453" stroke="#1E90FF" stroke-width="4"/>
                <path d="M13.3929 32.0899C12.6049 32.1926 11.8996 32.272 11.2954 32.3306L14.6753 13.2355C20.1064 12.1733 26.6401 11.635 31.8721 12.3747C34.713 12.7763 36.9707 13.5283 38.4659 14.6036C39.865 15.6099 40.6146 16.8956 40.5981 18.7094C40.577 21.0227 39.0525 23.1732 36.0182 25.166C33.0163 27.1375 28.9288 28.6779 24.7323 29.8287C20.5625 30.9722 16.4184 31.6957 13.3929 32.0899Z" fill="var(--dark-theme-background-color)" stroke="#1E90FF" stroke-width="4"/>
                </svg>
            </div>
            <p className="logo-text">
              Design&nbsp;Gravitas
            </p>
        </div>
        </Link>
    );
}

function Navbar({isOpen}){
    return(
    <nav className={`nav-menu ${isOpen ? "nav-menu-open" : "" }`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="#services">Services</Link></li>
        <li><Link to="#contact">Contact</Link></li>
        <li style={{display: "none"}}><Link to="#about">About</Link></li>
      </ul>
    </nav>
    );
}

function HeaderCTA() {
    return(
      <CTAButton classNames={"cta-button hero-cta"} text="Book a Consultation" onclick={() => {window.location.href = 'https://calendar.app.google/zWsnSGkvrX9SMKug6'}} />
    );
}
function MenuCloseButton({isOpen, togglemenu}) {
  return(
    <div onClick={togglemenu} className = {`menu-close-button ${isOpen ? "menu-close-button-visible" : ""}`}></div>
  );
}

function MenuOpenButton({togglemenu}) {
    return(
        <svg className="menu-open-button" onClick={togglemenu} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    );
}
    

  function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggle = () => {
      setMenuOpen(menuOpen ? false : true);
    }
    return(
        <>
           <header className="header">
               <Logo />
               <Navbar isOpen = {menuOpen} />
               <MenuOpenButton togglemenu = {toggle} />
               <MenuCloseButton isOpen = {menuOpen} togglemenu = {toggle} />
               <HeaderCTA />
           </header>
        </>
    );
  }

  export default Header