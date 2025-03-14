import React from "react";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <div className="footer__logo">
            <span className="footer__logo-icon">N_515</span>
            <span className="footer__logo-text">Туристическая компания</span>
          </div>
          <p className="footer__description">
            Открывайте новые горизонты с нами. Мы делаем путешествия доступными
            и незабываемыми.
          </p>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Контакты</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <FaMapMarkerAlt className="footer__icon" />
              <span>улица Куренкеева 138</span>
            </li>
            <li className="footer__list-item">
              <FaPhone className="footer__icon" />
              <span>0 500 129 341 018</span>
            </li>
            <li className="footer__list-item">
              <FaEnvelope className="footer__icon" />
              <span>nurnas399@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Популярные направления</h3>
          <ul className="footer__list">
            <li className="footer__list-item">Озера</li>
            <li className="footer__list-item">Горы</li>
            <li className="footer__list-item">Достопримечательности</li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Следите за нами</h3>
          <div className="footer__social">
            <a href="#" className="footer__social-link">
              <FaFacebookF className="footer__social-icon" />
            </a>
            <a href="#" className="footer__social-link">
              <FaInstagram className="footer__social-icon" />
            </a>
            <a href="#" className="footer__social-link">
              <FaTwitter className="footer__social-icon" />
            </a>
            <a href="#" className="footer__social-link">
              <FaTelegram className="footer__social-icon" />
            </a>
          </div>
          <div className="footer__newsletter">
            <Link to={"/coment"}>
              <h4 className="footer__subtitle">Оставьте отзыв</h4>
            </Link>
            <div className="footer__form">
           <Link to="/feed">   <h3>Отзывы </h3></Link>
              <button className="footer__button">→</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {currentYear} N_515 Туристическая компания. Все права защищены.
        </p>
        <div className="footer__links">
          <a href="#" className="footer__link">
            Политика конфиденциальности
          </a>
          <a href="#" className="footer__link">
            Условия использования
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
