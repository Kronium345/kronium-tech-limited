import React, { useEffect, useState } from 'react';
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from 'react-icons/bi';
import { FaSquareCaretDown } from 'react-icons/fa6';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import pharmaque from '../../assets/pharmaque.png';
import rami from '../../assets/rami.png';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Add effect to prevent scrolling when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      <header
        className={`${
          theme === 'dark' ? 'bg-navbar' : 'bg-light-navbar'
        } transition-colors duration-200 fixed w-full top-0 left-0 z-40`}
      >
        <nav className="container flex items-center justify-between h-[70px] py-2">
          {/* Logo Section */}
          <div className="text-2xl font-bold md:text-3xl">
            <a
              href="#"
              className={theme === 'dark' ? 'text-white' : 'text-gray-800'}
            >
              KRONIUM
              <span className="ml-1 text-primary">TECH LIMITED</span>
            </a>
          </div>
          {/* Desktop Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  Home{' '}
                  <span>
                    <FaSquareCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                {/* Dropdown Section */}
                <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-gray-150 p-2 border-2 shadow-md rounded-md text-black group-hover:block">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200">Services</li>
                    <li className="p-2 hover:bg-violet-200">About Us</li>
                    <li className="p-2 hover:bg-violet-200">Privacy Policy</li>
                  </ul>
                </div>
              </li>
              <li className="group cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  Services{' '}
                  <span>
                    <FaSquareCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                {/* Services Dropdown Full Width Section */}
                <div className="absolute left-0 z-[99999] hidden w-full rounded-b-3xl bg-white p-6 shadow-md group-hover:block text-black">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-full md:w-1/2 overflow-hidden">
                      <img
                        src={pharmaque}
                        alt="img 1"
                        className="max-h-[250px] w-full rounded-b-3xl object-cover"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <h1 className="text-2xl font-semibold mb-2">
                        Best-Selling
                      </h1>
                      <p className="text-base text-gray-700 leading-relaxed text-sm">
                        We build data-driven assessment platform built for
                        medical education. <br />
                        Kronium Tech provides web & mobile development,
                        improving user experience and analytics. <br />
                        We enhance performance boost test completion rates!
                        <div className="grid grid-cols-3 mt-4">
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              Development
                            </h1>
                            <ul className="space-y-2">
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Software Development
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Web Development
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Mobile Development
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              Development
                            </h1>
                            <ul className="space-y-2">
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Software Development
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Web Development
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Mobile Development
                              </li>
                            </ul>
                          </div>
                          <div>
                            <img src={rami} alt="RAMI" />
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>Works</li>
              <li>Contact Us</li>
              <li>
                <div className="flex items-center gap-4">
                  <div>
                    <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white hover:bg-primary/90" />
                  </div>
                  <div>
                    <p>Call us on</p>
                    <p>
                      <a href="tel: +447931717799">+447931717799</a>
                    </p>
                  </div>
                </div>
              </li>
              {/* Theme Toggle Button */}
              <li>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className={`p-2 rounded-lg ${
                    theme === 'dark'
                      ? 'hover:bg-violet-800 text-white'
                      : 'hover:bg-gray-100 text-gray-800'
                  }`}
                >
                  {theme === 'dark' ? (
                    <BiSolidSun className="text-2xl" />
                  ) : (
                    <BiSolidMoon className="text-2xl" />
                  )}
                </button>
              </li>
            </ul>
          </div>
          {/* Mobile Menu Section */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === 'dark' ? (
              <BiSolidSun
                className="text-2xl text-white cursor-pointer"
                onClick={() => setTheme('light')}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl text-gray-800 cursor-pointer"
                onClick={() => setTheme('dark')}
              />
            )}
            <button
              onClick={toggleMenu}
              className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
              aria-label="Toggle menu"
            >
              {showMenu ? (
                <HiMenuAlt1 className="text-3xl" />
              ) : (
                <HiMenuAlt3 className="text-3xl" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-[300px] h-screen bg-[#0A0A29] dark:bg-[#0A0A29] 
          transform transition-transform duration-300 ease-in-out z-50 md:hidden
          ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* User Profile Section */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
              <span className="text-2xl text-white">
                {/* User icon or first letter of name */}K
              </span>
            </div>
            <div>
              <h3 className="text-white font-medium">Kronium Tech</h3>
              <p className="text-gray-400 text-sm">Premium user</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <ul className="flex flex-col gap-6 text-lg">
            <li>
              <a
                href="#"
                onClick={toggleMenu}
                className="text-white hover:text-primary transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={toggleMenu}
                className="text-white hover:text-primary transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={toggleMenu}
                className="text-white hover:text-primary transition-colors"
              >
                Works
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={toggleMenu}
                className="text-white hover:text-primary transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Phone Number */}
        <div className="px-6 mt-4">
          <div className="flex items-center gap-2">
            <BiPhoneCall className="text-2xl text-white" />
            <a
              href="tel:+447931717799"
              className="text-white hover:text-primary transition-colors"
            >
              +447931717799
            </a>
          </div>
        </div>

        {/* Close Button - Positioned at top right */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-white"
          aria-label="Close menu"
        >
          <HiMenuAlt1 className="text-3xl" />
        </button>

        {/* Copyright Footer */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-center border-t border-gray-700">
          <p className="text-gray-400 text-sm">© 2025 Kronium Tech Limited</p>
        </div>
      </div>

      {/* Overlay remains the same */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default Navbar;
