"use client";

import { useState, useEffect } from "react";
import "./AboutUs.scss";

export default function AboutUs() {
  const [fetchData, setFetchData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const apiUrl =
          process.env.NEXT_PUBLIC_API_URI || "https://wapi.gki-webik.ru";

        const response = await fetch(`${apiUrl}/v2/maskseti/get/aboutUs`, {
          cache: "no-store",
          headers: {
            Origin: "https://gki-webik.ru",
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setFetchData(data.data[0] || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setFetchData([]);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  if (isLoading) {
    return <div className="loadingBlock">Загрузка...</div>;
  }

  if (!fetchData) {
    return <div className="loadingBlock">No data available</div>;
  }

  return (
    <div className="AboutUs" id="about-us">
      <h2>
        <img src="/logo.png" alt="" /> О НАС
      </h2>
      <div className="box">
        <div className="images">
          {JSON.parse(fetchData.images).map((e, index) => (
            <img src={e} key={index} alt="" />
          ))}
        </div>
        <div
          className="text"
          dangerouslySetInnerHTML={{
            __html: fetchData.content.replaceAll("\n", "<br>"),
          }}
        ></div>
      </div>
      <a href="/#payment-details" className="paymentLink">
        Поддержать
      </a>
    </div>
  );
}
