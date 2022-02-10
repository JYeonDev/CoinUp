import React, { useRef, useState } from "react";
import ExchangeList from "./exchangeList/exchangeList";

import styles from "./wallet.module.css";

const Wallet = () => {
  const [hide, setHide] = useState(false);

  function clickHide() {
    setHide(!hide);
  }

  const [item, setItem] = useState([]);

  const today = new Date();

  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);

  const dateString = year + "-" + month + "-" + day;

  const hours = ("0" + today.getHours()).slice(-2);
  const minutes = ("0" + today.getMinutes()).slice(-2);
  const seconds = ("0" + today.getSeconds()).slice(-2);

  const timeString = hours + ":" + minutes + ":" + seconds;

  const inputRef = useRef();
  console.log(inputRef);
  function addItem() {
    if (inputRef.current.value) {
      const itemCopy = [...item];
      itemCopy.push(
        <li className={styles.item_list}>
          <span className={styles.item_list_margin1}>
            {dateString} {timeString}
          </span>
          <span className={styles.item_list_margin2}>
            {inputRef.current.value}
          </span>
          <span className={styles.item_list_margin3}>미정</span>
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
        <div className={styles.withDraw} onClick={clickHide}>
          출금
        </div>
      </div>
      {hide ? null : (
        <div className={styles.deposit_page}>
          <p>하루 이체한도 : 200,000,000 KRW</p>
          <p>보유자산 : 0 KRW</p>
          <div className={styles.input_container}></div>
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
        </div>
      )}

      <div className={styles.list_title}>입출금내역</div>

      <div className={styles.title}>
        <span className={styles.title_margin1}>날짜</span>
        <span className={styles.title_margin2}>금액</span>
        <span className={styles.title_margin3}>입/출금</span>
      </div>
      <ul>{item}</ul>
    </div>
  );
};

export default Wallet;
