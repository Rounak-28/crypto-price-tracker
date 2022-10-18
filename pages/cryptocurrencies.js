import React from "react";
import { useState, useEffect } from "react";
import CoinCard from "../components/CoinCard";

const cryptocurrencies = () => {
  const [coinData, setCoinData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  useEffect(() => {
    fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0",
      options
    )
      .then((response) => response.json())
      .then((response) => setCoinData(response.data))
      .catch((err) => console.error(err));
  }, []);
  
  return (
    <div className="w-[100vw] flex justify-center">
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-10">
        {coinData?.coins?.map((item) => {
          return <CoinCard {...item} />;
        })}
      </div>
    </div>
  );
};

export default cryptocurrencies;
