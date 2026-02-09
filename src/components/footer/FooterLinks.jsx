import React from 'react';

const FooterLinks = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <li
          key={link.name}
          className="cursor-pointer transition-all duration-300 hover:translate-x-[2px] hover:text-primary"
        >
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </>
  );
};

export default FooterLinks;
