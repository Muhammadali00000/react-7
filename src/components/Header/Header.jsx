import React, { useState } from "react";
import "./Header.scss";
import Card from "../Card/Card";
import Title from "../Title/Title";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt=""
              className="logo"
            />

            <div className={`header__menu ${isActive ? "active" : ""}`}>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Testimonials</a>
              <a href="">Contacts</a>
            </div>

            <div
              onClick={toggleBurger}
              className={`burger ${isActive ? "active" : ""}`}
            >
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </header>

      <Title>Транспорт</Title>

      <div className="wrap">
        <Card
          name="Машина"
          price="150.000$"
          otziv="Не битая"
          img="https://s1.bloknot-stavropol.ru/thumb/850x0xcut/upload/iblock/405/0mi76x4fstmo7p3ivce4l86za7k9o2e7/shesterka-prevyu.jpg"
        />
        <Card
          name="Самалет"
          price="100.000$"
          otziv="Почти новая"
          img="https://img-fotki.yandex.ru/get/6622/84064482.12/0_74212_3e6609e1_XXL.jpg"
        />
        <Card
          name="Мотоцикл"
          price="50.000$"
          otziv="Бабка в подарок"
          img="https://funny.klev.club/uploads/posts/2024-03/funny-klev-club-p-smeshnie-kartinki-babka-na-mototsikle-30.jpg"
        />
        <Card />
      </div>

      <Title>Одежда</Title>

      <div className="wrap">
        <Card
          name="Куртки"
          price="599$"
          img="https://ae04.alicdn.com/kf/S997fc19cd16e4b73af6226ab9c74c30dI.jpg_480x480.jpg"
        />
        <Card
          name="Футболки"
          price="99$"
          img="https://images.satu.kz/204130761_w600_h600_204130761.jpg"
        />
        <Card
          name="Джинсы"
          price="199%"
          img="https://static-basket-02.wbbasket.ru/vol25/973267/wbkids_articles_editor/fa23eacf-1b88-42a8-960f-5ca3b36f3f7b.jpg"
        />
        <Card
          name="Кроссовки"
          price="399$"
          img="https://img.joomcdn.net/4b982d74e9823ae9d562bbe70dd322a096932c5b_original.jpeg"
        />
        <Card/>
      </div>

      <Title>Дома</Title>
      <div className="wrap">
        <Card
        name="Старый дом"
        price="100$"
        img="https://img.freepik.com/free-photo/view-abandoned-decaying-house-nature_23-2150166557.jpg"
        />
        <Card
        name="Средний Дом"
        price="100.000$"
        img="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
        />
        <Card
        name="Новый дом"
        price="250.000$"
        img="https://bigfoto.name/uploads/posts/2022-02/1645258094_1-bigfoto-name-p-krasivie-doma-proekti-zagorodnie-i-kottedz-3.jpg"
        />
        <Card
        name="Дом будущего"
        price="999.999.999.999$"
        img="https://img.freepik.com/free-photo/house-with-green-led-strip-that-says-smart-house_123827-23799.jpg"
        />
      </div>
    </>
  );
};

export default Header;
