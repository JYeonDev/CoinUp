import React, { useState } from "react";
import styles from "./wallet.module.css";

const Wallet = () => {
  const [price, setPrice] = useState(0);
  const [hide, setHide] = useState(false);

  function clickHide() {
    setHide(!hide);
  }

  return (
    <div className={styles.container}>
      <div className={styles.property}>
        <span className={styles.total}>총 보유자산</span>
        <span>
          <span className={styles.price}>{price}</span> KRW
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
            <input placeholder="금액을 입력해주세요" />
            <button>확인</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;
