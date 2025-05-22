import { Outlet } from "react-router-dom";
import Nav from './Nav.jsx';
import { useContext } from "react";
import { themeContext } from "./theme.jsx";

const Layout = () => {
    const {theme, setTheme} = useContext(themeContext);
    console.log(theme);
  return (
    <div className={`${theme}-theme`} style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'arial',
        padding: '1rem'
      }}>
        <div><p>Design Gravitas</p></div>
        <Nav />
        <button onClick={(e) => {e.preventDefault(); setTheme((state) => {return state === 'light' ? 'dark' : 'light' })}} className={`${theme}-theme theme-button`}>{ theme === 'light' ? 'Switch to Dark' : 'Switch to light' }</button>
      </header>

      <main style={{
        flex: 1, 
        padding: '1rem',
      }}>
        <Outlet />
      </main>

      <footer style={{
        padding: '1rem',
        textAlign: 'center',
      }}>
        Design Gravitas, all rights Reserved.
      </footer>
    </div>
  );
}

export default Layout;