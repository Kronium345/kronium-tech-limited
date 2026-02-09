import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Overview from './components/Overview';
import Banner from './components/Banner/Banner';
import SimpleBanner from './components/simpleBanner/SimpleBanner';
import Blogs from './components/blogs/Blogs';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Banner />
      <Banner reverse={true} />
      <SimpleBanner />
      <Blogs />
      <Footer />
    </>
  );
};

export default App;
