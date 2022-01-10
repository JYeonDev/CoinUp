import React from "react";
import styles from "./realtimePrice.module.css";

const RealtimePrice = (props) => {
  const options = { method: "GET", headers: { Accept: "application/json" } };

  let promise = fetch(
    "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=1",
    options
  )
    .then((response) => response.json())
    .then((response) => response[0].market)
    .catch((err) => console.error(err));

  console.log();

  return <div className={styles.price}>실시간가격</div>;
};

export default RealtimePrice;
