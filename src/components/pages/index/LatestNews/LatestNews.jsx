"use client";

import { useState, useEffect } from "react";
import "./LatestNews.scss";
import LatestNewsClient from "./LatestNewsClient";

export default function LatestNews() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl =
          process.env.NEXT_PUBLIC_API_URI || "https://wapi.gki-webik.ru";

        const response = await fetch(
          `${apiUrl}/v2/maskseti/get/news?nocache=${Math.random()}`,
          {
            headers: {
              Origin: "https://gki-webik.ru",
              "Content-Type": "application/json",
              "User-Agent":
                "Mozilla/5.0 (compatible; NextJS-SSR/1.0; +https://nextjs.org/)",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setNewsData(data.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setNewsData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="LatestNews" id="latest-news">
        <h2>НОВОСТИ</h2>
        <h3>
          ПОСЛЕДНИЕ СОБЫТИЯ
          <span>
            <img src="/logo.png" alt="" />
          </span>
        </h3>
        <div className="loadingBlock">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="LatestNews" id="latest-news">
      <h2>НОВОСТИ</h2>
      <h3>
        ПОСЛЕДНИЕ СОБЫТИЯ
        <span>
          <img src="/logo.png" alt="" />
        </span>
      </h3>
      {newsData && newsData.length > 0 ? (
        <LatestNewsClient newsData={newsData} />
      ) : (
        <h4 style={{ color: "#fff", textAlign: "center", padding: "40px" }}>
          Нет доступных новостей
        </h4>
      )}
    </div>
  );
}
