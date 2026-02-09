import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const Overview = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const handleStorageChange = () => {
      setTheme(localStorage.getItem('theme') || 'dark');
    };

    window.addEventListener('storage', handleStorageChange);

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
    <section className="container h-12 md:h-32">
      <div
        className={`
          grid grid-cols-4 divide-x divide-gray-200 mx-auto w-full md:max-w-[800px] h-full -translate-y-10 md:-translate-y-16 my-4 md:p-8
          rounded-lg shadow-md transition-colors duration-200
          ${
            theme === 'dark'
              ? 'bg-gray-800 text-white/70'
              : 'bg-white text-gray-900'
          }
        `}
      >
        <div className="flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={4} duration={2.75} />
          </h1>
          <h1
            className={`
            sm:text-md text-xs md:text-lg
            ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}
          `}
          >
            Clients
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={50} duration={2.75} />
          </h1>
          <h1
            className={`
            text-sm sm:text-base transition-colors
            ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}
          `}
          >
            Projects
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={3} duration={2.75} />
          </h1>
          <h1
            className={`
            text-sm sm:text-base transition-colors
            ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}
          `}
          >
            Reviews
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={12} duration={2.75} />
          </h1>
          <h1
            className={`
            text-sm sm:text-base transition-colors
            ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}
          `}
          >
            Awards
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Overview;
