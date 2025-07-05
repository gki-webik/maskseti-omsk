import "./IsFeedback.scss";

export default function IsFeedback() {
  return (
    <div className="IsFeedback" id="is-feedback">
      <div className="left">
        <h2>
          ОБРАТНАЯ СВЯЗЬ
          <span>
            <img src="/logo.png" alt="" />
          </span>
        </h2>
        <div className="form">
          <form
            action="https://wapi.gki-webik.ru/v3/maskseti/sendMail"
            method="POST"
          >
            <input type="text" name="name" required placeholder="ИМЯ" />
            <input type="text" name="theme" required placeholder="ТЕМА" />
            <input type="email" name="email" required placeholder="EMAIL" />
            <textarea
              id=""
              name="message"
              required
              placeholder="СООБЩЕНИЕ"
            ></textarea>
            <button type="submit">ОТПРАВИТЬ</button>
            <a href="/#payment-details" className="paymentLink">
              Поддержать
            </a>
          </form>
        </div>
      </div>
      <div className="img">
        <img src="/images/people1.png" alt="" />
      </div>
    </div>
  );
}
