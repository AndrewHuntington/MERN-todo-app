import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-center w-full mb-16">
      <div className="flex border-b border-gray-200 w-[90%] lg:max-w-4xl py-5 justify-between">
        <div>
          <Link to="/">Todo App</Link>
        </div>
        <ul className="flex">
          <li>
            <Link to="/login" className="flex items-center">
              <FaSignInAlt className="mr-1" /> Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="flex items-center ml-4">
              <FaUser className="mr-1" /> Register
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
