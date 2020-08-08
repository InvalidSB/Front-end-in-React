import React from 'react';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="Home">
      <Home></Home>
      </div>
      <div className='About'>
        <About></About>
      </div>
      <div className='Skills'>
        <Skills></Skills>
      </div>
      <div className='work'>
        <Work></Work>
      </div>
      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
