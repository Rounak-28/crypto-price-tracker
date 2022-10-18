import React from "react";
import millify from "millify";
import Link from "next/link";

const CoinCard = (props) => {
  return (
    <Link href={`/crypto/${props?.uuid}`}>
      <div className="bg-white dark:bg-[#1e293b] w-64 h-48 px-6 cursor-pointer rounded-2xl hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
        <div className="name h-16 flex items-center justify-between mb-12">
          <span>{`${props?.rank}. ${props?.name}`}</span>
          <img src={props?.iconUrl} alt={props?.symbol} className="w-8 h-8" />
        </div>
        <div className="data font-light text-sm text-[#575756] dark:text-[#b7b5b4]">
          <p>price: {millify(props?.price)}</p>
          <p>Market Cap: {millify(props?.marketCap)}</p>
          <p>Daily Change: {millify(props?.change)}%</p>
        </div>
      </div>
    </Link>
  );
};

export default CoinCard;
