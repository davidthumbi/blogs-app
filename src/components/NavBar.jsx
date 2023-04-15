import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex mx-auto w-3/4 justify-around font-bold text-lg text-gray-400 sm:text-sm md:text-lg md:w-1/2 lg:w-1/4">
      <Link to="/">
        <button className="focus:text-white">
          Home
        </button>
      </Link>
      <Link to="/about">
        <button className="focus:text-white">
          About
        </button>
      </Link>
      <Link to="/contact">
        <button className="focus:text-white">
          Contact
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
