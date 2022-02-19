import React, { useCallback, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./wishList.module.css";

const WishList = () => {
  const store = useSelector((store) => store.market);
  const dispatch = useDispatch();
  console.log(store.length, "스토어");
  console.log(store, "store");

  // 코인 info
  const [info, setInfo] = useState(Array(store.length).fill(false));
  const [randomNumber, setRandomNumber] = useState([
    Math.floor(Math.random() * 10000),
  ]);

  return (
    <div>
      {store
        .filter((market) => market.market.includes("KRW-"))
        .map((market, index) => {
          function click() {
            const newInfo = Array(market.market.includes("KRW-").length).fill(
              false
            );
            newInfo[index] = true;
            setInfo(newInfo);
            const newRandom = Array(Math.floor(Math.random() * 10000));
            newRandom[index] = Math.floor(Math.random() * 10000);
            setRandomNumber(newRandom);

            // console.log(market);
          }

          return (
            <div key={index}>
              <ListGroup
                className={styles.container}
                onClick={() => {
                  let same = store.findIndex((a) => {
                    return a.market === store[index].market;
                  });
                  store.splice(same, 1);
                }}
              >
                <ListGroup.Item
                  className={styles.marketList}
                  onClick={click}
                  info={info[index]}
                  elmentIndex={index}
                >
                  {market.market} <span className={styles.vertical_bar}>|</span>{" "}
                  {market.korean_name}{" "}
                  <span className={styles.vertical_bar}>|</span>{" "}
                  {market.english_name}
                </ListGroup.Item>
                {/* {info[index] ? (
                  <div className={styles.coinInfo}>
                    <div className={styles.price}>
                      현재가 : {randomNumber} 원
                    </div>
                    <div className={styles.plus}>x</div>
                  </div>
                ) : null} */}
              </ListGroup>
            </div>
          );
        })}
    </div>
  );
};

export default WishList;
