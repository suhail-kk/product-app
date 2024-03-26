import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="main-container-parent bg-[#2C7865] py-2 md:py-4 w-full flex justify-center">
      <div className="main-container-child w-full px-4 flex justify-between">
        <div className="flex justify-between items-center">
          <p className="text-white font-bold text-2xl">Product App </p>
        </div>

        <div className="flex items-center gap-8" id="navbar-collapse">
          <Link to="/">
            {" "}
            <div
              role="button"
              tabIndex={0}
              className="text-lg text-white cursor-pointer"
            >
              Home
            </div>
          </Link>
          <Link to="/my-cart">
            <div
              role="button"
              tabIndex={0}
              className="text-lg text-white cursor-pointer"
            >
              My Cart
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
