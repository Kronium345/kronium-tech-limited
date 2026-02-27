import React, { useEffect, useState } from 'react';
import HeroImage from '../../assets/hero.svg';

const Hero = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    // Listen for localStorage changes
    const handleStorageChange = () => {
      setTheme(localStorage.getItem('theme') || 'dark');
    };

    window.addEventListener('storage', handleStorageChange);

    // Also check for theme changes in the same window
    const observer = new MutationObserver(() => {
      setTheme(localStorage.getItem('theme') || 'dark');
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="home"
      className={`min-h-screen ${
        theme === 'dark' ? 'bg-[#4B0082]' : 'bg-white'
      } transition-colors duration-200 pt-20`}
    >
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Hero Text Content */}
          <div className="max-w-xl">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              We Build Powerful Apps for Web, Android & iOS
            </h1>
            <p
              className={`text-lg mb-8 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              From idea to deployment, Kronium Tech crafts high-quality mobile
              and web apps that are fast, scalable, and App Store ready. Whether
              you're a startup or enterprise, we bring your vision to life —
              across all platforms.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Get Started
              </button>
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors border ${
                  theme === 'dark'
                    ? 'border-white text-white hover:bg-white/10'
                    : 'border-gray-900 text-gray-900 hover:bg-gray-900/10'
                }`}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
              <img
                src={HeroImage}
                alt="App Development"
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/30 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/30 rounded-full blur-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
