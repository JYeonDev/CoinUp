import React from "react";
import { ListGroup } from "react-bootstrap";

const MarketList = ({ marketList }) => {
  console.log(marketList);
  return (
    <div>
      {marketList.map((market) => {
        return (
          <div key={market.market}>
            <ListGroup>
              <ListGroup.Item>
                {market.market.indexOf("KRW") ? null : market.market}
                {market.market.indexOf("KRW") ? null : market.korean_name}
                {market.market.indexOf("KRW") ? null : market.english_name}
              </ListGroup.Item>
            </ListGroup>
          </div>
        );
      })}
      )}
    </div>
  );
};

export default MarketList;
