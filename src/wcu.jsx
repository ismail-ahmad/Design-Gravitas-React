import { useState } from 'react';
import './styles/baseStyles.css';
import './styles/mobileStyles.css';
import './styles/tablet-styles.css';
import './styles/desktop-styles.css';
import './styles/large-screen.css';

function CardContainer({listItems, title}) {
  const [mouseenter, setmouseenter] = useState(false);
  const [rotation, setRotation] = useState(false);
  return(
    <div onMouseEnter={() => {setmouseenter(true)}} onMouseLeave={() => {setmouseenter(false); setRotation(false)}} className="wcu-card card-container">
            <div className={`card ${rotation ? "flip": ""} ${mouseenter ? 'card-mouseenter': ""}`} onMouseUp={() => {setRotation(true)}}>
              <div className="card-face card-front">
                <h3 className="wcu-card-heading card-front">{title}</h3>
              </div>
              <div className="card-face card-back">
                  <ul>
                    {listItems.map((item, index) => (
                      <li key={index}>
                      {item}
                    </li>
                    ))}
                  </ul>
              </div>
            </div>
          </div>
  );
}


function WCU (){
    return(
        <>
          <section className="why-choose-us-section">
        <h2 className="wcu-heading">Why choose us</h2>
        <div className="wcu-cards-list">
          <CardContainer title={<>Expertise &amp; <br /> Experience</>} listItems={
            [<>100% Success Score on the top freelance platform <a href="https://www.upwork.com/freelancers/googleindexingexpert">UpWork</a></>,
            'Top Rated developers with verified skills in today\’s top tech stacks',
            'Years of hands-on experience across diverse industries and project types',
            'Continuous upskilling to stay ahead in the fast-evolving tech landscape'
          ]
          } />
          <CardContainer title={<>Results-oriented<br />Approach</>} listItems={
            ['We focus on conversions, not just pretty designs', 
            'SEO-optimized, mobile-first design as default',
            'Built with performance, speed, and accessibility in mind',
            'Analytics-ready integration to track success from day one'
          ]
          } />
          <CardContainer title={<>Custom Solutions</>} listItems={
            ['Tailored solutions', 
            'Designs aligned with your vision, industry, and audience',
            'Fully customizable features and layout flexibility',
            'Collaborative process with regular design reviews'
          ]
          } />
          <CardContainer title={<>End-to-End<br />Services</>} listItems={
            ['From concept to launch and beyond', 
            'Design, development, hosting, and ongoing support',
            'UX/UI design, frontend & backend dev, CMS setup, and more',
            'Optional maintenance & upgrade plans to keep your site sharp'
          ]
          } />
          <CardContainer title={<>Client-focused<br />partnership</>} listItems={
            ['24/7 customer support and quick turnaround on queries', 
            'Clear, consistent communication throughout the project',
            'Weekly updates, milestone check-ins, and post-launch support'
          ]
          } />
          <CardContainer title={<>On time, Everytime</>} listItems={
            ['Trackable milestones from start to finish', 
            'Reliable timelines with built-in buffer for peace of mind',
            '100% on-time delivery record across past projects'
          ]
          } />
        </div>
      </section>
        </>
    );
}
export default WCU;