import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import Popup from "../Popup/Popup";
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const DropdonwLinks = [
  {
    id: 1,
    name: "Tranding Products",
    link: "#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar  */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="flex font-bold text-2xl sm:text-3xl gap-2">
              Shops
              <img src={Logo} alt="Logo" className="w-10" />
            </a>
          </div>
          {/* Search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="group relative hidden sm:block border-gray-300">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] relative sm:w-[200px] group-hover:w-[300px]
                transition-all duration-300 px-2 py-1
                border border-x-gray-300 rounded-full border-gray-300
                focus:outline-none focus:border-1 focus:border-primary
                dark:border-gray-500
                dark:bg-gray-800"
              />
              <IoMdSearch className="absolute top-[10px] right-2 text-gray-300 group-hover:text-primary" />
            </div>
            {/* order Button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all easy-in-out
          duration-200 text-white py-1 px-4 rounded-full flex justify-between gap-4 items-center group"
            >
              <span className="group-hover:block hidden transition-all  duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* DarkMode Switch */}
            <DarkMode />
          </div>
        </div>
      </div>
      {/* lower Navar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4  hover:text-primary duration-200 cursor-pointer "
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown
                  className="transition-all
                  duration-200 group-hover:rotate-180"
                />
              </span>
            </a>
            <div
              className="absolute z-[100] hidden group-hover:block w-[160px]
             bg-white rounded-md text-black gap-2 p-2 text-block shadow-md"
            >
              <ul>
                {DropdonwLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md 
                      p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
