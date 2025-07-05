"use client";
import { useState } from "react";

export default function FormComponent() {
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
    <form action="https://api.gki-webik.ru/omskseti/pay.php" method="post">
      <div className="line">
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="fio" placeholder="Имя и фамилия" required />
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
  );
}
