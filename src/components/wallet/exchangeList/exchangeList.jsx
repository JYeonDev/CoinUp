import React from "react";
import styles from "./exchangeList.module.css";

const ExchangeList = ({ date, memo, price, result }) => {
  return (
    <div className={styles.exchange_container}>
      <div className={styles.exchange_list}>
        <div className={styles.item_block}>
          <div>{date}날짜</div>
          <div>{memo}메모</div>
          <div>{price}가격</div>
          <div>{result}입출금</div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeList;
