import React, { useRef, useState } from "react";
import ExchangeList from "./exchangeList/exchangeList";

import styles from "./wallet.module.css";

const Wallet = () => {
  const [hide, setHide] = useState(false);

  function clickHide() {
    setHide(!hide);
  }

  const [item, setItem] = useState([]);

  const date = new Date();
  const time = date.getTime();

  const inputRef = useRef();
  console.log(inputRef);
  function addItem() {
    if (inputRef.current.value) {
      const itemCopy = [...item];
      itemCopy.push(
        <li>
          <span>{time}</span>
          <span>시간</span>
          <span>금액</span>
          {inputRef.current.value}
        </li>
      );
      setItem([itemCopy]);
      inputRef.current.value = "";
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.property}>
        <span className={styles.total}>총 보유자산</span>
        <span>
          <span className={styles.price}>0</span> KRW
        </span>
      </div>
      <div className={styles.divide}>
        <div className={styles.deposit} onClick={clickHide}>
          입금
        </div>
        <div className={styles.withDraw}>출금</div>
      </div>
      {hide ? null : (
        <div className={styles.deposit_page}>
          <p>하루 이체한도 : 200,000,000 KRW</p>
          <p>보유자산 : 0 KRW</p>
          <div className={styles.input_container}></div>
        </div>
      )}

      {/* todolist 쓸곳 */}

      <input
        className={styles.inputText}
        type="text"
        placeholder="금액을 입력하세요."
        ref={inputRef}
      />
      <input
        type="button"
        value="입력"
        onClick={() => {
          addItem();
        }}
      />
      <ExchangeList item={item} />
    </div>
  );
};

export default Wallet;
