import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import CoinCard from "../components/CoinCard";
import millify from "millify";

export default function Home() {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=0",
      options
    )
      .then((response) => response.json())
      .then((response) => setCoinData(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white dark:bg-[#1e293b] w-[95%] my-8 p-6 rounded-2xl">
        <p className="text-3xl mb-10">Global Crypto Stats</p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-[#9b9896]">Total Cryptos</p>
            <p className="text-xl">{coinData?.stats?.totalCoins}</p>
          </div>
          <div>
            <p className="text-sm text-[#9b9896]">Total Exchanges</p>
            <p className="text-xl">{coinData?.stats?.totalExchanges}</p>
          </div>
          <div>
            <p className="text-sm text-[#9b9896]">Total Market Cap</p>
            <p className="text-xl">
              {millify(coinData?.stats?.totalMarketCap)}
            </p>
          </div>
          <div>
            <p className="text-sm text-[#9b9896]">Total 24h Volume</p>
            <p className="text-xl">
              {millify(coinData?.stats?.total24hVolume)}
            </p>
          </div>
          <div>
            <p className="text-sm text-[#9b9896]">Total Markets</p>
            <p className="text-xl">{millify(coinData?.stats?.totalMarkets)}</p>
          </div>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-10">
        {coinData?.coins?.map((item) => {
          return <CoinCard {...item} key={item.uuid} />;
        })}
      </div>
    </div>
  );
}
