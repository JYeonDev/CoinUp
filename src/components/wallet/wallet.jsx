import React, { useRef, useState } from "react";
import ExchangeList from "./exchangeList/exchangeList";

import styles from "./wallet.module.css";

const Wallet = () => {
  const [hide, setHide] = useState(true);
  const [hide_, setHide_] = useState(true);
  const [price, setPrice] = useState(0);

  function clickHide() {
    setHide(!hide);
    setHide_(true);
  }

  function clickHide_() {
    setHide_(!hide_);
    setHide(true);
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
  function addItem() {
    if (inputRef.current.value) {
      const itemCopy = [...item];
      const value = inputRef.current.value;
      const valueComma = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      itemCopy.push(
        <li className={styles.item_list}>
          <span className={styles.item_list_margin1}>
            {dateString} {timeString}
          </span>
          <span
            style={!hide ? { color: "red" } : !hide_ ? { color: "blue" } : null}
            className={styles.item_list_margin2}
          >
            {valueComma} 원
          </span>
          <span
            style={!hide ? { color: "red" } : !hide_ ? { color: "blue" } : null}
            className={styles.item_list_margin3}
          >
            {!hide ? "입금" : null}
            {!hide_ ? "출금" : null}
          </span>
        </li>
      );

      setItem([itemCopy]);
      inputRef.current.value = "";
    }
  }

  function plus() {
    if (0 <= price) {
      setPrice(Number(price) + Number(inputRef.current.value));
    }
  }
  function minus() {
    if (0 < price) {
      setPrice(Number(price) - Number(inputRef.current.value));
    } else if (0 > price) {
      alert("보유자산보다 출금액이 많습니다.");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.property}>
        <span className={styles.total}>총 보유자산</span>
        <span>
          <span className={styles.price}>
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>{" "}
          KRW
        </span>
      </div>
      <div className={styles.divide}>
        <div className={styles.deposit} onClick={clickHide}>
          입금
        </div>
        <div className={styles.withDraw} onClick={clickHide_}>
          출금
        </div>
      </div>
      {hide ? null : (
        <div className={styles.deposit_page}>
          <p>하루 이체한도 : 200,000,000 KRW</p>
          <p>
            보유자산 : {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            KRW
          </p>
          <div className={styles.input_container}></div>
          <input
            className={styles.inputText}
            type="text"
            placeholder="금액을 입력하세요."
            ref={inputRef}
          />
          <input
            type="button"
            value="입금"
            onClick={() => {
              plus();
              addItem();
            }}
          />
        </div>
      )}

      {hide_ ? null : (
        <div className={styles.deposit_page}>
          <p>하루 이체한도 : 200,000,000 KRW</p>
          <p>
            보유자산 : {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            KRW
          </p>
          <div className={styles.input_container}></div>
          <input
            className={styles.inputText}
            type="text"
            placeholder="금액을 입력하세요."
            ref={inputRef}
          />
          <input
            type="button"
            value="출금"
            onClick={() => {
              minus();
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
