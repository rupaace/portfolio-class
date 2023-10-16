import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "text-red-500 border-b-2 border-red-500"
      : "";
  };

  return (
    <header>
      <nav className="sm:flex hidden w-full justify-between items-center gap-4 h-[80px] px-10 bg-rose-100  top-0 flex-shrink ">
        <h1 className="font-bold text-2xl text-red-500">Ace</h1>
        <div className="flex gap-6">
          <Link
            to="/"
            className={`font-semibold hover:text-red-500 ${isActive("/")}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`font-semibold hover:text-red-500 ${isActive("/about")}`}
          >
            About
          </Link>

          <Link
            to="/service"
            className={`font-semibold hover:text-red-500 ${isActive(
              "/service"
            )}`}
          >
            Service
          </Link>
          <Link
            to="/contact"
            className={`font-semibold hover:text-red-500 ${isActive(
              "/contact"
            )}`}
          >
            Contact
          </Link>
        </div>
        <div className="flex justify-end">
          <button className="bg-red-500 text-white font-semibold px-4 py-1 rounded">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
