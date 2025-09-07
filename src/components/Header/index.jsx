import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-bar p-3 text-white">
      <div className="flex justify-between w-[90%] mx-auto">
        <div className="text-3xl flex justify-center items-center">Notes</div>
        <div className=" flex justify-center items-center ">
          <div className="hidden md:block">
            <ul className="flex justify-center items-center font-medium gap-4 ">
              <li>
                <Link to="/" className="nav-link">
                  Public
                </Link>
              </li>
              <li>
                <Link to="/shared" className="nav-link">
                  Shared
                </Link>
              </li>
              <li>
                <Link to="/private" className="nav-link">
                  Private
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`md:hidden flex justify-center items-center text-xl transition-all duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuOutlined />
        </div>
        <div className="hidden md:flex justify-center items-center">
          <Link to="/auth/login" className="btn-primary">
            Login
          </Link>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className=" md:hidden pt-5">
          <li>
            <Link to="/" className="mob-link">
              Public
            </Link>
          </li>
          <li>
            <Link to="/shared" className="mob-link">
              Shared
            </Link>
          </li>
          <li>
            <Link to="/private" className="mob-link">
              Private
            </Link>
          </li>
          <li>
            <Link to="/auth/login" className="mob-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
