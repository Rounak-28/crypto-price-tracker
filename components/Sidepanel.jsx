import React from "react";
import Link from "next/link";

const Sidepanel = () => {
  return (
    <div className="w-[65vw] h-[100vh] bg-white dark:bg-[#132541] drop-shadow-md">
      <ul className="flex flex-col space-y-8 indent-6 pt-12">
        <li></li>
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
  );
};

export default Sidepanel;
