import React from "react";

const Footer = () => {
  return (
    <div className="w-[100vw] h-14 mt-12 flex justify-center items-center bg-gradient-to-r from-rose-100 to-teal-100  dark:from-[#1e293b] dark:via-gray-900 dark:to-black drop-shadow-md">
      Made by{" "}
      <span className="font-bold mx-2 hover:underline underline-offset-2">
        <a href="https://twitter.com/Rounak_28">Rounak</a>
      </span>{" "}
      using Next.js and Tailwind CSS
    </div>
  );
};

export default Footer;
