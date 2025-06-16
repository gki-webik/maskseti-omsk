"use client";
import "../styles/globals.scss";
import "./layout.scss";
import Header from "@/components/header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>Масксети</title>

        {/* Основные мета-теги */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
        />
        <meta
          name="description"
          content="МАСКИРОВОЧНАЯ СЕТЬ = СПАСЁННАЯ ЖИЗНЬ! Плетём Маскировочные сети на пожертвования и БЕСПЛАТНО передаём на фронт."
        />

        {/* Расширенные мета-теги для поисковых систем */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="yandex"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="google" content="notranslate" />

        {/* Языковые настройки */}
        <meta name="language" content="Russian" />
        <meta httpEquiv="content-language" content="ru" />

        {/* Ссылки на иконки и манифест */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Канонический URL */}
        <link rel="canonical" href="https://gki-webik.ru" />
      </head>
      <body>
        <div className="max_container">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
