import React from "react";
import Link from "next/link";
import { AiFillGithub, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiMoonFill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useState } from "react";
import Sidepanel from "./Sidepanel";

const Navbar = (props) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  const [sidepanelOpen, setSidepanelOpen] = useState(false);

  const hambergerClick = () => {
    if (sidepanelOpen == false) {
      document
        .getElementById("sidepanel")
        .classList.remove("-translate-x-full");
      setSidepanelOpen(true);
    } else {
      document.getElementById("sidepanel").classList.add("-translate-x-full");
      setSidepanelOpen(false);
    }
  };
  return (
    <div className="h-20 flex items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100  dark:from-[#1e293b] dark:via-gray-900 dark:to-black drop-shadow-md relative z-20">
      <div
        className={`absolute top-0 left-0 md:hidden -translate-x-full transition duration-300 ease-in-out z-50`}
        id="sidepanel"
      >
        <Sidepanel />
      </div>
      <Link href={"/"}>
        <img
          src="/logo-white.png"
          className="h-6 absolute left-8 hidden dark:block"
        />
      </Link>
      <Link href={"/"}>
        <img src="/logo-blue.png" className="h-6 absolute left-8 dark:hidden" />
      </Link>
      <div className="hidden md:block">
        <ul className="flex space-x-8">
          <Link href={"/"}>
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href={"/cryptocurrencies"}>
            <a>
              <li>Cryptocurrencies</li>
            </a>
          </Link>
          <Link href={"/news"}>
            <a>
              <li>Crypto News</li>
            </a>
          </Link>
        </ul>
      </div>
      <RiMoonFill
        className="absolute right-24 text-3xl cursor-pointer hidden dark:block"
        onClick={toggleTheme}
      ></RiMoonFill>
      <BsFillSunFill
        className="absolute right-24 text-3xl cursor-pointer dark:hidden"
        onClick={toggleTheme}
      ></BsFillSunFill>
      <a
        href={"https://github.com/Rounak-28/crypto-price-tracker"}
        target="_blank"
        className="absolute right-14 md:right-10 text-3xl cursor-pointer"
      >
        <AiFillGithub />
      </a>
      <AiOutlineMenu
        className={`text-3xl absolute right-4 ${
          sidepanelOpen && "hidden"
        } md:hidden`}
        onClick={hambergerClick}
      />
      <AiOutlineClose
        className={`text-3xl absolute right-4 ${
          !sidepanelOpen && "hidden"
        } md:hidden`}
        onClick={hambergerClick}
      />
    </div>
  );
};

export default Navbar;
