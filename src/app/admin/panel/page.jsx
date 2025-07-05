"use client";
import "./AdminPanel.scss";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Admin() {
  // Для формы "О нас"
  const inputAboutUsFiles = useRef(null);
  const [inputAboutUsContent, setInputAboutUsContent] = useState([]);

  // Рефы для формы "Новости"
  const inputNewsImage = useRef(null);
  const inputNewsContent = useRef(null);
  const inputNewsDate = useRef(null);
  const [news, setNews] = useState([]);

  // Рефы для формы "Реквизиты"
  const [inputRequisites, setInputRequisites] = useState();

  // Рефы для формы "Контакты"
  const inputContactName = useRef(null);
  const inputContactDescription = useRef(null);
  const inputContactPhoto = useRef(null);
  const [contacts, setContacts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [loadingContent, setLoadingContent] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  // Проверка сессии при загрузке компонента
  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URI || "https://wapi.gki-webik.ru";

      const response = await fetch(`${apiUrl}/v2/maskseti/checkSession`, {
        headers: {
          "Content-Type": "application/json",
          "User-Agent":
            "Mozilla/5.0 (compatible; NextJS-SSR/1.0; +https://nextjs.org/)",
          Origin: "https://gki-webik.ru",
        },
        credentials: "include",
      });

      if (!response.ok) {
        router.replace("/admin");
        return;
      }

      const data = await response.json();
      setLoading(false);
    } catch (error) {
      console.error("Ошибка проверки сессии:", error);
      router.replace("/admin");
    }
  }

  async function logout() {
    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URI || "https://wapi.gki-webik.ru";

      const response = await fetch(`${apiUrl}/v2/maskseti/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent":
            "Mozilla/5.0 (compatible; NextJS-SSR/1.0; +https://nextjs.org/)",
          Origin: "https://gki-webik.ru",
        },
        credentials: "include",
      });
    } catch (error) {
      console.error("Ошибка:", error);
    } finally {
      router.replace("/admin");
    }
  }
  async function getFetchAboutUs() {
    setLoadingContent(true);
    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URI || "https://wapi.gki-webik.ru";

      const response = await fetch(`${apiUrl}/v2/maskseti/get/aboutUs`, {
        headers: {
          "Content-Type": "application/json",
          "User-Agent":
            "Mozilla/5.0 (compatible; NextJS-SSR/1.0; +https://nextjs.org/)",
          Origin: "https://gki-webik.ru",
        },
        credentials: "include",
      });

      const data = await response.json();
      setInputAboutUsContent(data.data[0].content);
      setLoadingContent(false);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }
  async function getFetchRequisites() {
    setLoadingContent(true);
    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URI || "https://wapi.gki-webik.ru";

      const response = await fetch(`${apiUrl}/v2/maskseti/get/paymentDetails`, {
        headers: {
          "Content-Type": "application/json",
          "User-Agent":
            "Mozilla/5.0 (compatible; NextJS-SSR/1.0; +https://nextjs.org/)",
          Origin: "https://gki-webik.ru",
        },
        credentials: "include",
      });

      const data = await response.json();
      setInputRequisites(data.data[0].content);
      setLoadingContent(false);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }

  async function getFetchContacts() {
    setLoadingContent(true);
    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URI || "https://wapi.gki-webik.ru";

      const response = await fetch(`${apiUrl}/v2/maskseti/get/contacts`, {
        headers: {
          "Content-Type": "application/json",
          "User-Agent":
            "Mozilla/5.0 (compatible; NextJS-SSR/1.0; +https://nextjs.org/)",
          Origin: "https://gki-webik.ru",
        },
        credentials: "include",
      });

      const data = await response.json();
      setContacts(data.data);
      setLoadingContent(false);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }

  async function getNews() {
    setLoadingContent(true);
    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URI || "https://wapi.gki-webik.ru";

      const response = await fetch(`${apiUrl}/v2/maskseti/get/news`, {
        headers: {
          "Content-Type": "application/json",
          "User-Agent":
            "Mozilla/5.0 (compatible; NextJS-SSR/1.0; +https://nextjs.org/)",
          Origin: "https://gki-webik.ru",
        },
        credentials: "include",
      });

      const data = await response.json();
      setNews(data.data);
      setLoadingContent(false);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }

  async function deleteNews(id) {
    setLoadingContent(true);
    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URI || "https://wapi.gki-webik.ru";

      const response = await fetch(
        `${apiUrl}/v2/maskseti/delete/news?id=${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "User-Agent":
              "Mozilla/5.0 (compatible; NextJS-SSR/1.0; +https://nextjs.org/)",
            Origin: "https://gki-webik.ru",
          },
          credentials: "include",
        }
      );

      getNews();
      setLoadingContent(false);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }

  async function deleteContacts(id) {
    setLoadingContent(true);
    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URI || "https://wapi.gki-webik.ru";

      const response = await fetch(
        `${apiUrl}/v2/maskseti/delete/contacts?id=${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "User-Agent":
              "Mozilla/5.0 (compatible; NextJS-SSR/1.0; +https://nextjs.org/)",
            Origin: "https://gki-webik.ru",
          },
          credentials: "include",
        }
      );

      getFetchContacts();
      setLoadingContent(false);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }

  // Универсальная функция для отправки данных
  async function submitForm(endpoint, formData, isFormData = false) {
    try {
      setSubmitting(true);
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URI || "https://wapi.gki-webik.ru";

      const headers = {
        "User-Agent":
          "Mozilla/5.0 (compatible; NextJS-SSR/1.0; +https://nextjs.org/)",
        Origin: "https://gki-webik.ru",
      };

      // Не добавляем Content-Type для FormData, браузер сделает это автоматически
      if (!isFormData) {
        headers["Content-Type"] = "application/json";
      }

      const response = await fetch(`${apiUrl}/v2/maskseti/edit/${endpoint}`, {
        method: "POST",
        headers,
        credentials: "include",
        body: isFormData ? formData : JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Данные успешно сохранены!");
      } else {
        alert(`Ошибка: ${data.message || "Неизвестная ошибка"}`);
      }
    } catch (error) {
      console.error("Ошибка отправки данных:", error);
      alert("Произошла ошибка при сохранении данных");
    } finally {
      setSubmitting(false);
    }
  }

  // Обработчик формы "О нас"
  async function handleAboutUsSubmit(event) {
    event.preventDefault();

    const files = inputAboutUsFiles.current.files;
    const content = inputAboutUsContent.trim();

    if (!content) {
      alert("Пожалуйста, заполните текст");
      return;
    }

    if (files.length !== 4) {
      alert("Можно загрузить ровно 4 фотографии");
      return;
    }

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("files[]", file);
    });
    formData.append("content", content);

    await submitForm("aboutUs", formData, true);
  }

  // Обработчик формы "Новости"
  async function handleNewsSubmit(event) {
    event.preventDefault();

    const file = inputNewsImage.current.files[0];
    const content = inputNewsContent.current.value.trim();
    const date = inputNewsDate.current.value;

    if (!content || !date) {
      alert("Пожалуйста, заполните все обязательные поля");
      return;
    }

    const formData = new FormData();
    if (file) {
      formData.append("image", file);
    }
    formData.append("content", content);
    formData.append("date", date);

    await submitForm("news", formData, true);
  }

  // Обработчик формы "Реквизиты"
  async function handleRequisitesSubmit(event) {
    event.preventDefault();
    const content = inputRequisites?.trim();

    if (!content) {
      alert("Пожалуйста, заполните реквизиты");
      return;
    }

    await submitForm("requisites", { content });
  }

  // Обработчик формы "Контакты"
  async function handleContactsSubmit(event) {
    event.preventDefault();

    const name = inputContactName.current.value.trim();
    const description = inputContactDescription.current.value.trim();
    const photo = inputContactPhoto.current.files[0];

    if (!name || !description) {
      alert("Пожалуйста, заполните ФИО и описание");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (photo) {
      formData.append("photo", photo);
    }

    await submitForm("contacts", formData, true);
  }

  function closeDetails(e) {
    if (e.target.open) {
      e.target.open = false;
      return;
    }
    document.querySelectorAll("details").forEach((e) => {
      e.open = false;
    });
    e.target.open = true;
  }

  if (loading) {
    return (
      <div className="AdminPanel">
        <nav className="is-kroshki">
          <Link href="/">Главная</Link>
          <a className="is-end">Админ-панель</a>
        </nav>
        <p className="is-white is-loading">Загрузка...</p>
      </div>
    );
  }

  return (
    <div className="AdminPanel">
      <nav className="is-kroshki">
        <Link href="/">Главная</Link>
        <a className="is-end">Админ-панель</a>
      </nav>

      <main>
        <h1>Привет, Администратор!</h1>

        <details>
          <summary
            onClick={(e) => {
              getFetchAboutUs();
              closeDetails(e);
            }}
          >
            О Нас
          </summary>
          {loadingContent ? (
            "Загрузка..."
          ) : (
            <form onSubmit={handleAboutUsSubmit} encType="multipart/form-data">
              <label>
                4 фотографии *
                <input
                  type="file"
                  accept="image/jpeg, image/jpg, image/png, image/gif, image/webp"
                  multiple
                  required
                  ref={inputAboutUsFiles}
                  disabled={submitting}
                />
              </label>
              <label>
                Текст *
                <textarea
                  placeholder="Введите текст о компании"
                  value={inputAboutUsContent}
                  onInput={(e) => {
                    setInputAboutUsContent(e.target.value);
                  }}
                  rows="5"
                  cols="30"
                  required
                  disabled={submitting}
                />
              </label>
              <button type="submit" disabled={submitting}>
                {submitting ? "Сохранение..." : "Сохранить"}
              </button>
            </form>
          )}
        </details>

        <details>
          <summary
            onClick={(e) => {
              closeDetails(e);
            }}
          >
            Новости (публикация)
          </summary>
          <form onSubmit={handleNewsSubmit} encType="multipart/form-data">
            <label>
              Фотография
              <input
                type="file"
                accept="image/jpeg, image/jpg, image/png, image/gif, image/webp"
                ref={inputNewsImage}
                disabled={submitting}
              />
            </label>
            <label>
              Текст новости *
              <textarea
                placeholder="Введите текст новости"
                ref={inputNewsContent}
                rows="5"
                cols="30"
                required
                disabled={submitting}
              />
            </label>
            <label>
              Дата *
              <input
                type="date"
                ref={inputNewsDate}
                required
                disabled={submitting}
              />
            </label>
            <button type="submit" disabled={submitting}>
              {submitting ? "Сохранение..." : "Сохранить"}
            </button>
          </form>
        </details>
        <details>
          <summary
            onClick={(e) => {
              getNews();
              closeDetails(e);
            }}
          >
            Новости (удаление)
          </summary>
          {loadingContent ? (
            "Загрузка..."
          ) : (
            <div className="items">
              {news.map((e, index) => {
                return (
                  <div className="item" key={index}>
                    {e.content.slice(0, 30)}... --- {e.date} -{" "}
                    <button onClick={() => deleteNews(e.id)}>Удалить</button>
                  </div>
                );
              })}
            </div>
          )}
        </details>

        <details>
          <summary
            onClick={(e) => {
              getFetchRequisites();
              closeDetails(e);
            }}
          >
            Реквизиты
          </summary>
          {loadingContent ? (
            "Загрузка..."
          ) : (
            <form onSubmit={handleRequisitesSubmit}>
              <label>
                Реквизиты *
                <textarea
                  placeholder="Введите реквизиты организации"
                  value={inputRequisites || ""}
                  onChange={(e) => setInputRequisites(e.target.value)}
                  rows="5"
                  cols="30"
                  required
                  disabled={submitting}
                />
              </label>
              <button type="submit" disabled={submitting}>
                {submitting ? "Сохранение..." : "Сохранить"}
              </button>
            </form>
          )}
        </details>

        <details>
          <summary
            onClick={(e) => {
              closeDetails(e);
            }}
          >
            Контакты (публикация)
          </summary>
          <form onSubmit={handleContactsSubmit} encType="multipart/form-data">
            <label>
              ФИО *
              <input
                type="text"
                ref={inputContactName}
                placeholder="Введите ФИО контактного лица"
                required
                disabled={submitting}
              />
            </label>
            <label>
              Описание *
              <input
                type="text"
                ref={inputContactDescription}
                placeholder="Введите должность или описание"
                required
                disabled={submitting}
              />
            </label>
            <label>
              Фото
              <input
                type="file"
                ref={inputContactPhoto}
                accept="image/jpeg, image/jpg, image/png, image/gif, image/webp"
                disabled={submitting}
              />
            </label>
            <button type="submit" disabled={submitting}>
              {submitting ? "Сохранение..." : "Сохранить"}
            </button>
          </form>
        </details>

        <details>
          <summary
            onClick={(e) => {
              getFetchContacts();
              closeDetails(e);
            }}
          >
            Контакты (удаление)
          </summary>
          {loadingContent ? (
            "Загрузка..."
          ) : (
            <div className="items">
              {contacts.map((e, index) => {
                return (
                  <div className="item" key={index}>
                    {e.name} -{" "}
                    <button onClick={() => deleteContacts(e.id)}>
                      Удалить
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </details>
        <button className="exitBtn" onClick={logout}>
          Выйти
        </button>
      </main>
    </div>
  );
}
