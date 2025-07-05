"use client";
import { useState, useEffect } from "react";
import "./PaymentDetails.scss";
import FormComponent from "./FormComponent";

function TextComponent({ classComponent }) {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl =
          process.env.NEXT_PUBLIC_API_URI || "https://wapi.gki-webik.ru";
        const response = await fetch(
          `${apiUrl}/v2/maskseti/get/paymentDetails?nocache=${Math.random()}`,
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

        const jsonData = await response.json();
        setData(jsonData.data[0].content || "");
      } catch (error) {
        console.error("Error fetching data:", error);
        setData("");
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`${classComponent} is-text`}>
      <p dangerouslySetInnerHTML={{ __html: data.replace(/\n/g, "<br>") }}></p>
    </div>
  );
}

export default function PaymentDetails() {
  return (
    <div className="PaymentDetails" id="payment-details">
      <div className="left">
        <h2>ПОМОГИ</h2>
        <h3>
          ДАЖЕ 1 РУБЛЬ РЕШАЕТ МНОГОЕ
          <span>
            <img src="/logo.png" alt="" />
          </span>
        </h3>
        <p>
          Добровольный перевод денежных средств осуществляется по куар коду:
          достаточно просто отсканировать изображение или войти в приложение
          своего банка, выбрать оплату по куар коду, загрузить изображение с
          кодом и внести любую удобную для вас сумму. Комиссия за перевод не
          взимается.
        </p>
        <TextComponent classComponent="text1" />
      </div>
      <div className="img">
        <a href="/images/qr.png" download="qr">
          <img src="/images/qr.png" alt="" />
        </a>
        <a href="/images/qr.png" download="qr" className="is-1">
          Скачать QR-код
        </a>
        <FormComponent />
        <TextComponent classComponent="text2" />
      </div>
    </div>
  );
}
