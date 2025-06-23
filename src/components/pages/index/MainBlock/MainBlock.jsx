import "./MainBlock.scss";

export default function MainBlock() {
  return (
    <div className="MainBlock">
      <div className="text">
        <h1>
          МАСКСЕТИ ОМСК
          <span>
            <img src="/logo.png" alt="" />
          </span>
        </h1>
        <h2>
          <span className="is-1">МАСКИРОВОЧНАЯ СЕТЬ = </span>
          <span className="is-2">СПАСЁННАЯ ЖИЗНЬ!</span>
        </h2>
        <h3>
          Плетём Маскировочные сети на пожертвования и БЕСПЛАТНО передаём на
          фронт
          <br />
          <strong>Плести сети - дело, посильное каждому!</strong>
        </h3>
        <div className="btns">
          <a
            href="https://t.me/masksetiomsk"
            target="_blank"
            className="is-btn"
          >
            ПРИСОЕДИНИТЬСЯ
          </a>
          <a href="/#payment-details" className="is-btn">
            ПОДДЕРЖАТЬ
          </a>
        </div>
      </div>
      <div className="img-mask"></div>
      <div className="bg-photo"></div>
      <img src="/images/rusline.png" className="is-2" alt="" />
    </div>
  );
}
