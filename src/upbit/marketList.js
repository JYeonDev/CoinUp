import React from "react";
import { ListGroup } from "react-bootstrap";
import styles from "./marketList.module.css";

const MarketList = ({ marketList }) => {
  console.log(marketList);
  return (
    <div>
      {marketList.map((market) => {
        return (
          <div key={market.market}>
            <ListGroup className={styles.container}>
              <ListGroup.Item className={styles.marketList}>
                {market.market}
                {market.korean_name}
                {market.english_name}
                {/* {market.market.indexOf("KRW") ? true : market.market}
                {market.market.indexOf("KRW") ? true : market.korean_name}
                {market.market.indexOf("KRW") ? true : market.english_name} */}
              </ListGroup.Item>
            </ListGroup>
          </div>
        );
      })}
    </div>
  );
};

export default MarketList;
