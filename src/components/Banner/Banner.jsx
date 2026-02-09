import React from 'react';
import pharmaque_app_home from '../../assets/PharmaQue_App_Home.jpg';

const Banner = ({ reverse }) => {
  return (
    <section className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container flex flex-col items-center justify-center py-8 md:py-12">
        <div
          className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 ${
            reverse ? 'md:[&>*:first-child]:order-last' : ''
          }`}
        >
          {/* Text Container */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              Driving Results Through Smart Design & Data
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 md:text-base">
              At Kronium Tech, we go beyond launching apps — we solve real
              problems. Whether it's improving user retention in medical
              education apps or streamlining internal data portals, we deliver
              solutions that work and scale.
            </p>
            {/* Get Started Button */}
            <button className="btn-primary bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div>

          {/* Image Container */}
          <div className="relative h-[400px] md:h-[450px]">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"></div>

            {/* Image wrapper */}
            <div className="relative mx-auto h-full max-w-[210px] overflow-hidden rounded-2xl bg-white/10 p-2 backdrop-blur-sm">
              <img
                src={pharmaque_app_home}
                alt="PharmaQue App Interface"
                className="h-full w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              />

              {/* App name overlay */}
              {/* <div className="absolute bottom-8 left-1/2 w-[80%] -translate-x-1/2 rounded-xl bg-white/90 p-3 text-center backdrop-blur-sm dark:bg-gray-800/90">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Welcome To
                </h3>
                <p className="text-xl font-bold text-primary">PharmaQue</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
