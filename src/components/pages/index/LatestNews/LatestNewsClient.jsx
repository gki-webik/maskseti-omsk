"use client";

import React, { useState } from "react";
import "./LatestNews.scss";

export default function LatestNews({ newsData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCards = newsData.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalCards - 1 ? prevIndex + 1 : 0
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const currentNews = newsData[currentIndex];

  return (
    <>
      <div className="cards">
        <div className="card active">
          <div className="img">
            <img src={currentNews?.img} alt="" />
          </div>
          <div className="text">
            <p
              dangerouslySetInnerHTML={{
                __html: currentNews.content.replaceAll("\n", "<br>"),
              }}
            ></p>
            <span>{currentNews.date}</span>
          </div>
        </div>
      </div>
      <p>
        <button
          onClick={previousSlide}
          className={currentIndex === 0 ? "isDisabled" : null}
        >
          &lt;
        </button>
        <button onClick={nextSlide}>&gt;</button>
      </p>
      <p>
        <br />
        <a href="/#payment-details" className="paymentLink">
          Поддержать
        </a>
      </p>
    </>
  );
}
