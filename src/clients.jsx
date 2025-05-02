import './styles/baseStyles.css';
import './styles/mobileStyles.css';
import './styles/tablet-styles.css';
import './styles/desktop-styles.css';
import './styles/large-screen.css';
import MWSLogo from'./assets/clients-logo/MWS-Logo.png';
import colorit from './assets/clients-logo/color-it.png';
import BRlogo from './assets/clients-logo/br-logo.png';
import GIK from './assets/clients-logo/gik_logo.jpeg';
import Merch from './assets/clients-logo/M.webp';
import Zee from './assets/clients-logo/zee.png';
import thefurnitureshack from './assets/clients-logo/the-furniture-shack.webp';


function Clients() {
    return(
        <>
          <section className="our-clients">
              <h2 className="our-clients-heading">Our Clients</h2>
              <div className="logos-container">
              <div className="client-logo"><img height="80px" width="192px" src={MWSLogo} alt="Michael Web Services logo" /></div>
              <div className="client-logo white-bg"><img height="80px" width="209px" src={colorit} alt="Color it logo" /></div>
              <div className="client-logo"><img height="80px" width="86px" src={BRlogo} alt="Bookroo logo" /></div>
              <div className="client-logo"><img height="80px" width="80px" src={GIK} alt="GiK logo" /></div>
              <div className="client-logo"><img height="80px" width="80px" src={Merch} alt="Merch Logo" /></div>
              <div className="client-logo"><img height="80px" width="80px" src={Zee} alt="Zyrous Logo" /></div>
              <div className="client-logo white-bg"><img width="558px" height ="78px" src={thefurnitureshack} alt="The Furniture shack logo" /></div>
              </div>
          </section>
        </>
    );
}

export default Clients;