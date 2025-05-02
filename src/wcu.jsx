import './styles/baseStyles.css';
import './styles/mobileStyles.css';
import './styles/tablet-styles.css';
import './styles/desktop-styles.css';
import './styles/large-screen.css';


function WCU (){
    return(
        <>
          <section className="why-choose-us-section">
        <h2 className="wcu-heading">Why choose us</h2>
        <div className="wcu-cards-list">
          <div className="wcu-card card-container">
            <div className="card" >
              <div className="card-face card-front">
                <h3 className="wcu-card-heading card-front">Expertise &amp;<br /> Experience</h3>
              </div>
              <div className="card-face card-back">
                  <ul>
                    <li>100% Success Score on the top freelance platform <a href="https://www.upwork.com/freelancers/googleindexingexpert" style={{color: "white"}}>UpWork</a></li>
                  <li>Top Rated developers with verified skills in today’s top tech stacks</li>
                  <li>Years of hands-on experience across diverse industries and project types</li>
                  <li>Continuous upskilling to stay ahead in the fast-evolving tech landscape</li>
                  </ul>
              </div>
            </div>
          </div>
          <div className="wcu-card card-container">
            <div className="card">
              <div className="card-face card-front">
                <h3 className="wcu-card-heading card-front">Results-oriented<br />Approach</h3>
              </div>
                <div className="card-face card-back">
                <ul>
                    <li> We focus on conversions, not just pretty designs</li>
                    <li>SEO-optimized, mobile-first design as default</li>
                    <li>Built with performance, speed, and accessibility in mind</li>
                    <li>Analytics-ready integration to track success from day one</li>
                </ul>
                </div>
            </div>
          </div>
          <div className="wcu-card card-container">
            <div className="card" >
              <div className="card-face card-front">
                <h3 className="wcu-card-heading card-front">Custom Solutions</h3>
              </div>
                <div className="card-face card-back">
                <ul>
                    <li>Tailored solutions</li>
                    <li>Designs aligned with your vision, industry, and audience</li>
                    <li>Fully customizable features and layout flexibility</li>
                    <li>Collaborative process with regular design reviews</li>
                </ul>
                </div>
            </div>
          </div>
          <div className="wcu-card card-container">
            <div className="card" >
              <div className="card-face card-front">
                <h3 className="wcu-card-heading card-front">End-to-End<br />Services</h3>
              </div>
                <div className="card-face card-back">
                <ul>
                    <li>From concept to launch and beyond</li>
                    <li>Design, development, hosting, and ongoing support</li>
                    <li>UX/UI design, frontend & backend dev, CMS setup, and more</li>
                    <li>Optional maintenance & upgrade plans to keep your site sharp</li>
                </ul>
                </div>
            </div>
            </div>
            <div className="wcu-card card-container">
              <div className="card" >
                <div className="card-face card-front">
                  <h3 className="wcu-card-heading card-front">Client-focused<br />partnership</h3>
                </div>
                <div className="card-face card-back">
                <ul>
                    <li>24/7 customer support and quick turnaround on queries</li>
                    <li>Clear, consistent communication throughout the project</li>
                    <li>Weekly updates, milestone check-ins, and post-launch support</li>
                </ul>
                </div>
            </div>
            </div>
            <div className="wcu-card card-container">
              <div className="card" >
                <div className="card-face card-front">
                  <h3 className="wcu-card-heading card-front">On time, Everytime</h3>
                </div>
                <div className="card-face card-back">
                <ul>
                    <li>Trackable milestones from start to finish</li>
                    <li>Reliable timelines with built-in buffer for peace of mind</li>
                    <li>100% on-time delivery record across past projects</li>
                </ul>
                </div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}
export default WCU;