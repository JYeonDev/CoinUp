/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1 className={styles.logo}>
          <strong className={styles.strong}>C</strong>oin
          <br />
          <strong className={styles.strong}>U</strong>p
        </h1>
        <img className={styles.logoImage} src={"/images/logo.png"} alt="logo" />
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">실시간가격</Link>
          </li>
          <li>
            <Link to="/">관심종목</Link>
          </li>
          <li>
            <Link to="/">코인관련뉴스</Link>
          </li>
          <li>
            <Link to="/">주요거래소</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
