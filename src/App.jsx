import Layout from './Layout.jsx';
import Home from './Home.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme.jsx';

const App = () => {
  return(
    <ThemeProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;