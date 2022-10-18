import Link from "next/link";
import React from "react";
import Image from "next/image";

const NewsCard = (props) => {
  return (
    <Link href={props.url}>
      <a target="_blank" rel="noopener noreferrer" className="flex justify-center px-6">
        <div className="w-[360px] h-[400px] lg:h-[390px] cursor-pointer bg-white dark:bg-[#1e293b] rounded-2xl px-6 pt-6 relative hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <div className="header flex mb-5">
            <p className="text-xl w-2/3">{props.name}</p>
            <div className="w-1/3">
              <img src={props?.image?.thumbnail?.contentUrl} alt="img"></img>
            </div>
          </div>
          <p className="text-sm text-[#575756] dark:text-[#b7b5b4]">
            {props.description}
          </p>
          <div className="footer absolute w-full bottom-2 flex space-x-2">
            <img
              src={props.provider?.map(
                (item) => item?.image?.thumbnail?.contentUrl
              )}
              className="w-6 h-6 rounded-full"
              alt=""
            />
            <p>{props.provider?.map((item) => item?.name)}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NewsCard;
