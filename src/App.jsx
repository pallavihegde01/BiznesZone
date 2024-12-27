import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NavItem1 from './components/NavItem1';
import NavItem2 from './components/NavItem2';
import NavItem3 from './components/NavItem3';
import NavItem4 from './components/NavItem4';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      <NavItem1/>
      <NavItem2 />
      <NavItem3 />
      <NavItem4 />
      <Footer/>
    </div>
    </>
  );
};

export default App;