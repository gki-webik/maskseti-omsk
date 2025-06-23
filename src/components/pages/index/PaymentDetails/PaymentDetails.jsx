import "./PaymentDetails.scss";
import { useState } from "react";

function TextComponent(props) {
  return (
    <div className={props.classComponent + " is-text"}>
      <p>
        <strong>Карта организации</strong>: 2201 9501 7229 2988
      </p>
      <p>
        <strong>Для юридических лиц:</strong>
        <br />
        Наименование организации: ОПБФ «Защита»
        <br />
        ИНН организации: 5503269293
        <br />
        Банковские реквизиты:
        <br />
        Номер расчетного счета: 40703810592000000005 в АО "БАНК АКЦЕПТ", г.
        Новосибирск.
        <br />
        Корреспондентский счет: 30101810200000000815
        <br />
        БИК 045004815
        <br />
        ИНН банка 5405114781
        <br />
        Назначение платежа: Добровольное пожертвование
      </p>
    </div>
  );
}

export default function PaymentDetails() {
  const [amount, setAmount] = useState(150);

  function handleInputChange(event) {
    const labels = document.querySelectorAll(".PaymentDetails label");
    labels.forEach((label) => label.classList.remove("is-active"));
    event.currentTarget.classList.add("is-active");
    setAmount(event.target.value);
  }

  function handleLabelClick(e, text) {
    setAmount(text);
    const labels = document.querySelectorAll(".PaymentDetails label");
    labels.forEach((label) => label.classList.remove("is-active"));
    const inputs = document.querySelectorAll(".PaymentDetails input");
    inputs.forEach((input) => input.classList.remove("is-active"));
    e.currentTarget.classList.add("is-active");
  }

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
        <TextComponent classComponent="text1"></TextComponent>
      </div>
      <div className="img">
        <a href="/images/qr.png" download="qr">
          <img src="/images/qr.png" alt="" />
        </a>
        <a href="/images/qr.png" download="qr" className="is-1">
          Скачать QR-код
        </a>
        <form action="https://api.gki-webik.ru/omskseti/pay.php" method="post">
          <div className="line">
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="text"
              name="fio"
              placeholder="Имя и фамилия"
              required
            />
          </div>
          <div className="line">
            <label onClick={(e) => handleLabelClick(e, 100)}>
              <span>100₽</span>
            </label>
            <label onClick={(e) => handleLabelClick(e, 300)}>
              <span>300₽</span>
            </label>
            <label onClick={(e) => handleLabelClick(e, 500)}>
              <span>500₽</span>
            </label>
            <label onClick={(e) => handleLabelClick(e, 1000)}>
              <span>1000₽</span>
            </label>
          </div>
          <div className="line">
            <input
              type="number"
              placeholder="Сумма"
              value={amount}
              min="1"
              name="amount"
              className="is-active"
              onChange={handleInputChange}
              onFocus={handleInputChange}
            />
          </div>
          <div className="line">
            <button type="submit">Пожертвовать</button>
          </div>
          <div className="line is-acept">
            <input type="checkbox" required /> Соглашаюсь с{" "}
            <a href="/offer.docx" download>
              офертой
            </a>
            <br />
            <input type="checkbox" required /> Соглашаюсь на{" "}
            <a href="/conf.docx" download>
              обработку моих персональных данных
            </a>
          </div>
        </form>
        <TextComponent classComponent="text2"></TextComponent>
      </div>
    </div>
  );
}
