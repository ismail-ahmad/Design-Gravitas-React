import React from 'react';
import Layout from './Layout';
import { BrowserRouter, Router, Route } from 'react-router-dom';

const App = () => {
  return(
    <BrowserRouter>
      <Router>
        <Route path='/' element='<Layout />'>
          <Route index element=''></Route>
          <Route path='/services' element=''></Route>
          <Route path='/contact' element=''></Route>
          <Route path='/about' element=''></Route>
        </Route>
      </Router>
    </BrowserRouter>
  );
}


export default App;