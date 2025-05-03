import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Header from './header.jsx';
import Hero from './hero.jsx';
import Services from './services.jsx';
import WCU from './wcu.jsx';
import Clients from './clients.jsx';
import Contact from './contact.jsx';
import Footer from './footer.jsx';

function App() {
  const [instate, setinstate] = useState(false);
  const servicesSection = useRef(null);
  const wcuSection = useRef(null);
  const logos = useRef(null);
  const contact = useRef(null);
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.95,
    };
    let Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          console.log("intersecting!");
          entry.target.querySelectorAll(" .service-container ").forEach((el) => {
            el.classList.add("desktopshow");
          });
        }
      });
    }
    ,options);

    Observer.observe(servicesSection.current);

  },);

  // ref={wcuSection}
  // ref={logos}
  // ref={contact}


  return(
    <>
      <Header />
      <Hero />
      <Services ref={servicesSection} />
      <WCU  />
      <Clients  />
      <Contact  />
      <Footer />
    </>
  );
}

export default App;