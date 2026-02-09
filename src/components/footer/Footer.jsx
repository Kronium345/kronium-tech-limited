import React from 'react';
import { FaLocationArrow, FaPhone } from 'react-icons/fa6';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import FooterLinks from './FooterLinks';

const Footer = () => {
  const importantLinks = [
    {
      name: 'Home',
      link: '/#home',
    },
    {
      name: 'About',
      link: '/#about',
    },
    {
      name: 'Service',
      link: '/#services',
    },
    {
      name: 'Login',
      link: '/login',
    },
  ];

  const services = [
    {
      name: 'Web Development',
      link: '/#web-dev',
    },
    {
      name: 'Mobile Development',
      link: '/#mobile-dev',
    },
    {
      name: 'UI/UX Design',
      link: '/#design',
    },
    {
      name: 'Consulting',
      link: '/#consulting',
    },
  ];

  const contact = [
    {
      name: 'Support',
      link: '/support',
    },
    {
      name: 'Sales',
      link: '/sales',
    },
    {
      name: 'Partnership',
      link: '/partnership',
    },
  ];

  return (
    <footer className="text-white rounded-t-3xl bg-gradient-to-r from-violet-950 to-violet-900">
      <div className="mx-auto max-w-[1200px] p-4">
        {/* Footer Content Section */}
        <div className="grid gap-8 py-8 md:grid-cols-5">
          {/* Company Info */}
          <div className="px-3 md:col-span-2">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <a href="/#home">
                KRONIUM{' '}
                <span className="inline-block font-bold text-primary">
                  TECH LIMITED
                </span>
              </a>
            </h1>
            <p className="text-sm text-gray-200 mb-6">
              Transforming ideas into powerful digital solutions. Your trusted
              partner in web and mobile development.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <FaLocationArrow className="text-primary" />
              <p>London, United Kingdom</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-primary" />
              <p>+447931717799</p>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">Important Links</h2>
            <ul className="flex flex-col gap-3">
              <FooterLinks links={importantLinks} />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">Services</h2>
            <ul className="flex flex-col gap-3">
              <FooterLinks links={services} />
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">Social Links</h2>
            <div className="space-y-6">
              {/* Newsletter Subscription */}
              <div>
                <p className="mb-3 text-gray-200">
                  Subscribe to our newsletter
                </p>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary/80">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="rounded-full bg-white/10 p-3 transition-colors hover:bg-primary"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-white/10 p-3 transition-colors hover:bg-primary"
                >
                  <FaFacebookF className="text-xl" />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-white/10 p-3 transition-colors hover:bg-primary"
                >
                  <FaLinkedinIn className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Copyright Section */}
        <div className="border-t border-gray-300/50 py-6 text-center">
          <p>Copyright © 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
