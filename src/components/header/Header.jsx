"use client";
import { useState, useEffect, useRef, useContext } from "react";
import "./Header.scss";
import Link from "next/link";
import Image from "next/image";

function closeLinks() {
  const links = document.querySelector(".links");
  links.classList.contains("is-active")
    ? links.classList.remove("is-active")
    : null;
}

export default function Header() {
  return (
    <div>
      <header>
        <div className="logo">
          <img src="./logo.png" alt="Logo" />
        </div>
        <div className="links">
          <nav>
            <a href="#" onClick={closeLinks}>
              Главная
            </a>
            <a href="#about-us" onClick={closeLinks}>
              О Нас
            </a>
            <a href="#latest-news" onClick={closeLinks}>
              Новости
            </a>
            <a href="#is-feedback" onClick={closeLinks}>
              Обратная связь
            </a>
            <a href="#payment-details" onClick={closeLinks}>
              Помоги!
            </a>
          </nav>
          <nav>
            <a href="" onClick={closeLinks}>
              <svg
                width="44.000000"
                height="44.000000"
                viewBox="0 0 44 44"
                fill="none"
              >
                <defs>
                  <clipPath id="clip36_11">
                    <rect
                      id="Локальный"
                      width="44.000000"
                      height="44.000000"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#clip36_11)">
                  <path
                    id="path"
                    d="M22 40.33C22 40.33 35.75 29.33 35.75 17.41C35.75 9.82 29.59 3.66 22 3.66C14.4 3.66 8.25 9.82 8.25 17.41C8.25 29.33 22 40.33 22 40.33Z"
                    fill="#000000"
                    fillOpacity="0"
                    fillRule="nonzero"
                  />
                  <path
                    id="path"
                    d="M35.75 17.41C35.75 9.82 29.59 3.66 22 3.66C14.4 3.66 8.25 9.82 8.25 17.41C8.25 29.33 22 40.33 22 40.33C22 40.33 35.75 29.33 35.75 17.41Z"
                    stroke="#FFFFFF"
                    strokeOpacity="1.000000"
                    strokeWidth="3.500000"
                    strokeLinejoin="round"
                  />
                  <path
                    id="path"
                    d="M22 22.91C25.03 22.91 27.5 20.45 27.5 17.41C27.5 14.37 25.03 11.91 22 11.91C18.96 11.91 16.5 14.37 16.5 17.41C16.5 20.45 18.96 22.91 22 22.91Z"
                    fill="#000000"
                    fillOpacity="0"
                    fillRule="nonzero"
                  />
                  <path
                    id="path"
                    d="M27.5 17.41C27.5 14.37 25.03 11.91 22 11.91C18.96 11.91 16.5 14.37 16.5 17.41C16.5 20.45 18.96 22.91 22 22.91C25.03 22.91 27.5 20.45 27.5 17.41Z"
                    stroke="#FFFFFF"
                    strokeOpacity="1.000000"
                    strokeWidth="3.500000"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              Омск, ул. Красный путь, 78
            </a>
          </nav>
        </div>
        <div
          className="menu"
          onClick={() => {
            document.querySelector(".links").classList.toggle("is-active");
          }}
        >
          <span></span>
        </div>
      </header>
    </div>
  );
}
