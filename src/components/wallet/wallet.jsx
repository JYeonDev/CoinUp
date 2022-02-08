import React, { useRef, useState } from "react";
import ExchangeList from "./exchangeList/exchangeList";

import styles from "./wallet.module.css";

const Wallet = () => {
  const [price, setPrice] = useState(0);
  const [money, setMoney] = useState(0);
  const [hide, setHide] = useState(false);
  const [exchange, setExchange] = useState([]);
  const inputRef = useRef();

  let date = new Date();
  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  let dateString = year + "/" + month + "/" + day;

  let hours = date.getHours();
  let minutes = ("0" + date.getMinutes()).slice(-2);
  let seconds = ("0" + date.getSeconds()).slice(-2);
  let timeString = hours + ":" + minutes + ":" + seconds;

  function clickHide() {
    setHide(!hide);
  }

  function onClick() {
    let exchangeCopy = [...exchange];
    exchangeCopy.unshift(money);
    setExchange(exchangeCopy);
    setMoney(inputRef.current.value);
    setPrice(Number(inputRef.current.value));
  }

  return (
    <div className={styles.container}>
      <div className={styles.property}>
        <span className={styles.total}>총 보유자산</span>
        <span>
          <span className={styles.price}>{money}</span> KRW
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
          <p>보유자산 : {price} KRW</p>
          <div className={styles.input_container}>
            <form>
              <input
                type="text"
                placeholder="금액을 입력해주세요"
                autoFocus
                ref={inputRef}
              />
              <button onClick={onClick}>입금</button>
            </form>
          </div>
        </div>
      )}
      <div className={styles.exchange_list}>
        <div className={styles.exchange}>입출금내역</div>
        <div className={styles.exchange_text}>
          <p className={styles.title}>날짜</p>
          <p className={styles.title}>내용</p>
          <p className={styles.title}>금액</p>
          <p className={styles.title}>입/출금</p>
        </div>
        {/* {exchange.map((list) => {
          return (
            <div className={styles.exchange_text}>
              <p className={styles.time}>
                {dateString} {timeString}
              </p>
              <p className={styles.memo}></p>
              <p className={styles.money}>{list} 원</p>
              <p>입/출금</p>
            </div>
          );
        })} */}
        <ExchangeList />
      </div>
    </div>
  );
};

export default Wallet;
