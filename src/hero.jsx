import './styles/baseStyles.css';
import './styles/mobileStyles.css';
import './styles/tablet-styles.css';
import './styles/desktop-styles.css';
import './styles/large-screen.css';


function Hero() {
    return(
        <>
          <section className="hero-section">
      <div>
        <div className="hero-container">
        <h1 className="h1">Transforming Brands with Innovative Web Design &amp; Development</h1>
        <p className="hero-text">Elevate Your Brand with our <i>D3G</i> approach, Your Complete Digital Journey</p>
        <ul className="hero-list">
          <li className="hero-list-first">
            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg>
                <i>Design</i></li>
          <li className="hero-list-second">
            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg>
                <i>Develop &amp; Deploy</i></li>
          <li className="hero-list-third">
            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.39939 13.5005L0 7.10107L1.59985 5.50123L6.39939 10.3008L16.7002 0L18.3 1.59985L6.39939 13.5005Z" fill="#FF7043"/></svg>
                <i>Grow</i> your Business</li>
        </ul>
        <div className="button-container">
          <button className="cta-button hero-cta" onClick={() => {window.location.href='mailto:ismail.ahmad@designgravitas.com'}}>Get a Free Quote</button>
        </div>
      </div>
      </div>
    </section>
        </>
    );
}

export default Hero;