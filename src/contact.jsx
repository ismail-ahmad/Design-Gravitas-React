import './styles/baseStyles.css';
import './styles/mobileStyles.css';
import './styles/tablet-styles.css';
import './styles/desktop-styles.css';
import './styles/large-screen.css';


function Contact() {
    return(
        <>
          <section className="contact-section" id="contact">
        <h2 className="contact-heading">Contact</h2>
        <div className="contact-container">
            <p className="contact-content">Ready to transform your digital presence? We're just as excited as you are!<br />Let's create something brilliant together!</p>
            <div className="contact-button-container">
                <p className="contact-banner" onClick={() => {window.location.href='mailto:ismail.ahmad@designgravitas.com'}}><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--blue)"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg> <span>Write to us!</span></p>
                <p className="contact-banner" onClick={() => {window.location.href='https://calendar.app.google/zWsnSGkvrX9SMKug6'}}><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--blue)"><path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg><span>Schedule a Meeting</span></p>
            </div>
        </div>
    </section>
        </>
    );
}

export default Contact;