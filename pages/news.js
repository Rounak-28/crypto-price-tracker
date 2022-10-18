import React from "react";
import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";

const news = () => {
  const [newsData, setNewsData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };
  useEffect(() => {
    fetch('https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency&freshness=Day&textFormat=Raw&safeSearch=Off', options)
      .then(response => response.json())
      .then(response => setNewsData(response))
      .catch(err => console.error(err));
  }, [])
  
  return (
    <div className="w-[100vw] flex justify-center -z-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-8 mb-10">
        {newsData?.value?.map((item) => {
          return <NewsCard {...item} />;
        })}
      </div>
    </div>
  );
};

export default news;
