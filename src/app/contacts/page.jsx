"use client";

import "./Contacts.scss";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl =
          process.env.NEXT_PUBLIC_API_URI || "https://wapi.gki-webik.ru";

        const response = await fetch(
          `${apiUrl}/v2/maskseti/get/contacts?nocache=${Math.random()}`,
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
        setContacts(data.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setContacts([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Contacts">
      <nav className="is-kroshki">
        <Link href="/">Главная</Link>
        <a className="is-end">Контакты</a>
      </nav>
      <h1>Контакты</h1>
      <div className="blocks">
        {contacts.map((e, index) => (
          <div className="block" key={index}>
            <img src={e.img} alt="Фото сотрудника" />
            <div className="text">
              <div className="name">{e.name}</div>
              <div className="description">{e.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
