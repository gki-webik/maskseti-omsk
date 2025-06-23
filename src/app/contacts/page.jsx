import "./Contacts.scss";
import Link from "next/link";

export default function Contacts() {
  return (
    <div className="Contacts">
      <nav className="is-kroshki">
        <Link href="/">Главная</Link>
        <a className="is-end">Контакты</a>
      </nav>
      <h1>Контакты</h1>
      <div className="blocks">
        <div className="block">
          <img src="/images/people3.jpg" alt="" />
          <div className="text">
            <div className="name">Снегирёва Татьяна Николаевна</div>
            <div className="description">Директор фонда</div>
          </div>
        </div>
        <div className="block">
          <img src="/images/people2.png" alt="" />
          <div className="text">
            <div className="name">Малинина Елена Владимировна</div>
            <div className="description">Заместитель директора</div>
          </div>
        </div>
      </div>
    </div>
  );
}
