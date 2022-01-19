import React from "react";

const MarketList = ({ marketList }) => {
  console.log(marketList);
  return (
    <div>
      {marketList.map((market) => {
        return <div key={market.market}>{market.market}</div>;
      })}
    </div>
  );
};

export default MarketList;
