import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/Aboutus';
import Hero from'./components/Hero';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';


function App() {
  return (
    <div>
      <BrowserRouter >
        <Header/>
        
        <Navbar/>
        <Routes>
          <Route path='/' element={<Hero />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/registration' element={<Registration /> }/>
        </Routes>
        <Footer/>  
        </BrowserRouter> 
    </div>
  );
}

export default App;