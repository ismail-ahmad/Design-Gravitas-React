import Layout from './Layout.jsx';
import Home from './Home.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import BlogsPage from './blog.jsx';
import Blog1 from './blog/blog-one';
import Blog2 from './blog/blog-two';
import Blog3 from './blog/blog-three'
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
          <Route path='blog' element={<BlogsPage />}>
            <Route index element={<div>Select a blog post to read.</div>} />
            <Route path='blog-one' element={<Blog1 />} ></Route>
            <Route path='blog-two' element={<Blog2 />} ></Route>
            <Route path='blog-three' element={<Blog3 />} ></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;