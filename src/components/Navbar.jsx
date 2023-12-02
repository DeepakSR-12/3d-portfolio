import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { navLinks, personal } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex py-5 fixed top-0 z-20 bg-primary items-center`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            {personal.firstName}&nbsp;
            <span className="hidden sm:block">| {personal.lastName}</span>
          </p>
        </Link>

        <ul className="hidden nav:flex list-none gap-10 flex-row">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`cursor-pointer text-[18px] font-medium hover:text-white ${
                active ? "text-white" : "text-secondary"
              } `}
              onClick={() => setActive(nav.title)}
            >
              <a
                href={
                  nav.id === "resume"
                    ? "https://drive.google.com/file/d/1TWSXwYH0lXrOQxunCp_vTIITBG4kWr4X/view?usp=sharing"
                    : nav.id === "github"
                    ? "https://github.com/DeepakSR-12"
                    : nav.id === "linkedin"
                    ? "https://www.linkedin.com/in/deepak-rajkumar-b71010168/"
                    : `#${nav.id}`
                }
                target={
                  nav.id === "resume" ||
                  nav.id === "github" ||
                  nav.id === "linkedin"
                    ? "_blank"
                    : "_self"
                }
                rel="noreferrer"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
            className="w-[28px] h-[28px] object-contain"
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 rounded-xl max-w-[140px]`}
          >
            <ul className="flex flex-1 list-none flex-col justify-end items-start gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[18px] font-medium hover:text-white ${
                    active ? "text-white" : "text-secondary"
                  } `}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
