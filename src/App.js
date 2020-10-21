import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Main from './components/Main'
import Banner from './components/Banner'
import SocialSection from './components/SocialSection'
import Footer from './components/Footer'




function App() {
  return (<>
    <div className="App">
      <Navbar />
      <Carousel />
      <Main />
      <Banner />
      <h3>My Work</h3>
      <Main />
      <SocialSection />
    </div>
    <Footer />
  </>
  );
}

export default App;
