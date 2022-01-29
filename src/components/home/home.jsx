/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import styles from "./home.module.css";

const Home = (props) => {
  const [styleChange, setStyleChange] = useState(false);

  function coinBtn() {
    setStyleChange(!styleChange);
  }

  return (
    <div className={styles.about}>
      <img
        className={styleChange ? styles.setCoinImg : styles.coinImg}
        onClick={coinBtn}
        src="../images/aboutLogo.png"
      />
      <div
        onClick={coinBtn}
        className={styleChange ? styles.setArrow : styles.arrow}
      >
        ⇧
      </div>
      {styleChange ? (
        <div className={styles.text}>
          <h1>CoinUp에 관하여</h1>
          <p>
            해당 사이트는 제작자 김종연에 의해 개설 및 운영됩니다
            <br />
            CoinUp은 제작자가 코인으로 인한 투자 실패로 투자로 인한 피해를
            줄이고자 제작한 모의투자사이트입니다.
            <br />
            최근 몇 년간 강한 코인 열풍 속에 투자자가 늘어나면서 저와 같은
            피해를 겪고 있는 투자자들을 줄이고자
            <br />
            주식의 모의투자 아이디어를 빌려와 제작하게 되었습니다.
            <br />
            투자에 어려움을 겪으시는 분들께서 해당 사이트를 통해 코인에 대한
            감을 잡으시고 성공적인 투자를 목표로 하시기 바랍니다.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
