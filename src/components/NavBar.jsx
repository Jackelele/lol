import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const navItems = [
    {
      id: 1,
      text: "Home",
      link: '/'
    },
    {
      id: 2,
      text: "About",
      link: '/about'
    },
    {
      id: 3,
      text: "Clowns",
      link: '/clowns'
    },
    {
      id: 4,
      text: 'Clips',
      link: '/clips'
    },
  ];
  return (
    <div className="bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00cddf]">ELELE.LOL</h1>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:text-[#00cddf] rounded-xl m-2 cursor-pointer duration-30"
          >
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="md:hidden mr-auto">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
          ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50"
          : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00cddf] m-4">
          ELELE.LOL
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 rounded-xl hover:text-[#00cddf] duration-300 cursor-pointer mb-2"
          >
            {item.text}
          </li>
        ))}
        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          <li
            className="p-4 rounded-xl hover:text-[#00cddf] duration-300 cursor-pointer"
          >
            Close Menu
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
