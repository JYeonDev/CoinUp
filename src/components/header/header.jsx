/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.title}>
          <h1 className={styles.logo}>
            <strong className={styles.strong}>C</strong>oin
            <br />
            <strong className={styles.strong}>U</strong>p
          </h1>
          <img
            className={styles.logoImage}
            src={"/images/logo.png"}
            alt="logo"
          />
        </div>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="realtime">실시간가격</Link>
          </li>
          <li>
            <Link to="wallet">입출금</Link>
          </li>
          <li>
            <Link to="/wishlist">관심종목</Link>
          </li>
          <li>
            <Link to="news">코인관련뉴스</Link>
          </li>
          <li>
            <Link to="/major">주요거래소</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
