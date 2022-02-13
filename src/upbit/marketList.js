import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import styles from "./marketList.module.css";

const MarketList = ({ marketList }) => {
  const [hide, setHide] = useState(false);
  function coinInfo() {
    setHide(!hide);
  }

  console.log(marketList);

  return (
    <div>
      {marketList
        .filter((market) => market.market.includes("KRW-"))
        .map((market) => {
          function click() {
            market.trueClick = hide;
            setHide(!hide);
          }
          console.log(market);
          return (
            <div key={market.market}>
              <ListGroup className={styles.container}>
                <ListGroup.Item className={styles.marketList} onClick={click}>
                  {market.market} <span className={styles.vertical_bar}>|</span>{" "}
                  {market.korean_name}{" "}
                  <span className={styles.vertical_bar}>|</span>{" "}
                  {market.english_name}
                </ListGroup.Item>
                {market.trueClick ? <div>하이</div> : null}
              </ListGroup>
            </div>
          );
        })}
    </div>
  );
};

export default MarketList;
