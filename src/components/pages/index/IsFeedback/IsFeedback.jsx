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
          <form action="">
            <input type="text" placeholder="ИМЯ" />
            <input type="text" placeholder="ТЕМА" />
            <input type="email" placeholder="EMAIL" />
            <textarea name="" id="" placeholder="СООБЩЕНИЕ"></textarea>
            <button type="submit">ОТПРАВИТЬ</button>
          </form>
        </div>
      </div>
      <div className="img">
        <img src="/images/people1.png" alt="" />
      </div>
    </div>
  );
}
