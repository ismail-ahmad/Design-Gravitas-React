import { Link } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "./theme";

const Nav = () => {
  const {theme} = useContext(themeContext);
    const list = ['Home', 'Services', 'Contact', 'About', 'Blog'];
    return(
        <nav>
            <ul
              style={{
                listStyleType: 'none',
                display: 'flex',
                flexFlow: 'row nowrap',
                width: '300px',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: '0',
                height: '100%'
              }}
            >
            {
             list.map((item, index) => (<li key={index}><Link to={item.toLowerCase() === 'home' ? '' : item.toLowerCase()} >{item}</Link></li>))
            }
            </ul>
        </nav>
    );
}

export default Nav;