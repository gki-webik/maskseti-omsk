"use client";
import "./Admin.scss";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Admin() {
  const router = useRouter();
  const loginInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [loading, setLoading] = useState(true);
  checkSession();
  async function checkSession() {
    try {
      const apiUrl = process.env.API_URI || "https://wapi.gki-webik.ru";

      const response = await fetch(`${apiUrl}/v2/maskseti/checkSession?nocache=${Math.random()}`, {
        headers: {
          "Content-Type": "application/json",
          "User-Agent":
            "Mozilla/5.0 (compatible; NextJS-SSR/1.0; +https://nextjs.org/)",
          Origin: "https://gki-webik.ru",
        },
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        router.replace("/admin/panel");
        return;
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function formLogin(event) {
    event.preventDefault();

    try {
      const apiUrl = process.env.API_URI || "https://wapi.gki-webik.ru";

      const response = await fetch(`${apiUrl}/v2/maskseti/login?nocache=${Math.random()}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent":
            "Mozilla/5.0 (compatible; NextJS-SSR/1.0; +https://nextjs.org/)",
          Origin: "https://gki-webik.ru",
        },
        credentials: "include",
        body: JSON.stringify({
          login: loginInputRef.current.value,
          password: passwordInputRef.current.value,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }
      router.replace("/admin/panel");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="Admin">
      <nav className="is-kroshki">
        <Link href="/">Главная</Link>
        <a className="is-end">Админ-панель</a>
      </nav>
      {!loading ? (
        <form onSubmit={formLogin}>
          <input type="text" ref={loginInputRef} placeholder="Логин" />
          <input type="password" ref={passwordInputRef} placeholder="Пароль" />
          <button type="submit">Войти</button>
        </form>
      ) : (
        <p className="is-white is-loading">Загрузка...</p>
      )}
    </div>
  );
}
