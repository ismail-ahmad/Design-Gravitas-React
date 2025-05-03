import './styles/baseStyles.css';
import './styles/mobileStyles.css';
import './styles/tablet-styles.css';
import './styles/desktop-styles.css';
import './styles/large-screen.css';
import CTAButton from './ctaButton.jsx';
import { useEffect, useRef } from 'react';


function Hero() {
  const heroContainer = useRef(null) ;
    const heroListFirst = useRef(null) ;
    const heroListSecond = useRef(null) ;
    const heroListThird = useRef(null) ;
    const heroText = useRef(null) ;
    const h1 = useRef(null) ;
    const heroCTA = useRef(null);

  useEffect(() => {
    [heroContainer, heroListFirst, heroListSecond, heroListThird, heroText, h1].forEach((el) => {
      el.current.style.opacity = "1";
      el.current.style.transform = "translateX(0)";
    });
    if(heroCTA.current) {
      heroCTA.current.style.opacity = "1";
    }
  }, []);
    return(
        <>
          <section className="hero-section">
      <div>
        <div ref={heroContainer} className="hero-container">
        <h1 ref={h1} className="h1">Transforming Brands with Innovative Web Design &amp; Development</h1>
        <p ref={heroText} className="hero-text">Elevate Your Brand with our <i>D3G</i> approach, Your Complete Digital Journey</p>
        <ul className="hero-list">
          <li ref={heroListFirst} className="hero-list-first">
            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg>
                <i>Design</i></li>
          <li ref={heroListSecond} className="hero-list-second">
            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg>
                <i>Develop &amp; Deploy</i></li>
          <li ref={heroListThird} className="hero-list-third">
            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg>
                <i>Grow</i> your Business</li>
        </ul>
        <CTAButton ref={heroCTA} classNames={"cta-button hero-cta"} onclick={() => {window.location.href='mailto:ismail.ahmad@designgravitas.com'}} text="Get a Free Quote" />
      </div>
      </div>
    </section>
        </>
    );
}

export default Hero;