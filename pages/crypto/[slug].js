import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    fetch(
      `https://coinranking1.p.rapidapi.com/coin/${slug}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=1y`,
      options
    )
      .then((response) => response.json())
      .then((response) => setHistoricalData(response))
      .catch((err) => console.error(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(historicalData);
  return (
    <>
    <Head>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </Head>
      <div className="w-[100vw] h-[100vh]">
        <Line
          data={{
            labels: historicalData?.data?.history.map((item) => {
              let date = new Date(item.timestamp * 1000);
              // let time = `${date.getHours()}:${date.getMinutes()}`
              return date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historicalData?.data?.history.map((item) => item.price),
                label: `Price in USD`,
                borderColor: "#eebc1d",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default Slug;
